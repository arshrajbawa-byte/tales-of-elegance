import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Signature Stories | Luxury Event Planners India" },
      { name: "description", content: "Discover the story behind The Signature Stories — a luxury Indian event planning house creating personalized, stress-free, beautifully designed celebrations." },
      { property: "og:title", content: "About — The Signature Stories" },
      { property: "og:description", content: "Where moments become timeless memories." },
    ],
  }),
  component: AboutPage,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="divider-gold" />
      <span className="text-gold uppercase tracking-[0.4em] text-xs font-medium">{children}</span>
    </div>
  );
}

function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden pt-24">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center"><SectionLabel>About Us</SectionLabel></div>
          <h1 className="animate-fade-up text-5xl md:text-7xl leading-[1.05] mb-8">
            Where moments become <span className="gradient-gold-text italic">timeless memories</span>
          </h1>
          <p className="animate-fade-up delay-200 font-serif text-xl md:text-2xl text-cream/80 italic font-light">
            Every event tells a story. We make yours unforgettable.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/30" />
            <img src={aboutImg} alt="Elegant celebration setting" loading="lazy" className="relative w-full h-[600px] object-cover" />
          </div>
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">A house built on detail, beauty and <span className="gradient-gold-text italic">heart</span></h2>
            <div className="space-y-5 text-cream/70 leading-relaxed text-lg font-light">
              <p>Events are more than just occasions — they are stories waiting to be told. At The Signature Stories, we believe every gathering carries a soul of its own, shaped by the people, the moments and the emotions woven through it.</p>
              <p>We craft customized experiences that mirror your vision, blending meticulous detail with effortless execution. From the very first conversation to the final farewell, our team curates every nuance with intention.</p>
              <p>Whether it's an intimate celebration or a grand cultural affair, we bring artistry, precision and heart to every signature story we tell.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-y border-gold/20 bg-gradient-to-b from-transparent via-gold/5 to-transparent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {[
            { label: "Our Mission", title: "To create memorable events that bring people together", desc: "We design celebrations that linger long after the last light dims — moments that connect hearts and create lifelong memories." },
            { label: "Our Vision", title: "To become India's most cherished event planning brand", desc: "A house known for elegance, originality and the quiet confidence of impeccable execution across the country and beyond." },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">{item.label}</p>
              <h3 className="font-serif text-3xl md:text-4xl mb-6 text-cream leading-snug">{item.title}</h3>
              <p className="text-cream/60 font-light leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-8">Ready to write your <span className="gradient-gold-text italic">signature story?</span></h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-soft to-gold text-ink uppercase tracking-[0.3em] text-xs font-medium hover:shadow-gold transition-all">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
