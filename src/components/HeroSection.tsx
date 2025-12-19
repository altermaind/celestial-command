import { ArrowRight, Shield, Brain, Cloud, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import orbitCenterIcon from "@/assets/orbit_center_icon.png";

const orbitItems = [
  { icon: Shield, label: "Governance", color: "cyan" },
  { icon: Brain, label: "Agents", color: "gold" },
  { icon: Cloud, label: "Cloud", color: "blue" },
  { icon: Users, label: "Humans", color: "purple" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow-blue/8 rounded-full blur-[120px] animate-pulse-glow delay-500" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-glow-gold/5 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Animated scan line */}
      <div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{
          animation: "scan-line 8s linear infinite",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
                <span className="block text-foreground animate-fade-in-up font-sans tracking-[0.01em]">ALTERMAIND</span>
                <span className="block text-gradient-cyan animate-fade-in-up delay-100 tracking-[0.01em] pb-2">Shaping the</span>
                <span className="block text-gradient-gold animate-fade-in-up delay-200 tracking-[0.01em]">Unseen.</span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up delay-300">
              Progettiamo, costruiamo e operiamo ecosistemi AI enterprise governati. 
              <span className="text-foreground/80"> Il layer di controllo</span> per l'intelligenza artificiale della tua organizzazione.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Button variant="glow" size="lg" className="group btn-premium text-base">
                <span className="relative z-10 flex items-center gap-2">
                  Esplora l'Ecosistema AI
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button variant="glass" size="lg" className="text-base group">
                <span className="flex items-center gap-2">
                  Entra nel Control Layer
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 md:gap-10 pt-8 animate-fade-in-up delay-500">
              {[
                { value: "100+", label: "Enterprise Clients" },
                { value: "AI Act", label: "Compliant" },
                { value: "EU", label: "Based & Trusted" },
              ].map((stat, index) => (
                <div key={stat.label} className="relative group cursor-default">
                  <div className="absolute -inset-3 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                  {index < 2 && (
                    <div className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-transparent via-border to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Orbital Animation */}
          <div className="relative h-[550px] hidden lg:flex items-center justify-center">
            {/* Outer glow ring */}
            <div className="absolute w-[480px] h-[480px] rounded-full animate-rotate-slow opacity-40">
              <div className="absolute inset-0 rounded-full border border-primary/30" 
                style={{ 
                  background: `conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.15), transparent, hsl(var(--accent) / 0.1), transparent)` 
                }} 
              />
            </div>

            {/* Central core */}
            <div className="absolute w-36 h-36 rounded-full flex items-center justify-center">
              {/* Morphing background */}
              <div className="absolute w-40 h-40 bg-gradient-to-br from-primary/25 to-accent/15 animate-morph" />
              {/* Glass container */}
              <div className="relative w-28 h-28 rounded-full glass-card flex items-center justify-center glow-subtle">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center p-3">
                  <img src={orbitCenterIcon} alt="Altermaind" className="w-full h-full object-contain" />
                </div>
              </div>
              {/* Pulse rings */}
              <div className="absolute w-32 h-32 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
            </div>

            {/* Orbit rings */}
            <svg className="absolute w-full h-full" viewBox="0 0 500 500">
              <defs>
                <linearGradient id="orbitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(291 64% 50% / 0.35)" />
                  <stop offset="50%" stopColor="hsl(291 64% 42% / 0.05)" />
                  <stop offset="100%" stopColor="hsl(291 64% 50% / 0.35)" />
                </linearGradient>
                <linearGradient id="orbitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(285 65% 55% / 0.25)" />
                  <stop offset="50%" stopColor="hsl(285 65% 45% / 0.02)" />
                  <stop offset="100%" stopColor="hsl(285 65% 55% / 0.25)" />
                </linearGradient>
              </defs>
              <circle cx="250" cy="250" r="120" fill="none" stroke="url(#orbitGradient1)" strokeWidth="1" />
              <circle cx="250" cy="250" r="180" fill="none" stroke="url(#orbitGradient2)" strokeWidth="1" />
              <circle cx="250" cy="250" r="220" fill="none" stroke="hsl(291 64% 42% / 0.08)" strokeWidth="1" strokeDasharray="4 8" />
            </svg>

            {/* Orbiting elements */}
            {orbitItems.map((item, index) => (
              <div
                key={item.label}
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                  ["--orbit-radius" as string]: `${100 + index * 45}px`,
                  ["--orbit-duration" as string]: `${25 + index * 8}s`,
                }}
              >
                <div className={`animate-orbit`}>
                  <div 
                    className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer glow-border"
                    style={{
                      animation: `orbit-reverse ${25 + index * 8}s linear infinite`,
                    }}
                  >
                    <item.icon className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-card text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  width: `${3 + Math.random() * 4}px`,
                  height: `${3 + Math.random() * 4}px`,
                  top: `${10 + Math.random() * 80}%`,
                  left: `${10 + Math.random() * 80}%`,
                  background: i % 2 === 0 
                    ? `hsl(var(--primary) / ${0.4 + Math.random() * 0.4})` 
                    : `hsl(var(--glow-gold) / ${0.3 + Math.random() * 0.3})`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${6 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in delay-700">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scorri</span>
        <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex justify-center pt-2 relative overflow-hidden">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
        </div>
      </div>
    </section>
  );
};
