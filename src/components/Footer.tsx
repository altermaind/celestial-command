import { ArrowUpRight, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import logoAltermaind from "@/assets/logo_altermaind.svg";

const footerLinks = {
  products: [
    { name: "Gravity", href: "#" },
    { name: "Aurora", href: "#" },
    { name: "Nebula", href: "#" },
    { name: "Slash", href: "#" },
    { name: "Beyond", href: "#" },
  ],
  services: [
    { name: "Strategy", href: "#" },
    { name: "Playground", href: "#" },
    { name: "Build", href: "#" },
    { name: "Run", href: "#" },
    { name: "Design", href: "#" },
  ],
  company: [
    { name: "Chi Siamo", href: "#who-we-are" },
    { name: "Carriere", href: "#" },
    { name: "Partner", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contatti", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const partners = ["Microsoft", "MongoDB", "Prometeia", "EVOS"];

export const Footer = () => {
  return (
    <footer id="contact" className="relative pt-32 pb-12 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/3 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter CTA */}
        <ScrollReveal className="mb-24">
          <div className="glass-card rounded-3xl p-12 text-center max-w-3xl mx-auto glow-border">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Resta aggiornato sull'<span className="text-gradient-cyan">AI Enterprise</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Insight, trend e best practice sulla governance AI. Niente spam, solo contenuti di valore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-5 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                Iscriviti
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Main footer content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20 p-2">
                <img src={logoAltermaind} alt="Altermaind" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-semibold text-foreground tracking-tight block">
                  ALTER<span className="text-gradient-cyan">MAIND</span>
                </span>
                <span className="text-xs text-muted-foreground">Shaping the Unseen</span>
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              L'ecosistema AI enterprise governato per trasformare 
              l'intelligenza artificiale in capability aziendale.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4">
              <a href="mailto:hello@altermaind.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>hello@altermaind.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Milano, Italia</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Prodotti</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Servizi</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Azienda</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-10 border-y border-border/30">
          <span className="text-sm text-muted-foreground">Ecosystem Partners</span>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner) => (
              <span 
                key={partner} 
                className="text-lg font-semibold text-muted-foreground/40 hover:text-foreground transition-colors cursor-pointer"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ALTERMAIND. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/60">
            Designed with precision in Milan, Italy 🇮🇹
          </p>
        </div>
      </div>
    </footer>
  );
};
