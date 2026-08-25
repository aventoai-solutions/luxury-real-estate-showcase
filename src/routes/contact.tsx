import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Enquire — Meridian Estates" },
      {
        name: "description",
        content:
          "Request a private viewing or access to the Meridian Estates register. An advisor replies within one business day.",
      },
      { property: "og:title", content: "Enquire — Meridian Estates" },
      {
        property: "og:description",
        content: "Request a private viewing or access to the private register.",
      },
    ],
  }),
  component: Contact;
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="px-6 pb-24 pt-40 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0">
            <p className="eyebrow">Enquire</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.08] sm:text-6xl">
              Begin a quiet conversation.
            </h1>
            <div className="gold-rule mt-8" />
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Whether you are releasing a home or looking for one, an advisor will reply personally
              within one business day. Nothing is shared beyond our desk.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>+41 22 908 44 10</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>private@meridianestates.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  Rue du Rhône 62, Geneva
                  <br />
                  Madison Avenue 745, New York
                </span>
              </li>
            </ul>
          </div>

          <div className="luxe-card min-w-0 p-8 sm:p-10">
            {sent ? (
              <div className="flex flex-col items-start">
                <Check className="size-8 text-gold" />
                <h2 className="mt-5 font-display text-3xl">Thank you.</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Your enquiry is with an advisor. Expect a personal reply within one business day.
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Alexandra Reyes" required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Phone" name="phone" placeholder="+41 …" />
                  <div className="min-w-0">
                    <label
                      htmlFor="intent"
                      className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      I am
                    </label>
                    <select
                      id="intent"
                      name="intent"
                      className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                    >
                      <option>Looking to acquire</option>
                      <option>Releasing a home</option>
                      <option>Requesting register access</option>
                    </select>
                  </div>
                </div>
                <div className="min-w-0">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Geography, architecture, budget ceiling, timing…"
                    className="w-full resize-none border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-gold"
      />
    </div>
  );
}
