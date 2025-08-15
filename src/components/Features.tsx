import FeatureCard from "./FeatureCard";
import { 
  CreditCard, 
  Package, 
  QrCode, 
  FileText, 
  Upload, 
  BarChart3, 
  Calculator, 
  Settings 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Point of Sale",
      description: "It is the point at which a customer makes a payment to a merchant in exchange for goods or services.",
      delay: "0.1s"
    },
    {
      icon: Package,
      title: "Product List",
      description: "A product list is a comprehensive record of all the items or services a business offers for sale.",
      delay: "0.2s"
    },
    {
      icon: QrCode,
      title: "Print Barcode",
      description: "In DreamsPOS we have a built-in features for generating and printing barcodes",
      delay: "0.3s"
    },
    {
      icon: FileText,
      title: "Invoices & Quotations List",
      description: "By creating a clear and comprehensive quotation list, you provide potential customers with necessary info.",
      delay: "0.4s"
    },
    {
      icon: Upload,
      title: "Import Products & Reports",
      description: "Importing products & generating reports are crucial tasks for businesses, but we made easy for you.",
      delay: "0.5s"
    },
    {
      icon: BarChart3,
      title: "Reports Updated",
      description: "Provides detailed transaction reports that can be used to create Financial statements.",
      delay: "0.6s"
    },
    {
      icon: Calculator,
      title: "Accounts & Finance",
      description: "POS systems track every transaction made, from the sale of a product or service to the payment method.",
      delay: "0.7s"
    },
    {
      icon: Settings,
      title: "Unlimited Settings Options",
      description: "It's important to consider the user interface, documentation, and support mechanisms.",
      delay: "0.8s"
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Powerful Features for
              <span className="text-primary"> Modern Business</span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage your business efficiently, from sales to inventory management.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of businesses already using DreamsPOS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all transform hover:scale-105">
                Start Your Free Trial
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-all transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;