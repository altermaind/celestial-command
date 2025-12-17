import { Target, Layers, Shield, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    description: "Abilitare le imprese a operare AI su scala con governance, controllo e fiducia.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Layers,
    title: "Ecosistema",
    description: "Piattaforme, agenti e servizi integrati in un unico layer operativo.",
    gradient: "from-glow-blue/20 to-glow-blue/5",
  },
  {
    icon: Shield,
    title: "Governance",
    description: "AI Act compliant, auditabilità completa, zero lock-in tecnologico.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Sparkles,
    title: "Innovazione",
    description: "Ricerca continua, partnership strategiche, tecnologie all'avanguardia.",
    gradient: "from-glow-purple/20 to-glow-purple/5",
  },
];

export const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-sm font-medium text-primary mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Chi Siamo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            L'Ecosistema AI
            <span className="text-gradient-cyan block mt-2">Enterprise-Grade</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            ALTERMAIND progetta, costruisce e opera ecosistemi AI enterprise. 
            Uniamo piattaforme proprietarie, servizi di consulenza strategica e 
            capacità operative per trasformare l'AI da tecnologia a 
            <span className="text-foreground"> capability aziendale</span>.
          </p>
        </ScrollReveal>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 100}>
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative p-8 rounded-3xl glass-card h-full transition-all duration-500 group-hover:translate-y-[-4px]">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <pillar.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Text */}
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Learn more link */}
                    <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Scopri di più
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                </div>

                {/* Glow effect on hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Visual separator */}
        <div className="mt-24 flex items-center justify-center gap-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <div className="w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
    </section>
  );
};
