import { 
  CreditCard, 
  Package, 
  QrCode, 
  FileText, 
  Upload, 
  BarChart3, 
  Calculator, 
  Settings,
  CheckCircle,
  Users,
  ShoppingCart,
  Smartphone
} from "lucide-react";
import posDashboard from "@/assets/pos-dashboard.jpg";
import retailStore from "@/assets/retail-store.jpg";

const FeaturesDetailed = () => {
  const detailedFeatures = [
    {
      icon: CreditCard,
      title: "Complete Point of Sale System",
      description: "Process payments seamlessly with our comprehensive POS solution that handles cash, card, and digital payments.",
      features: ["Credit/Debit Card Processing", "Cash Management", "Digital Wallets", "Split Payment Options", "Receipt Generation"],
      image: posDashboard,
      reverse: false
    },
    {
      icon: Package,
      title: "Advanced Inventory Management",
      description: "Keep track of your products with real-time inventory updates, low stock alerts, and automated reordering.",
      features: ["Real-time Stock Tracking", "Low Stock Alerts", "Product Categories", "Supplier Management", "Batch Operations"],
      image: retailStore,
      reverse: true
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics & Reporting",
      description: "Get detailed insights into your business performance with comprehensive reports and analytics.",
      features: ["Sales Reports", "Profit Analysis", "Customer Insights", "Trend Analysis", "Export to Excel/PDF"],
      image: posDashboard,
      reverse: false
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description: "Build stronger relationships with your customers through loyalty programs and detailed customer profiles.",
      features: ["Customer Profiles", "Loyalty Programs", "Purchase History", "Customer Segmentation", "Marketing Campaigns"],
      image: retailStore,
      reverse: true
    }
  ];

  return (
    <section id="features-detailed" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-primary"> Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive POS system provides all the tools you need to manage and grow your business efficiently.
          </p>
        </div>

        <div className="space-y-32">
          {detailedFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  {feature.features.map((item, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 animate-scale-in" style={{ animationDelay: `${index * 0.2 + 0.2}s` }}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-3xl blur-2xl opacity-75"></div>
                  <div className="relative bg-card border border-border rounded-2xl p-4 shadow-2xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetailed;