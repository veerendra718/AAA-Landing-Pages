"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { registerUrl } from "./data";

const goals = ["JEE", "NEET", "KCET", "Foundation (8–10)", "Boards"];

export function GoalStart() {
  const router = useRouter();
  const [goal, setGoal] = useState(goals[0]);
  const [phone, setPhone] = useState("");
  const valid = /^[6-9]\d{9}$/.test(phone);

  return (
    <div className="mx-auto w-full max-w-xl">
      <p className="text-sm font-medium text-brand-text-secondary">I&apos;m preparing for</p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {goals.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGoal(g)}
            aria-pressed={goal === g}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
              goal === g
                ? "border-brand-primary bg-brand-primary text-white"
                : "border-brand-border bg-white text-brand-text-secondary hover:border-brand-primary hover:text-brand-primary",
            )}
          >
            {g}
          </button>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (valid) router.push(registerUrl);
        }}
        className="mt-6 flex flex-col gap-2 rounded-2xl border border-brand-border-light bg-white p-2 shadow-[0_20px_50px_-25px_rgba(0,83,91,0.45)] sm:flex-row"
      >
        <div className="flex flex-1 items-center gap-2 px-3">
          <span className="text-sm font-semibold text-brand-text-muted">+91</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            inputMode="numeric"
            placeholder="Enter your mobile number"
            aria-label="Mobile number"
            className="h-11 w-full bg-transparent text-base outline-none placeholder:text-brand-text-faint"
          />
        </div>
        <Button type="submit" size="lg" className="h-11" disabled={!valid}>
          Start {goal.split(" ")[0]} prep free <ArrowRight />
        </Button>
      </form>
    </div>
  );
}
