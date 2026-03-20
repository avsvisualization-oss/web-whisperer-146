import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import SolutionsSection from "@/components/SolutionsSection";
import ValueSection from "@/components/ValueSection";
import FeaturedWork from "@/components/FeaturedWork";
import ProcessSection from "@/components/ProcessSection";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedWork />
      <TrustSection />
      <SolutionsSection />
      <ValueSection />
      <ProcessSection />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
