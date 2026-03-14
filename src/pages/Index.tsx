import HeroSection from "@/components/HeroSection";
import QRGenerator from "@/components/QRGenerator";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <QRGenerator />
    <FeaturesSection />
    <HowItWorks />
    <FAQSection />
    <FooterSection />
  </div>
);

export default Index;
