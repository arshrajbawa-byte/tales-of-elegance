import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { UtensilsCrossed, Music4, MapPin, Sparkles, HeartHandshake, Gem, Network, Wand2, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "About Us — The Signature Stories | Luxury Event Planning India" },
      { name: "description", content: "The Signature Stories is a luxury event planning company in India crafting personalized weddings, parties and cultural events with catering, décor, DJ and venue curation." },
      { property: "og:title", content: "About Us — The Signature Stories" },
      { property: "og:description", content: "Every event tells a story. We make yours unforgettable." },
    ],
  }),
  component: AboutPage,
});

const services = [
  { icon: UtensilsCrossed, title: "Catering", desc: "Curated menus crafted by award-winning chefs for every palate." },
  { icon: Music4, title: "DJ & Entertainment", desc: "Soundscapes and performances that move every heart in the room." },
  { icon: MapPin, title: "Venue Selection", desc: "Heritage palaces, beachfront resorts and intimate hideaways." },
  { icon: Sparkles, title: "Décor & Styling", desc: "Bespoke florals, lighting and design that breathe life into spaces." },
  { icon: HeartHandshake, title: "Wedding & Event Planning", desc: "End-to-end orchestration of your most cherished moments." },
];

const reasons = [
  { icon: Gem, title: "Personalized Approach", desc: "Every detail shaped around your story, never templated." },
  { icon: Wand2, title: "One-Stop Solution", desc: "From venue to vows — a single, seamless experience." },
  { icon: Network, title: "Strong Vendor Network", desc: "Trusted partners across India delivering uncompromised quality." },
  { icon: Users, title: "Creative Execution", desc: "A team obsessed with detail, beauty and flawless delivery." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="divider-gold" />
      <span className="text-gold uppercase tracking-[0.4em] text-xs font-medium">{children}</span>
      <span className="divider-gold" />
    </div>
  );
}

function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury wedding décor with chandeliers" width={1920} height={1280} className="w-full h-full object-cover" />
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
          <div className="animate-fade-up delay-700 mt-12 flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/30" />
            <img src={aboutImg} alt="Elegant table setting" width={1280} height={1280} loading="lazy" className="relative w-full h-[600px] object-cover" />
          </div>
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Where moments become <span className="gradient-gold-text italic">timeless memories</span>
            </h2>
            <div className="space-y-5 text-cream/70 leading-relaxed text-lg font-light">
              <p>
                Events are more than just occasions — they are stories waiting to be told. At The Signature Stories, we believe every gathering carries a soul of its own, shaped by the people, the moments and the emotions woven through it.
              </p>
              <p>
                We craft customized experiences that mirror your vision, blending meticulous detail with effortless execution. From the very first conversation to the final farewell, our team curates every nuance with intention.
              </p>
              <p>
                Whether it's an intimate celebration or a grand cultural affair, we bring artistry, precision and heart to every signature story we tell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-32 px-6 border-y border-gold/20 bg-gradient-to-b from-transparent via-gold/5 to-transparent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {[
            { label: "Our Mission", title: "To create memorable events that bring people together", desc: "We design celebrations that linger long after the last light dims — moments that connect hearts and create lifelong memories." },
            { label: "Our Vision", title: "To become India's most cherished event planning brand", desc: "A house known for elegance, originality and the quiet confidence of impeccable execution across the country and beyond." },
          ].map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">{item.label}</p>
              <h3 className="font-serif text-3xl md:text-4xl mb-6 text-cream leading-snug">{item.title}</h3>
              <p className="text-cream/60 font-light leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-4xl md:text-6xl">Signature <span className="gradient-gold-text italic">Services</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-background p-10 lg:p-12 transition-all duration-500 hover:bg-gold/5">
                <Icon className="w-8 h-8 text-gold mb-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.2} />
                <h3 className="font-serif text-2xl mb-3 text-cream">{title}</h3>
                <div className="divider-gold mb-4 opacity-60" />
                <p className="text-cream/60 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 px-6 bg-gradient-to-b from-ink to-ink/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel>The Difference</SectionLabel>
            <h2 className="text-4xl md:text-6xl">Why Choose <span className="gradient-gold-text italic">Us</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-12">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="flex gap-6 items-start group">
                <div className="shrink-0 w-14 h-14 border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.2} />
                </div>
                <div>
                  <p className="text-gold/60 text-xs tracking-[0.3em] mb-2">0{i + 1}</p>
                  <h3 className="font-serif text-2xl text-cream mb-2">{title}</h3>
                  <p className="text-cream/60 font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-40 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-gold text-5xl font-serif">"</span>
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream leading-tight mt-4 mb-8">
            We don't just plan events — <br />
            <span className="gradient-gold-text italic">we create signature stories.</span>
          </p>
          <div className="flex justify-center mt-12">
            <span className="divider-gold" />
          </div>
          <p className="mt-8 uppercase tracking-[0.5em] text-xs text-cream/50">The Signature Stories · India</p>
        </div>
      </section>
    </main>
  );
}
