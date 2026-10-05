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
import { connectOptions, programs } from "./data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter the student's name"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a 10-digit mobile number"),
  program: z.string().min(1, "Pick a programme"),
  connect: z.string().min(1),
});

type Values = z.infer<typeof schema>;

const selectClass =
  "h-10 w-full rounded-md border border-input bg-white px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function VisitForm({ className }: { className?: string }) {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", program: "", connect: "centre" },
    mode: "onBlur",
  });
  const { errors, isSubmitting } = form.formState;
  const connect = useWatch({ control: form.control, name: "connect" });

  // Demo only: nothing is sent anywhere.
  const onSubmit = async (values: Values) => {
    await new Promise((r) => setTimeout(r, 500));
    toast.success(`Thanks, ${values.name.split(" ")[0]}! A mentor will call you shortly.`);
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
            Counselling + a demo class at the Vijayanagar centre
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
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Booking…" : "Book my free session"}
        </Button>
        <p className="text-center text-[11px] text-brand-text-muted">
          We&apos;ll call within one working day. No spam, ever.
        </p>
      </div>
    </form>
  );
}
