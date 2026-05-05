import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Instagram, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Signature Stories | Plan Your Event" },
      { name: "description", content: "Begin your signature story. Reach out to plan luxury weddings, parties and cultural events anywhere in India." },
      { property: "og:title", content: "Contact The Signature Stories" },
      { property: "og:description", content: "Tell us about your celebration." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-background text-foreground overflow-hidden pt-24">
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="divider-gold" />
            <span className="text-gold uppercase tracking-[0.4em] text-xs">Get In Touch</span>
            <span className="divider-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mb-8">Begin Your <span className="gradient-gold-text italic">Signature Story</span></h1>
          <p className="font-serif text-xl md:text-2xl text-cream/80 italic font-light max-w-2xl mx-auto">
            Tell us about your celebration. We'd love to design something extraordinary for you.
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div className="space-y-10">
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-6">Reach Us</p>
              <ul className="space-y-6 text-cream/80">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-1">Email</p>
                    <p className="font-serif text-lg">hello@signaturestories.in</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-1">Call</p>
                    <p className="font-serif text-lg">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Instagram className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-1">Instagram</p>
                    <p className="font-serif text-lg">@thesignaturestories</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-1">Studio</p>
                    <p className="font-serif text-lg">Mumbai · India</p>
                    <p className="text-cream/50 text-sm mt-1">Available pan-India & destination</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="border border-gold/30 p-8 md:p-12 bg-gradient-to-b from-gold/5 to-transparent"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold flex items-center justify-center">
                  <Send className="w-6 h-6 text-gold" />
                </div>
                <h2 className="font-serif text-3xl text-cream mb-4">Thank you</h2>
                <p className="text-cream/70 font-light">We've received your enquiry and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Enquiry Form</p>
                <Field label="Your Name" name="name" required />
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Select label="Event Type" name="eventType" options={["Wedding", "Sangeet / Mehendi", "Birthday / Anniversary", "Corporate", "Cultural Event", "Other"]} />
                  <Field label="Approx. Date" name="date" type="date" />
                </div>
                <Field label="Guest Count" name="guests" />
                <TextArea label="Tell us about your vision" name="message" />
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-soft to-gold text-ink uppercase tracking-[0.3em] text-xs font-medium hover:shadow-gold transition-all"
                >
                  Send Enquiry <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.25em] text-cream/60 mb-2">{label}{required && <span className="text-gold">*</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream font-light placeholder:text-cream/30 transition-colors"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.25em] text-cream/60 mb-2">{label}</span>
      <select name={name} className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream font-light transition-colors">
        <option value="" className="bg-ink">Select...</option>
        {options.map((o) => <option key={o} value={o} className="bg-ink">{o}</option>)}
      </select>
    </label>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.25em] text-cream/60 mb-2">{label}</span>
      <textarea
        name={name}
        rows={4}
        className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream font-light placeholder:text-cream/30 transition-colors resize-none"
      />
    </label>
  );
}
