import { useState } from "react";
import { 
  Shield, Sparkles, Cloud, Gauge, FileText,
  ChevronRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "gravity",
    name: "Gravity",
    tagline: "AI Governance Platform",
    icon: Shield,
    color: "cyan",
    description: "Il mission control per la governance AI enterprise. Controllo completo su modelli, agenti, costi e compliance.",
    features: [
      "AI Act compliance automatizzata",
      "Cost control & optimization",
      "MCP governance nativa",
      "Audit trail completo",
      "Risk scoring real-time",
    ],
    metrics: [
      { label: "Compliance Score", value: "98.5%" },
      { label: "Cost Saved", value: "40%" },
      { label: "Audit Time", value: "-80%" },
    ],
  },
  {
    id: "aurora",
    name: "Aurora",
    tagline: "Agentic Platform",
    icon: Sparkles,
    color: "gold",
    description: "Orchestrazione di agenti AI autonomi con guardrail enterprise. Workflow complessi, decisioni distribuite, controllo totale.",
    features: [
      "Agent orchestration",
      "Tool integration hub",
      "Decision chain tracking",
      "Human-in-the-loop",
      "Multi-model support",
    ],
    metrics: [
      { label: "Active Agents", value: "1.2K" },
      { label: "Tasks/Day", value: "50K+" },
      { label: "Success Rate", value: "99.2%" },
    ],
  },
  {
    id: "nebula",
    name: "Nebula",
    tagline: "Cloud & DORA",
    icon: Cloud,
    color: "blue",
    description: "Infrastruttura cloud AI-native con compliance DORA integrata. Resilienza, osservabilità, scale enterprise.",
    features: [
      "Multi-cloud orchestration",
      "DORA compliance",
      "SLA 99.99%",
      "Auto-scaling",
      "Disaster recovery",
    ],
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Regions", value: "12" },
      { label: "Recovery", value: "<1min" },
    ],
  },
  {
    id: "slash",
    name: "Slash",
    tagline: "AI Readiness",
    icon: Gauge,
    color: "purple",
    description: "Assessment e roadmap per la maturità AI della tua organizzazione. Gap analysis, prioritizzazione, transformation planning.",
    features: [
      "Maturity assessment",
      "Gap analysis",
      "Roadmap generation",
      "Benchmark industry",
      "Transformation planning",
    ],
    metrics: [
      { label: "Dimensions", value: "42" },
      { label: "Benchmarks", value: "500+" },
      { label: "Industries", value: "15" },
    ],
  },
  {
    id: "beyond",
    name: "Beyond",
    tagline: "Document Intelligence",
    icon: FileText,
    color: "green",
    description: "Intelligenza documentale enterprise con reasoning avanzato. Da documenti a decisioni, con audit completo.",
    features: [
      "Document understanding",
      "Reasoning chains",
      "Human-in-the-loop",
      "Audit trace",
      "Multi-format support",
    ],
    metrics: [
      { label: "Accuracy", value: "97.8%" },
      { label: "Formats", value: "50+" },
      { label: "Processing", value: "10K/h" },
    ],
  },
];

export const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section id="products" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-6">
            Prodotti
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Le Piattaforme di
            <span className="text-gradient-cyan block mt-2">Controllo AI</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ogni prodotto è un modulo di controllo dedicato. Insieme formano 
            l'ecosistema operativo per l'AI enterprise.
          </p>
        </div>

        {/* Product showcase */}
        <div className="grid lg:grid-cols-5 gap-4 mb-12">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className={`p-4 rounded-xl text-left transition-all duration-300 ${
                activeProduct.id === product.id
                  ? 'glass glow-subtle ring-1 ring-primary/30'
                  : 'bg-secondary/30 hover:bg-secondary/50'
              }`}
            >
              <product.icon className={`w-6 h-6 mb-3 ${
                activeProduct.id === product.id ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <h3 className="font-semibold text-foreground">{product.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{product.tagline}</p>
            </button>
          ))}
        </div>

        {/* Active product detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Product info */}
          <div className="space-y-8 animate-fade-in" key={activeProduct.id}>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <activeProduct.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{activeProduct.name}</h3>
                  <p className="text-primary">{activeProduct.tagline}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {activeProduct.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {activeProduct.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="glow" className="group">
              Scopri {activeProduct.name}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right: Metrics dashboard mockup */}
          <div className="relative animate-slide-in-right" key={`${activeProduct.id}-dashboard`}>
            <div className="glass rounded-2xl p-8 glow-subtle">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-foreground">{activeProduct.name} Dashboard</span>
                </div>
                <span className="text-xs text-muted-foreground">Live</span>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-6">
                {activeProduct.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual element */}
              <div className="mt-8 h-32 rounded-xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                <div className="w-full h-full relative overflow-hidden">
                  {/* Simulated chart lines */}
                  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path
                      d="M0,80 Q100,20 200,60 T400,30"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      opacity="0.5"
                    />
                    <path
                      d="M0,60 Q100,80 200,40 T400,50"
                      fill="none"
                      stroke="hsl(var(--glow-gold))"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
