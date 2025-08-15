import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturesDetailed from "@/components/FeaturesDetailed";
import TrustedCompanies from "@/components/TrustedCompanies";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Features />
      <FeaturesDetailed />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
