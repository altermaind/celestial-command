import { useState } from "react";
import { 
  Shield, Lock, Eye, Scale, Users, Zap, 
  Globe, Brain, Heart, Target
} from "lucide-react";

const pillars = [
  { 
    icon: Shield, 
    title: "Governance by Design", 
    description: "AI governata nativamente, non come afterthought. Compliance AI Act integrata nel DNA di ogni soluzione.",
    detail: "Policy enforcement automatico, audit trail completo, risk scoring in real-time."
  },
  { 
    icon: Lock, 
    title: "Zero Lock-in", 
    description: "Architetture aperte, portabilità dei dati, indipendenza tecnologica garantita.",
    detail: "Multi-cloud, multi-model, standard aperti. La vostra AI, i vostri dati, sempre."
  },
  { 
    icon: Eye, 
    title: "Observability Totale", 
    description: "Visibilità completa su ogni decisione AI, ogni agente, ogni workflow.",
    detail: "Monitoring real-time, explainability integrata, debugging avanzato."
  },
  { 
    icon: Scale, 
    title: "Enterprise Scale", 
    description: "Progettato per milioni di utenti, miliardi di transazioni, zero compromessi.",
    detail: "SLA enterprise, disaster recovery, high availability by default."
  },
  { 
    icon: Users, 
    title: "Human Experience", 
    description: "L'AI al servizio delle persone, non il contrario. UX pensata per l'adozione.",
    detail: "Interfacce intuitive, training integrato, change management supportato."
  },
  { 
    icon: Zap, 
    title: "Agentic Ready", 
    description: "Infrastruttura pronta per agenti autonomi, orchestrazione complessa, decisioni distribuite.",
    detail: "MCP native, tool integration, autonomous workflows con guardrail."
  },
  { 
    icon: Globe, 
    title: "European Trust", 
    description: "Basati in Europa, conformi alle normative EU, data residency garantita.",
    detail: "GDPR compliant, AI Act ready, sovranità digitale europea."
  },
  { 
    icon: Brain, 
    title: "Model Agnostic", 
    description: "Libertà di scegliere il modello giusto per ogni task, senza vincoli.",
    detail: "OpenAI, Anthropic, open-source, on-premise. La scelta è vostra."
  },
  { 
    icon: Heart, 
    title: "Responsible AI", 
    description: "Etica, fairness, trasparenza come principi fondanti, non opzionali.",
    detail: "Bias detection, fairness metrics, ethical guidelines integrate."
  },
  { 
    icon: Target, 
    title: "Outcome Focused", 
    description: "Non vendiamo tecnologia, abilitiamo risultati di business misurabili.",
    detail: "ROI tracking, KPI driven, value-based partnerships."
  },
];

export const PillarsSection = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <section id="pillars" className="py-32 relative overflow-hidden bg-space-deep">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-accent mb-6">
            I 10 Pilastri
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI come
            <span className="text-gradient-gold block mt-2">Enterprise Capability</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dieci principi fondamentali che guidano ogni nostra soluzione. 
            Non feature, ma valori architetturali.
          </p>
        </div>

        {/* Radial pillars visualization */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center glow-gold z-20 hidden lg:flex">
            <span className="text-accent font-bold text-lg">10</span>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`group relative p-6 rounded-2xl glass cursor-pointer transition-all duration-500 hover:glow-subtle
                  ${activePillar === index ? 'ring-1 ring-primary/50 glow-cyan' : ''}`}
                onClick={() => setActivePillar(activePillar === index ? null : index)}
              >
                {/* Number badge */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-sm font-semibold mb-2 text-foreground leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {pillar.description}
                </p>

                {/* Expanded detail */}
                {activePillar === index && (
                  <div className="mt-4 pt-4 border-t border-border/50 animate-fade-in">
                    <p className="text-xs text-primary/80 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
