import { useState } from "react";
import productIcon from "@/assets/product_icon.png";
import gravityDashboard from "@/assets/gravity_dashboard.png";
import nebulaDashboard from "@/assets/nebula_dashboard.png";
import slashDashboard from "@/assets/slash_dashboard.png";
import auroraDashboard from "@/assets/aurora_dashboard.png";
import { 
  Shield, Sparkles, Cloud, Gauge, FileText,
  ChevronRight, Check, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

// Mappa delle dashboard per ogni prodotto
const dashboardImages: Record<string, string> = {
  gravity: gravityDashboard,
  nebula: nebulaDashboard,
  slash: slashDashboard,
  aurora: auroraDashboard,
  // Beyond verrà aggiunto quando carichi l'immagine
};

const products = [
  {
    id: "gravity",
    name: "gravity",
    tagline: "AI Governance Platform",
    icon: Shield,
    gradient: "from-primary via-glow-blue to-primary",
    description: "Il mission control per la governance AI enterprise. Controllo completo su modelli, agenti, costi e compliance.",
    features: [
      "AI Act compliance automatizzata",
      "Cost control & optimization",
      "MCP governance nativa",
      "Audit trail completo",
      "Risk scoring real-time",
    ],
    metrics: [
      { label: "Compliance", value: "98.5%", trend: "+2.1%" },
      { label: "Cost Saved", value: "40%", trend: "+5%" },
      { label: "Audit Time", value: "-80%", trend: "↓" },
    ],
  },
  {
    id: "aurora",
    name: "aurora",
    tagline: "Agentic Platform",
    icon: Sparkles,
    gradient: "from-accent via-glow-gold to-accent",
    description: "Orchestrazione di agenti AI autonomi con guardrail enterprise. Workflow complessi, decisioni distribuite, controllo totale.",
    features: [
      "Agent orchestration",
      "Tool integration hub",
      "Decision chain tracking",
      "Human-in-the-loop",
      "Multi-model support",
    ],
    metrics: [
      { label: "Agents", value: "1.2K", trend: "+120" },
      { label: "Tasks/Day", value: "50K+", trend: "+8K" },
      { label: "Success", value: "99.2%", trend: "+0.3%" },
    ],
  },
  {
    id: "nebula",
    name: "nebula",
    tagline: "Cloud & DORA",
    icon: Cloud,
    gradient: "from-glow-blue via-primary to-glow-blue",
    description: "Infrastruttura cloud AI-native con compliance DORA integrata. Resilienza, osservabilità, scale enterprise.",
    features: [
      "Multi-cloud orchestration",
      "DORA compliance",
      "SLA 99.99%",
      "Auto-scaling",
      "Disaster recovery",
    ],
    metrics: [
      { label: "Uptime", value: "99.99%", trend: "→" },
      { label: "Regions", value: "12", trend: "+3" },
      { label: "Recovery", value: "<1min", trend: "↓" },
    ],
  },
  {
    id: "slash",
    name: "slash",
    tagline: "AI Readiness",
    icon: Gauge,
    gradient: "from-glow-purple via-primary to-glow-purple",
    description: "Assessment e roadmap per la maturità AI della tua organizzazione. Gap analysis, prioritizzazione, transformation planning.",
    features: [
      "Maturity assessment",
      "Gap analysis",
      "Roadmap generation",
      "Benchmark industry",
      "Transformation planning",
    ],
    metrics: [
      { label: "Dimensions", value: "42", trend: "→" },
      { label: "Benchmarks", value: "500+", trend: "+50" },
      { label: "Industries", value: "15", trend: "+2" },
    ],
  },
  {
    id: "beyond",
    name: "beyond",
    tagline: "Document Intelligence",
    icon: FileText,
    gradient: "from-accent via-glow-gold to-accent",
    description: "Intelligenza documentale enterprise con reasoning avanzato. Da documenti a decisioni, con audit completo.",
    features: [
      "Document understanding",
      "Reasoning chains",
      "Human-in-the-loop",
      "Audit trace",
      "Multi-format support",
    ],
    metrics: [
      { label: "Accuracy", value: "97.8%", trend: "+1.2%" },
      { label: "Formats", value: "50+", trend: "+8" },
      { label: "Speed", value: "10K/h", trend: "+2K" },
    ],
  },
];

export const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section id="products" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-sm font-medium text-primary mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Prodotti
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Le Piattaforme di
            <span className="text-gradient-cyan block mt-2">Controllo AI</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ogni prodotto è un modulo di controllo dedicato. Insieme formano 
            l'<span className="text-foreground">ecosistema operativo</span> per l'AI enterprise.
          </p>
        </ScrollReveal>

        {/* Product tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`group relative px-6 py-4 rounded-2xl transition-all duration-500 ${
                  activeProduct.id === product.id
                    ? 'glass-card shadow-[0_0_30px_hsl(var(--primary)/0.15)]'
                    : 'bg-secondary/30 hover:bg-secondary/50'
                }`}
              >
                {/* Active indicator */}
                {activeProduct.id === product.id && (
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-10`} />
                )}
                
                <div className="relative flex items-center gap-3">
                  <product.icon className={`w-5 h-5 transition-colors ${
                    activeProduct.id === product.id ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <div className="text-left">
                    <div className={`font-semibold transition-colors ${
                      activeProduct.id === product.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {product.name}
                    </div>
                    <div className="text-xs text-muted-foreground hidden sm:block">
                      {product.tagline}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active product detail */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" key={activeProduct.id}>
          {/* Left: Product info */}
          <ScrollReveal className="space-y-8">
            <div>
              <div className="flex items-center gap-5 mb-6">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${activeProduct.gradient} p-[1px]`}>
                  <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center p-3">
                    <img src={productIcon} alt={activeProduct.name} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-foreground">{activeProduct.name}</h3>
                  <p className="text-lg text-primary">{activeProduct.tagline}</p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {activeProduct.features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="glow" size="lg" className="group btn-premium">
              <span className="relative z-10 flex items-center gap-2">
                Scopri {activeProduct.name}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </ScrollReveal>

          {/* Right: Dashboard image */}
          <ScrollReveal delay={200}>
            <div className="relative">
              {/* Dashboard image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-border">
                {dashboardImages[activeProduct.id] ? (
                  <img 
                    src={dashboardImages[activeProduct.id]} 
                    alt={`${activeProduct.name} Dashboard`}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                    <p className="text-muted-foreground">Dashboard coming soon</p>
                  </div>
                )}
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
