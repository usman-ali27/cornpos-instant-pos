import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Modern POS System for
              <span className="text-primary bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                {" "}Your Business
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your business operations with our comprehensive Point of Sale solution. 
              Manage inventory, process payments, and generate reports effortlessly.
            </p>
          </div>

          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-3xl blur-2xl opacity-75"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-xl flex items-center justify-center">
                  <div className="text-6xl text-primary/50">🏪</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;