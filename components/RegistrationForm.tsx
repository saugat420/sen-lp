"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CtaButton } from "./CtaButton";

type Errors = { firstName?: string; email?: string; whatsapp?: string };

export function RegistrationForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const whatsapp = String(form.get("whatsapp") ?? "").trim();
    const nextErrors: Errors = {};

    if (!firstName) nextErrors.firstName = "Please enter your first name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!whatsapp) nextErrors.whatsapp = "Please enter your WhatsApp number.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) router.push("/thanks");
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="font-outfit rounded-3xl border border-white/90 bg-white/90 p-5 text-left shadow-premium backdrop-blur sm:p-7">
      <div className="space-y-4">
        <div>
          <label className="form-label" htmlFor="firstName">First Name <span className="text-[#ef2029]">*</span></label>
          <input className="form-input" id="firstName" name="firstName" type="text" autoComplete="given-name" placeholder="Enter your first name" aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? "firstName-error" : undefined} />
          {errors.firstName && <p id="firstName-error" className="mt-1.5 text-sm text-[#c9252d]">{errors.firstName}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="email">Email Address <span className="text-[#ef2029]">*</span></label>
          <input className="form-input" id="email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="Enter your email address" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <p id="email-error" className="mt-1.5 text-sm text-[#c9252d]">{errors.email}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="whatsapp">WhatsApp Number <span className="text-[#ef2029]">*</span></label>
          <input className="form-input" id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="Enter your WhatsApp number" aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined} />
          {errors.whatsapp && <p id="whatsapp-error" className="mt-1.5 text-sm text-[#c9252d]">{errors.whatsapp}</p>}
        </div>
      </div>
      <CtaButton type="submit" className="mt-6">Submit &amp; Reserve My Free Seat</CtaButton>
      <p className="mt-4 rounded-xl border border-[#ffc9cd] bg-[#fff1f2] px-4 py-3 text-center text-sm font-bold leading-5 text-[#c61f29]">Only 67 seats remaining... Hurry up!</p>
    </form>
  );
}
