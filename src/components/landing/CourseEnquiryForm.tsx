"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappWith } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .regex(/^[6-9]\d{9}$/, "Enter a 10-digit mobile number"),
});

type Values = z.infer<typeof schema>;
export type EnquiryIntent = "enrol" | "callback";

const intents: { id: EnquiryIntent; label: string }[] = [
  { id: "enrol", label: "Enroll now" },
  { id: "callback", label: "Get a callback" },
];

/**
 * The enrol / callback form for a classroom package, shown in a side panel
 * when a package card's button is pressed. No backend yet: like the visit
 * form, the request is handed to WhatsApp as a ready-typed message to the
 * academy's number, so it reaches the admissions team.
 */
export function CourseEnquiryForm({
  id,
  course,
  intent,
  onIntentChange,
  onSent,
  className,
}: {
  /** Prefix for the field ids. */
  id: string;
  /** The course as the message names it, e.g. "Siddhartha — Class 11 classroom (₹79,998)". */
  course: string;
  intent: EnquiryIntent;
  onIntentChange: (intent: EnquiryIntent) => void;
  /** Called once the WhatsApp message is opened. */
  onSent?: () => void;
  className?: string;
}) {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "" },
  });
  const { errors } = form.formState;

  const onSubmit = (values: Values) => {
    const message = [
      intent === "enrol" ? "Hi, I'd like to enrol in this course." : "Hi, please call me back about this course.",
      `Course: ${course}`,
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Mobile: ${values.phone}`,
    ].join("\n");
    // A blocked pop-up falls back to opening WhatsApp in this tab.
    const url = whatsappWith(message);
    const tab = window.open(url, "_blank");
    if (tab) tab.opener = null;
    else window.location.href = url;
    toast.success(
      intent === "enrol"
        ? `Thanks, ${values.name.split(" ")[0]}! Send the WhatsApp message and the admissions team will take it from there.`
        : `Thanks, ${values.name.split(" ")[0]}! Send the WhatsApp message and we'll call you back.`,
    );
    form.reset();
    onSent?.();
  };

  const field = (name: keyof Values, label: string, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div>
      <label htmlFor={`${id}-${name}`} className="mb-1 block text-xs font-medium text-brand-text-secondary">
        {label} <span className="text-destructive">*</span>
      </label>
      <input
        id={`${id}-${name}`}
        aria-invalid={!!errors[name]}
        className={cn(
          "h-11 w-full rounded-xl border bg-white px-3.5 text-sm text-brand-text-primary outline-none placeholder:text-brand-text-muted focus-visible:border-brand-primary focus-visible:ring-[3px] focus-visible:ring-brand-primary/15",
          errors[name] ? "border-destructive" : "border-brand-border-light",
        )}
        {...props}
        {...form.register(name)}
      />
      {errors[name] && <p className="mt-1 text-xs font-medium text-destructive">{errors[name]?.message}</p>}
    </div>
  );

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className={cn("space-y-4", className)}>
      <div role="radiogroup" aria-label="What would you like?" className="grid grid-cols-2 gap-1 rounded-xl bg-brand-page-bg p-1">
        {intents.map((i) => (
          <button
            key={i.id}
            type="button"
            role="radio"
            aria-checked={intent === i.id}
            onClick={() => onIntentChange(i.id)}
            className={cn(
              "rounded-lg py-2 text-sm font-semibold transition-colors",
              intent === i.id ? "bg-white text-brand-primary-darker shadow-sm" : "text-brand-text-muted hover:text-brand-primary",
            )}
          >
            {i.label}
          </button>
        ))}
      </div>
      {field("name", "Name", { autoComplete: "name", placeholder: "e.g. Ananya R." })}
      {field("email", "Email", { type: "email", autoComplete: "email", placeholder: "you@example.com" })}
      {field("phone", "Phone", {
        type: "tel",
        inputMode: "numeric",
        maxLength: 10,
        autoComplete: "tel-national",
        placeholder: "10-digit mobile number",
      })}
      <Button type="submit" size="lg" className="w-full rounded-xl">
        {intent === "enrol" ? "Enroll now" : "Request a callback"}
      </Button>
      <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-brand-text-muted">
        <WhatsAppIcon className="size-3.5" /> Opens WhatsApp with your details filled in — just press send.
      </p>
    </form>
  );
}
