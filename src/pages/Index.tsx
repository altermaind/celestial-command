import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhoWeAreSection />
      <PillarsSection />
      <ProductsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
