import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, UtensilsCrossed, Music4, MapPin, Sparkles, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — The Signature Stories | Catering, Décor, DJ & Planning" },
      { name: "description", content: "Full-service event planning: catering, DJ & entertainment, venue selection, décor & styling, and end-to-end wedding planning across India." },
      { property: "og:title", content: "Signature Services" },
      { property: "og:description", content: "From venue to vows — a single, seamless experience." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: UtensilsCrossed, title: "Catering", desc: "Curated multi-cuisine menus crafted by award-winning chefs — from regional Indian feasts to fine global tasting experiences. Live counters, plated dinners, dessert ateliers and bespoke bar programs." },
  { icon: Music4, title: "DJ & Entertainment", desc: "Soundscapes and performances that move every heart in the room. Renowned DJs, live bands, sufi & classical ensembles, sangeet choreography and immersive show production." },
  { icon: MapPin, title: "Venue Selection", desc: "Heritage palaces, beachfront resorts, vineyard estates and intimate hideaways. We negotiate, scout and secure venues that match your vision and guest list — anywhere in India." },
  { icon: Sparkles, title: "Décor & Styling", desc: "Bespoke florals, lighting, mandap design, stage architecture and tablescapes that breathe life into spaces. Every element designed in-house, never templated." },
  { icon: HeartHandshake, title: "Wedding & Event Planning", desc: "End-to-end orchestration of your most cherished moments — guest management, logistics, vendor coordination and on-the-day execution led by a dedicated planner." },
];

function ServicesPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden pt-24">
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="divider-gold" />
            <span className="text-gold uppercase tracking-[0.4em] text-xs">What We Do</span>
            <span className="divider-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mb-8">Signature <span className="gradient-gold-text italic">Services</span></h1>
          <p className="font-serif text-xl md:text-2xl text-cream/80 italic font-light">A full-service event house — every detail under one roof.</p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-px bg-gold/20">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="group bg-background p-10 lg:p-16 grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 hover:bg-gold/5 transition-all duration-500">
              <div className="flex md:flex-col items-center md:items-start gap-6">
                <p className="font-serif text-gold/60 text-2xl">0{i + 1}</p>
                <div className="w-16 h-16 border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors">
                  <Icon className="w-7 h-7 text-gold" strokeWidth={1.2} />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">{title}</h2>
                <div className="divider-gold mb-6 opacity-60" />
                <p className="text-cream/70 font-light leading-relaxed text-lg max-w-3xl">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 border-t border-gold/20 text-center bg-gradient-to-b from-transparent to-gold/5">
        <h2 className="font-serif text-3xl md:text-5xl text-cream mb-8 max-w-3xl mx-auto">Tell us about your <span className="gradient-gold-text italic">celebration</span></h2>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-soft to-gold text-ink uppercase tracking-[0.3em] text-xs font-medium hover:shadow-gold transition-all">
          Start Planning <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
