"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validation";

const field =
  "w-full border-b border-ink/30 bg-transparent py-3 text-lg outline-none focus:border-ink";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    setStatus(res.ok ? "sent" : "error");
    if (res.ok) reset();
  }

  return (
    <section id="contact" className="px-5 py-24 md:px-7">
      <h2 className="text-5xl font-medium tracking-tighter md:text-7xl">
        Contact
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-12 max-w-xl space-y-6"
      >
        <label className="block">
          <span className="text-ink-soft text-sm">Name</span>
          <input {...register("name")} autoComplete="name" className={field} />
          {errors.name && (
            <span role="alert" className="text-sm text-red-700">
              {errors.name.message}
            </span>
          )}
        </label>
        <label className="block">
          <span className="text-ink-soft text-sm">Email</span>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className={field}
          />
          {errors.email && (
            <span role="alert" className="text-sm text-red-700">
              {errors.email.message}
            </span>
          )}
        </label>
        <label className="block">
          <span className="text-ink-soft text-sm">Message</span>
          <textarea {...register("message")} rows={4} className={field} />
          {errors.message && (
            <span role="alert" className="text-sm text-red-700">
              {errors.message.message}
            </span>
          )}
        </label>
        <button
          disabled={isSubmitting}
          className="bg-pill rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-black disabled:opacity-50"
        >
          {isSubmitting ? "Sending" : "Send message"}
        </button>
        <p aria-live="polite" className="text-sm">
          {status === "sent" && "Message sent. I will reply soon."}
          {status === "error" &&
            "The message could not be sent. Try again or email me directly."}
        </p>
      </form>
    </section>
  );
}
