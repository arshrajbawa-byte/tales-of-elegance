import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gem, Wand2, Network, Users } from "lucide-react";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — The Signature Stories" },
      { name: "description", content: "Personalized approach, one-stop solution, strong vendor network and creative, detail-focused execution. Discover why couples choose The Signature Stories." },
      { property: "og:title", content: "Why Choose The Signature Stories" },
      { property: "og:description", content: "From venue to vows — a single, seamless experience." },
    ],
  }),
  component: WhyUsPage,
});

const reasons = [
  { icon: Gem, title: "Personalized Approach", desc: "Every detail shaped around your story, never templated. We start by listening — to your taste, your culture, your love story — and design from there." },
  { icon: Wand2, title: "One-Stop Solution", desc: "From venue to vows — a single, seamless experience. Catering, décor, entertainment, logistics and design are all handled in-house by one dedicated team." },
  { icon: Network, title: "Strong Vendor Network", desc: "Trusted partners across India delivering uncompromised quality. Years of relationships mean better access, better pricing and better outcomes for you." },
  { icon: Users, title: "Creative & Detail-Focused Execution", desc: "A team obsessed with detail, beauty and flawless delivery. Every napkin fold, lighting cue and timing detail is rehearsed long before your guests arrive." },
];

function WhyUsPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden pt-24">
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="divider-gold" />
            <span className="text-gold uppercase tracking-[0.4em] text-xs">The Difference</span>
            <span className="divider-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mb-8">Why Choose <span className="gradient-gold-text italic">Us</span></h1>
          <p className="font-serif text-xl md:text-2xl text-cream/80 italic font-light">Beautiful events are built on quiet, relentless detail.</p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="group p-10 border border-gold/20 hover:border-gold/60 transition-colors duration-500">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.2} />
                </div>
                <div>
                  <p className="text-gold/60 text-xs tracking-[0.3em] mb-2">0{i + 1}</p>
                  <h2 className="font-serif text-2xl text-cream mb-3">{title}</h2>
                  <p className="text-cream/60 font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 px-6 relative border-t border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-5xl text-cream leading-tight mb-8">
            We don't just plan events — <br />
            <span className="gradient-gold-text italic">we create signature stories.</span>
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-soft to-gold text-ink uppercase tracking-[0.3em] text-xs font-medium hover:shadow-gold transition-all">
            Plan Your Event <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
