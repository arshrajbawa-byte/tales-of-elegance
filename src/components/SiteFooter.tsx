import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-ink py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-sm">
        <div>
          <img src={logoMark.url} alt="The Signature Stories" className="h-14 w-auto invert mb-4" />
          <p className="font-serif text-2xl text-cream mb-3">
            The <span className="gradient-gold-text italic">Signature</span> Stories
          </p>
          <p className="text-cream/60 leading-relaxed font-light">
            A luxury event planning house crafting unforgettable weddings,
            parties and cultural celebrations across India.
          </p>
        </div>
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Explore</p>
          <ul className="space-y-2 text-cream/70">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/why-us" className="hover:text-gold transition-colors">Why Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Connect</p>
          <ul className="space-y-3 text-cream/70">
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold" /> thesignaturestories@gmail.com</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold" /> +91 98880 38155 · +91 92163 38155</li>
            <li className="flex items-center gap-3"><Instagram className="w-4 h-4 text-gold" /> @thesignaturestories</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gold/10 text-center text-xs uppercase tracking-[0.4em] text-cream/40">
        © {new Date().getFullYear()} The Signature Stories · India
      </div>
    </footer>
  );
}
