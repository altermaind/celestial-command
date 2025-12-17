import { 
  Compass, Beaker, Hammer, Play, Palette,
  ArrowRight, Check
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const services = [
  {
    phase: "01",
    name: "Strategy",
    icon: Compass,
    description: "Definiamo la visione AI, la roadmap e le priorità strategiche. Assessment, business case, governance framework.",
    outcomes: ["AI Strategy Document", "ROI Projection", "Governance Model"],
    color: "primary",
  },
  {
    phase: "02",
    name: "Playground",
    icon: Beaker,
    description: "Prototipazione rapida, POC validati, sperimentazione controllata. Dall'idea alla validazione in settimane.",
    outcomes: ["Working Prototype", "Validated Hypothesis", "Technical Blueprint"],
    color: "accent",
  },
  {
    phase: "03",
    name: "Build",
    icon: Hammer,
    description: "Sviluppo enterprise-grade con le nostre piattaforme. Architettura scalabile, security-first, compliance native.",
    outcomes: ["Production System", "Integration Layer", "Documentation"],
    color: "primary",
  },
  {
    phase: "04",
    name: "Run",
    icon: Play,
    description: "Operazioni AI 24/7. Monitoring, optimization, evoluzione continua. Il vostro partner operativo permanente.",
    outcomes: ["SLA Guarantee", "Continuous Improvement", "Expert Support"],
    color: "accent",
  },
  {
    phase: "05",
    name: "Design",
    icon: Palette,
    description: "UX/UI per l'adozione AI. Interfacce che gli utenti amano usare, change management integrato.",
    outcomes: ["User Interfaces", "Adoption Metrics", "Training Materials"],
    color: "primary",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-space-deep">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-24">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-sm font-medium text-accent mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Servizi
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            The Transformation
            <span className="text-gradient-gold block mt-2">Engine</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Cinque fasi di una missione AI. Dalla strategia all'operatività, 
            siamo il vostro partner per <span className="text-foreground">ogni fase della trasformazione</span>.
          </p>
        </ScrollReveal>

        {/* Services timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-border to-transparent" />
            {/* Animated dot */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
              style={{
                animation: 'shimmer 5s linear infinite',
                left: '10%',
              }}
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.name} delay={index * 100}>
                <div className="group relative">
                  {/* Phase indicator */}
                  <div className="relative z-10 mb-8 flex justify-center">
                    <div className="relative">
                      {/* Outer ring */}
                      <div className={`absolute inset-0 rounded-full ${
                        service.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
                      } blur-xl group-hover:blur-2xl transition-all duration-500 scale-150`} />
                      
                      {/* Main icon container */}
                      <div className={`relative w-20 h-20 rounded-full glass-card flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                        service.color === 'primary' 
                          ? 'group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]' 
                          : 'group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]'
                      }`}>
                        <service.icon className={`w-9 h-9 ${
                          service.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      
                      {/* Phase number badge */}
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center">
                        <span className="text-xs font-bold text-foreground">{service.phase}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="glass-card rounded-3xl p-6 h-full transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_40px_-20px_hsl(var(--primary)/0.2)]">
                    {/* Name */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.name}</h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Outcomes */}
                    <div className="space-y-3">
                      <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                        Deliverables
                      </span>
                      {service.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                            service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                          }`}>
                            <Check className={`w-3 h-3 ${
                              service.color === 'primary' ? 'text-primary' : 'text-accent'
                            }`} />
                          </div>
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow to next - desktop only */}
                  {index < services.length - 1 && (
                    <div className="hidden lg:block absolute top-[76px] -right-3 z-20">
                      <ArrowRight className="w-5 h-5 text-border" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-24 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Ogni missione è unica. <span className="text-foreground">Parliamo della vostra.</span>
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card text-accent hover:text-foreground transition-all duration-300 group hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]"
          >
            <span className="font-semibold">Inizia il dialogo</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
