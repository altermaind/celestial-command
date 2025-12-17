import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { StarField } from "@/components/StarField";
import { CursorGlow } from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global effects */}
      <StarField />
      <CursorGlow />
      
      {/* Content */}
      <Navigation />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <PillarsSection />
        <ProductsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
