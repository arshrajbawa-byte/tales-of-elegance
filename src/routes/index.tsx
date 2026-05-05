import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { ArrowRight, UtensilsCrossed, Music4, MapPin, Sparkles, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Signature Stories — Luxury Event Planning in India" },
      { name: "description", content: "Luxury event planners crafting personalized weddings, parties and cultural events across India. Catering, décor, DJ and venue curation." },
      { property: "og:title", content: "The Signature Stories — Luxury Event Planning" },
      { property: "og:description", content: "Every event tells a story. We make yours unforgettable." },
    ],
  }),
  component: HomePage,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="divider-gold" />
      <span className="text-gold uppercase tracking-[0.4em] text-xs font-medium">{children}</span>
      <span className="divider-gold" />
    </div>
  );
}

const teaserServices = [
  { icon: UtensilsCrossed, title: "Catering" },
  { icon: Music4, title: "DJ & Entertainment" },
  { icon: MapPin, title: "Venue Selection" },
  { icon: Sparkles, title: "Décor & Styling" },
  { icon: HeartHandshake, title: "Wedding Planning" },
];

function HomePage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury wedding décor with chandeliers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
        </div>
        <div className="relative z-10 max-w-4xl text-center">
          <div className="animate-fade-in-slow">
            <SectionLabel>The Signature Stories</SectionLabel>
          </div>
          <h1 className="animate-fade-up delay-200 text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-8">
            Crafting <em className="gradient-gold-text not-italic font-light">Unforgettable</em> Experiences
          </h1>
          <p className="animate-fade-up delay-500 font-serif text-xl md:text-2xl text-cream/80 italic font-light max-w-2xl mx-auto">
            Every event tells a story. We make yours unforgettable.
          </p>
          <div className="animate-fade-up delay-700 mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-soft to-gold text-ink uppercase tracking-[0.3em] text-xs font-medium hover:shadow-gold transition-all">
              Plan Your Event <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/60 text-cream uppercase tracking-[0.3em] text-xs hover:bg-gold/10 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/30" />
            <img src={aboutImg} alt="Elegant table setting" loading="lazy" className="relative w-full h-[500px] object-cover" />
          </div>
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Where moments become <span className="gradient-gold-text italic">timeless memories</span>
            </h2>
            <p className="text-cream/70 leading-relaxed text-lg font-light mb-8">
              At The Signature Stories, every gathering carries a soul of its own. We design celebrations that linger long after the last light dims — moments shaped by intention, beauty and heart.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-gold uppercase tracking-[0.3em] text-xs hover:gap-4 transition-all">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-y border-gold/20 bg-gradient-to-b from-transparent via-gold/5 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-4xl md:text-5xl mb-16">Signature <span className="gradient-gold-text italic">Services</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gold/20">
            {teaserServices.map(({ icon: Icon, title }) => (
              <div key={title} className="bg-background p-8 flex flex-col items-center gap-4 hover:bg-gold/5 transition-all">
                <Icon className="w-8 h-8 text-gold" strokeWidth={1.2} />
                <p className="font-serif text-lg text-cream">{title}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold uppercase tracking-[0.3em] text-xs hover:gap-4 transition-all">
              See All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-gold text-5xl font-serif">"</span>
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream leading-tight mt-4 mb-8">
            We don't just plan events — <br />
            <span className="gradient-gold-text italic">we create signature stories.</span>
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-soft to-gold text-ink uppercase tracking-[0.3em] text-xs font-medium hover:shadow-gold transition-all">
            Begin Your Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
