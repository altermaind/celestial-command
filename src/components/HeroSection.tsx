import { ArrowRight, Shield, Brain, Cloud, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const orbitItems = [
  { icon: Shield, label: "Governance", delay: 0 },
  { icon: Brain, label: "Agents", delay: 5 },
  { icon: Cloud, label: "Cloud", delay: 10 },
  { icon: Users, label: "Humans", delay: 15 },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-radial">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-blue/10 rounded-full blur-[100px] animate-pulse-glow delay-500" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-muted-foreground animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Enterprise AI Ecosystem
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-in-up">
              <span className="text-foreground">ALTERMAIND</span>
              <br />
              <span className="text-gradient-cyan">Shaping the</span>
              <br />
              <span className="text-gradient-gold">Unseen.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up delay-200">
              Progettiamo, costruiamo e operiamo ecosistemi AI enterprise governati. 
              Il layer di controllo per l'intelligenza artificiale della tua organizzazione.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Button variant="glow" size="lg" className="group">
                Esplora l'Ecosistema AI
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="lg">
                Entra nel Control Layer
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-xs text-muted-foreground">Enterprise Clients</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">AI Act</div>
                <div className="text-xs text-muted-foreground">Compliant</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">EU</div>
                <div className="text-xs text-muted-foreground">Based & Trusted</div>
              </div>
            </div>
          </div>

          {/* Right: Orbital Animation */}
          <div className="relative h-[500px] hidden lg:flex items-center justify-center">
            {/* Central core */}
            <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center glow-cyan animate-pulse-glow">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                <Brain className="w-10 h-10 text-primary" />
              </div>
            </div>

            {/* Orbit rings */}
            <div className="absolute w-64 h-64 rounded-full border border-primary/20" />
            <div className="absolute w-96 h-96 rounded-full border border-primary/10" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-primary/5" />

            {/* Orbiting elements */}
            {orbitItems.map((item, index) => (
              <div
                key={item.label}
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                  animation: `orbit ${20 + index * 5}s linear infinite`,
                  animationDelay: `${item.delay}s`,
                  ["--orbit-radius" as string]: `${120 + index * 40}px`,
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center group hover:glow-cyan transition-all duration-300 cursor-pointer"
                  style={{
                    animation: `orbit-reverse ${20 + index * 5}s linear infinite`,
                    animationDelay: `${item.delay}s`,
                  }}
                >
                  <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}

            {/* Floating particles */}
            <div className="absolute top-10 right-20 w-2 h-2 rounded-full bg-primary/60 animate-float" />
            <div className="absolute bottom-20 left-10 w-3 h-3 rounded-full bg-glow-gold/60 animate-float delay-300" />
            <div className="absolute top-1/3 right-10 w-1.5 h-1.5 rounded-full bg-glow-blue/60 animate-float delay-500" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span className="text-xs text-muted-foreground">Scorri per esplorare</span>
        <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};
