"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Send } from "lucide-react";
import { useId } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { onlinePackages } from "./courses-data";
import { branch, enquiryRequests, whatsappWith } from "./data";

/** The course options: each package, with the exams it covers. */
const courseOptions = [...onlinePackages.map((p) => `${p.name} (${p.exams.join(", ")})`), "Not sure yet"];

const required = (what: string) => z.string().trim().min(1, `${what} is required`);

const schema = z.object({
    name: required("Name"),
    email: required("Email").email("Enter a valid email"),
    phone: required("Phone").regex(/^[6-9]\d{9}$/, "Enter a 10-digit mobile number"),
    course: required("Course"),
    location: required("Location"),
    request: required("Request"),
    date: required("Date"),
    time: required("Time"),
    detail: required("This field"),
  });

type Values = z.infer<typeof schema>;

const selectClass =
  "h-10 w-full rounded-md border border-input bg-white px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50";

const sectionTitle = "text-sm font-semibold text-brand-primary-darker";
const labelClass = "mb-1 block text-xs font-medium text-brand-text-secondary";

/** Today as yyyy-mm-dd in local time, so past dates can't be picked. */
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * "Get in Touch with us" — the same fields, in the same order and wording, as
 * the contact form on aaaedu.in/contact-us: personal information (with the
 * course and the request type), a date and time to be contacted, and the
 * reason for contacting. As there, the request type reshapes the form: "Visit
 * Our Center" names the centre beside the date and time — aaaedu.in asks for a
 * branch here, but this site has one centre, Vijayanagar — and "Home Visit" and
 * "Connect Online" turn the last box into an address or the details to connect.
 */
export function VisitForm({ className }: { className?: string }) {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      location: "",
      request: "",
      date: "",
      time: "",
      detail: "",
    },
    mode: "onBlur",
  });
  const { errors, isSubmitting } = form.formState;
  const request = useWatch({ control: form.control, name: "request" });
  const visit = request === "Visit Our Center";
  const last =
    request === "Home Visit"
      ? { title: "Please provide the address where you would like our executive to meet you", field: "Address" }
      : request === "Connect Online"
        ? { title: "Please provide us the details to connect online", field: "Detail" }
        : { title: "Please provide us the reason for contacting us", field: "Detail" };

  // No backend yet: the enquiry is handed to WhatsApp as a ready-typed message
  // to the academy's number, so it reaches a mentor instead of vanishing.
  const onSubmit = (values: Values) => {
    const message = [
      `Hi, I'd like to get in touch — ${values.request}.`,
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Course: ${values.course}`,
      `Location: ${values.location}`,
      `Preferred date & time: ${values.date} ${values.time}`,
      ...(visit ? [`Centre: ${branch.name}`] : []),
      `${request === "Home Visit" ? "Address" : request === "Connect Online" ? "Details to connect" : "Reason"}: ${values.detail}`,
    ].join("\n");
    // A blocked pop-up falls back to opening WhatsApp in this tab.
    const url = whatsappWith(message);
    const tab = window.open(url, "_blank");
    if (tab) tab.opener = null;
    else window.location.href = url;
    toast.success(`Thanks, ${values.name.split(" ")[0]}! Send the WhatsApp message and we'll get back to you.`);
    form.reset();
  };

  // Each field keeps a visible label above it, so its name is still there once
  // it's filled in; the placeholder only hints at what to type.
  const uid = useId();
  const fid = (name: keyof Values) => `${uid}-${name}`;
  const label = (name: keyof Values, text: string) => (
    <label htmlFor={fid(name)} className={labelClass}>
      {text} <span className="text-destructive">*</span>
    </label>
  );
  const error = (name: keyof Values) =>
    errors[name] && <p className="mt-1 text-xs text-destructive">{errors[name]?.message}</p>;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "overflow-hidden rounded-2xl border border-brand-border-light bg-white shadow-[0_20px_50px_-20px_rgba(0,83,91,0.25)]",
        className,
      )}
    >
      <div className="bg-brand-primary px-6 py-4">
        <p className="font-(family-name:--font-display) text-2xl font-bold text-white">Get in Touch with us</p>
      </div>

      <div className="space-y-5 p-6">
        <fieldset>
          <legend className={sectionTitle}>Personal Information</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              {label("name", "Name")}
              <Input id={fid("name")} placeholder="e.g. Ananya R." autoComplete="name" {...form.register("name")} />
              {error("name")}
            </div>
            <div>
              {label("email", "Email")}
              <Input id={fid("email")} type="email" placeholder="you@example.com" autoComplete="email" {...form.register("email")} />
              {error("email")}
            </div>
            <div>
              {label("phone", "Phone")}
              <Input
                id={fid("phone")}
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="10-digit mobile number"
                autoComplete="tel-national"
                {...form.register("phone")}
              />
              {error("phone")}
            </div>
            <div>
              {label("course", "Course")}
              <select id={fid("course")} className={selectClass} {...form.register("course")}>
                <option value="" disabled hidden>
                  Select a course
                </option>
                {courseOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {error("course")}
            </div>
            <div>
              {label("location", "Location")}
              <Input id={fid("location")} placeholder="e.g. Rajajinagar" {...form.register("location")} />
              {error("location")}
            </div>
            <div>
              {label("request", "Your request")}
              <select id={fid("request")} className={selectClass} {...form.register("request")}>
                <option value="" disabled hidden>
                  Select your request
                </option>
                {enquiryRequests.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {error("request")}
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className={sectionTitle}>Please give us your comfortable date &amp; time to contact you</legend>
          <div className={cn("mt-3 grid gap-3", visit ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
            <div>
              {label("date", "Date")}
              <Input id={fid("date")} type="date" min={today()} {...form.register("date")} />
              {error("date")}
            </div>
            <div>
              {label("time", "Time")}
              <Input id={fid("time")} type="time" {...form.register("time")} />
              {error("time")}
            </div>
            {visit && (
              <p className="flex h-10 items-center gap-2 self-end rounded-md border border-brand-border-light bg-brand-page-bg px-3 text-sm text-brand-text-secondary">
                <MapPin className="size-4 shrink-0 text-brand-primary" /> {branch.name} centre
              </p>
            )}
          </div>
        </fieldset>

        <fieldset>
          <legend className={sectionTitle}>{last.title}</legend>
          <label htmlFor={fid("detail")} className="sr-only">
            {last.field}
          </label>
          <textarea
            id={fid("detail")}
            placeholder={`${last.field}*`}
            rows={4}
            className="mt-3 w-full resize-y rounded-md border border-input bg-white px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            {...form.register("detail")}
          />
          {error("detail")}
        </fieldset>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          <Send className="size-4" /> Submit
        </Button>
        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-brand-text-muted">
          <WhatsAppIcon className="size-3.5" /> Opens WhatsApp with your details filled in — just press send.
        </p>
      </div>
    </form>
  );
}
