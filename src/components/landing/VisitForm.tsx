"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { branches, connectOptions, programs, whatsappWith } from "./data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter the student's name"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a 10-digit mobile number"),
  program: z.string().min(1, "Pick a programme"),
  branch: z.string(),
  connect: z.string().min(1),
});

type Values = z.infer<typeof schema>;

const selectClass =
  "h-10 w-full rounded-md border border-input bg-white px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function VisitForm({ className }: { className?: string }) {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", program: "", branch: "", connect: "centre" },
    mode: "onBlur",
  });
  const { errors, isSubmitting } = form.formState;
  const connect = useWatch({ control: form.control, name: "connect" });

  // No backend yet: the enquiry is handed to WhatsApp as a ready-typed message
  // to the academy's number, so it reaches a mentor instead of vanishing.
  const onSubmit = (values: Values) => {
    const programme =
      values.program === "vrddhi"
        ? "Vrddhi scholarship test"
        : programs.find((p) => p.id === values.program)?.title ?? values.program;
    const how = connectOptions.find((o) => o.id === values.connect)?.label ?? values.connect;
    const where = branches.find((b) => b.id === values.branch)?.name ?? "Not sure — please suggest";
    const message = [
      "Hi, I'd like to book a free counselling session.",
      `Student: ${values.name}`,
      `Mobile: ${values.phone}`,
      `Interested in: ${programme}`,
      `Branch: ${where}`,
      `Preferred: ${how}`,
    ].join("\n");
    // A blocked pop-up falls back to opening WhatsApp in this tab.
    const url = whatsappWith(message);
    const tab = window.open(url, "_blank");
    if (tab) tab.opener = null;
    else window.location.href = url;
    toast.success(`Thanks, ${values.name.split(" ")[0]}! Send the WhatsApp message and a mentor will reply.`);
    form.reset();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "rounded-2xl border border-brand-border-light bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,83,91,0.25)]",
        className,
      )}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary">
          <CalendarCheck className="size-5" />
        </span>
        <div>
          <p className="font-semibold text-brand-text-primary">Talk to a mentor — free</p>
          <p className="text-xs text-brand-text-muted">
            Counselling + a demo class at your nearest branch
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <fieldset>
          <legend className="mb-2 text-sm font-medium">How would you like to meet?</legend>
          <div className="grid grid-cols-2 gap-2">
            {connectOptions.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={connect === o.id}
                onClick={() => form.setValue("connect", o.id)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                  connect === o.id
                    ? "border-brand-primary bg-brand-subtle-bg text-brand-primary-darker"
                    : "border-brand-border-light text-brand-text-secondary hover:border-brand-border-teal",
                )}
              >
                {o.label}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="space-y-1.5">
          <Label htmlFor="visit-name">Student name</Label>
          <Input id="visit-name" placeholder="e.g. Ananya R." {...form.register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="visit-phone">Parent / student mobile</Label>
          <Input
            id="visit-phone"
            inputMode="numeric"
            maxLength={10}
            placeholder="10-digit number"
            {...form.register("phone")}
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="visit-program">Interested in</Label>
          <select id="visit-program" className={selectClass} {...form.register("program")}>
            <option value="">Select a programme</option>
            {programs.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.classes})
              </option>
            ))}
            <option value="vrddhi">Vrddhi scholarship test</option>
          </select>
          {errors.program && (
            <p className="text-xs text-destructive">{errors.program.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="visit-branch">Nearest branch</Label>
          <select id="visit-branch" className={selectClass} {...form.register("branch")}>
            <option value="">Not sure — suggest one</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} ({b.label})
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          <WhatsAppIcon className="size-4" /> Book my free session
        </Button>
        <p className="text-center text-[11px] text-brand-text-muted">
          Opens WhatsApp with your details filled in — just press send. No spam, ever.
        </p>
      </div>
    </form>
  );
}
