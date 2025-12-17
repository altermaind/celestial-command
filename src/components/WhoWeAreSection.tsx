import { Target, Layers, Shield, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    description: "Abilitare le imprese a operare AI su scala con governance, controllo e fiducia.",
  },
  {
    icon: Layers,
    title: "Ecosistema",
    description: "Piattaforme, agenti e servizi integrati in un unico layer operativo.",
  },
  {
    icon: Shield,
    title: "Governance",
    description: "AI Act compliant, auditabilità completa, zero lock-in tecnologico.",
  },
  {
    icon: Sparkles,
    title: "Innovazione",
    description: "Ricerca continua, partnership strategiche, tecnologie all'avanguardia.",
  },
];

export const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-6 animate-fade-in">
            Chi Siamo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            L'Ecosistema AI
            <span className="text-gradient-cyan block mt-2">Enterprise-Grade</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
            ALTERMAIND progetta, costruisce e opera ecosistemi AI enterprise. 
            Uniamo piattaforme proprietarie, servizi di consulenza strategica e 
            capacità operative per trasformare l'AI da tecnologia a capability aziendale.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-2xl glass hover:glow-subtle transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Visual separator */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-border" />
          <div className="w-3 h-3 rounded-full bg-primary/30" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
};
