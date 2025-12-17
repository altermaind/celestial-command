import { useState } from "react";
import { 
  Shield, Lock, Eye, Scale, Users, Zap, 
  Globe, Brain, Heart, Target, X
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const pillars = [
  { 
    icon: Shield, 
    title: "Governance by Design", 
    short: "Governance",
    description: "AI governata nativamente, non come afterthought. Compliance AI Act integrata nel DNA di ogni soluzione.",
    detail: "Policy enforcement automatico, audit trail completo, risk scoring in real-time.",
    color: "primary"
  },
  { 
    icon: Lock, 
    title: "Zero Lock-in", 
    short: "Freedom",
    description: "Architetture aperte, portabilità dei dati, indipendenza tecnologica garantita.",
    detail: "Multi-cloud, multi-model, standard aperti. La vostra AI, i vostri dati, sempre.",
    color: "accent"
  },
  { 
    icon: Eye, 
    title: "Observability Totale", 
    short: "Visibility",
    description: "Visibilità completa su ogni decisione AI, ogni agente, ogni workflow.",
    detail: "Monitoring real-time, explainability integrata, debugging avanzato.",
    color: "primary"
  },
  { 
    icon: Scale, 
    title: "Enterprise Scale", 
    short: "Scale",
    description: "Progettato per milioni di utenti, miliardi di transazioni, zero compromessi.",
    detail: "SLA enterprise, disaster recovery, high availability by default.",
    color: "accent"
  },
  { 
    icon: Users, 
    title: "Human Experience", 
    short: "Human",
    description: "L'AI al servizio delle persone, non il contrario. UX pensata per l'adozione.",
    detail: "Interfacce intuitive, training integrato, change management supportato.",
    color: "primary"
  },
  { 
    icon: Zap, 
    title: "Agentic Ready", 
    short: "Agentic",
    description: "Infrastruttura pronta per agenti autonomi, orchestrazione complessa, decisioni distribuite.",
    detail: "MCP native, tool integration, autonomous workflows con guardrail.",
    color: "accent"
  },
  { 
    icon: Globe, 
    title: "European Trust", 
    short: "Trust",
    description: "Basati in Europa, conformi alle normative EU, data residency garantita.",
    detail: "GDPR compliant, AI Act ready, sovranità digitale europea.",
    color: "primary"
  },
  { 
    icon: Brain, 
    title: "Model Agnostic", 
    short: "Agnostic",
    description: "Libertà di scegliere il modello giusto per ogni task, senza vincoli.",
    detail: "OpenAI, Anthropic, open-source, on-premise. La scelta è vostra.",
    color: "accent"
  },
  { 
    icon: Heart, 
    title: "Responsible AI", 
    short: "Ethics",
    description: "Etica, fairness, trasparenza come principi fondanti, non opzionali.",
    detail: "Bias detection, fairness metrics, ethical guidelines integrate.",
    color: "primary"
  },
  { 
    icon: Target, 
    title: "Outcome Focused", 
    short: "Results",
    description: "Non vendiamo tecnologia, abilitiamo risultati di business misurabili.",
    detail: "ROI tracking, KPI driven, value-based partnerships.",
    color: "accent"
  },
];

export const PillarsSection = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <section id="pillars" className="py-32 relative overflow-hidden bg-space-deep">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-sm font-medium text-accent mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            I 10 Pilastri
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            AI come
            <span className="text-gradient-gold block mt-2">Enterprise Capability</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Dieci principi fondamentali che guidano ogni nostra soluzione. 
            Non feature, ma <span className="text-foreground">valori architetturali</span>.
          </p>
        </ScrollReveal>

        {/* Hexagonal grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 50}>
              <div
                className={`group relative cursor-pointer transition-all duration-500 ${
                  activePillar === index ? 'z-20' : 'z-10'
                }`}
                onClick={() => setActivePillar(activePillar === index ? null : index)}
              >
                {/* Card */}
                <div className={`relative p-6 rounded-2xl glass-card transition-all duration-500 h-full
                  ${activePillar === index 
                    ? 'ring-2 ring-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.2)]' 
                    : 'hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]'
                  }
                  group-hover:translate-y-[-2px]
                `}>
                  {/* Number */}
                  <div className="absolute top-3 right-3 text-xs font-mono text-muted-foreground/50">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    pillar.color === 'primary' 
                      ? 'bg-primary/10 group-hover:bg-primary/20' 
                      : 'bg-accent/10 group-hover:bg-accent/20'
                  }`}>
                    <pillar.icon className={`w-6 h-6 ${
                      pillar.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm font-semibold mb-2 text-foreground leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>

                  {/* Expand indicator */}
                  <div className={`mt-4 text-xs font-medium transition-all duration-300 ${
                    activePillar === index ? 'text-primary' : 'text-muted-foreground/50'
                  }`}>
                    {activePillar === index ? '−' : '+'}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Expanded detail panel */}
        {activePillar !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-xl animate-fade-in" onClick={() => setActivePillar(null)}>
            <div 
              className="relative max-w-lg w-full glass-card rounded-3xl p-8 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setActivePillar(null)}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                pillars[activePillar].color === 'primary' 
                  ? 'bg-primary/20' 
                  : 'bg-accent/20'
              }`}>
                {(() => {
                  const Icon = pillars[activePillar].icon;
                  return <Icon className={`w-8 h-8 ${
                    pillars[activePillar].color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />;
                })()}
              </div>

              <div className="text-xs font-mono text-muted-foreground mb-2">
                Pilastro {String(activePillar + 1).padStart(2, '0')}/10
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {pillars[activePillar].title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pillars[activePillar].description}
              </p>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-primary leading-relaxed">
                  {pillars[activePillar].detail}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
