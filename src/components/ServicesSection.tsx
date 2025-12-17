import { 
  Compass, Beaker, Hammer, Play, Palette,
  ArrowRight
} from "lucide-react";

const services = [
  {
    phase: "01",
    name: "Strategy",
    icon: Compass,
    description: "Definiamo la visione AI, la roadmap e le priorità strategiche. Assessment, business case, governance framework.",
    outcomes: ["AI Strategy Document", "ROI Projection", "Governance Model"],
  },
  {
    phase: "02",
    name: "Playground",
    icon: Beaker,
    description: "Prototipazione rapida, POC validati, sperimentazione controllata. Dall'idea alla validazione in settimane.",
    outcomes: ["Working Prototype", "Validated Hypothesis", "Technical Blueprint"],
  },
  {
    phase: "03",
    name: "Build",
    icon: Hammer,
    description: "Sviluppo enterprise-grade con le nostre piattaforme. Architettura scalabile, security-first, compliance native.",
    outcomes: ["Production System", "Integration Layer", "Documentation"],
  },
  {
    phase: "04",
    name: "Run",
    icon: Play,
    description: "Operazioni AI 24/7. Monitoring, optimization, evoluzione continua. Il vostro partner operativo permanente.",
    outcomes: ["SLA Guarantee", "Continuous Improvement", "Expert Support"],
  },
  {
    phase: "05",
    name: "Design",
    icon: Palette,
    description: "UX/UI per l'adozione AI. Interfacce che gli utenti amano usare, change management integrato.",
    outcomes: ["User Interfaces", "Adoption Metrics", "Training Materials"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-space-deep">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-accent mb-6">
            Servizi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Transformation
            <span className="text-gradient-gold block mt-2">Engine</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cinque fasi di una missione AI. Dalla strategia all'operatività, 
            siamo il vostro partner per ogni fase della trasformazione.
          </p>
        </div>

        {/* Services timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Phase indicator */}
                <div className="relative z-10 mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:glow-gold transition-all duration-500">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                {/* Content card */}
                <div className="glass rounded-2xl p-6 h-full hover:glow-subtle transition-all duration-500">
                  {/* Phase number */}
                  <div className="text-xs font-mono text-accent mb-2">{service.phase}</div>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Outcomes */}
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-primary">Deliverables:</span>
                    {service.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-primary" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow to next */}
                {index < services.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 z-20">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            Ogni missione è unica. Parliamo della vostra.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
          >
            Inizia il dialogo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
