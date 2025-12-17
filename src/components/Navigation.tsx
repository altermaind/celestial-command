import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAltermaind from "@/assets/logo_altermaind.svg";
const navLinks = [
  { label: "Chi Siamo", href: "#who-we-are" },
  { label: "Pilastri", href: "#pillars" },
  { label: "Prodotti", href: "#products" },
  { label: "Servizi", href: "#services" },
  { label: "Contatti", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top < 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "glass-strong py-3 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.1)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group relative">
          <img 
            src={logoAltermaind} 
            alt="ALTERMAIND - Shaping the Unseen" 
            className="h-10 w-auto transition-opacity group-hover:opacity-80"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Active background */}
                {isActive && (
                  <span className="absolute inset-0 bg-primary/10 rounded-lg" />
                )}
                {/* Hover background */}
                <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">{link.label}</span>
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="glow" size="sm" className="group btn-premium">
            <span className="relative z-10 flex items-center gap-2">
              Esplora l'Ecosistema
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 hover:opacity-100 transition-opacity" />
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="glass-strong mx-4 mt-2 rounded-2xl p-6 border border-glass-border/30">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground font-medium py-3 px-4 rounded-xl hover:bg-primary/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-border/50">
              <Button variant="glow" className="w-full">
                Esplora l'Ecosistema
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
