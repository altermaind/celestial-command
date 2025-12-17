import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

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
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">
                ALTER<span className="text-primary">MAIND</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Shaping the Unseen. L'ecosistema AI enterprise governato per trasformare 
              l'intelligenza artificiale in capability aziendale.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:hello@altermaind.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hello@altermaind.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Milano, Italia
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Prodotti</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servizi</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Azienda</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-y border-border/50">
          <span className="text-xs text-muted-foreground">Ecosystem Partners:</span>
          {partners.map((partner) => (
            <span key={partner} className="text-sm font-medium text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer">
              {partner}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ALTERMAIND. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
