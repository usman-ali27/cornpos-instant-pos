import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses just getting started",
      features: [
        "1 POS Terminal",
        "Basic Inventory Management",
        "Sales Reports",
        "Email Support",
        "Up to 1,000 products",
        "Standard payment processing"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses with multiple locations",
      features: [
        "5 POS Terminals",
        "Advanced Inventory Management", 
        "Detailed Analytics & Reports",
        "Priority Support",
        "Unlimited products",
        "Customer loyalty programs",
        "Employee management",
        "Multi-location support"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Comprehensive solution for large enterprises",
      features: [
        "Unlimited POS Terminals",
        "Full Inventory Management",
        "Advanced Analytics & AI Insights",
        "24/7 Phone & Chat Support",
        "Unlimited products",
        "Advanced customer management",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "Advanced security features"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent
            <span className="text-primary"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 30-day free trial with no setup fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative animate-slide-up ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary/5 to-orange-500/5 border-primary/50 shadow-2xl scale-105' 
                  : 'bg-card border-border'
              } rounded-3xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'border border-primary text-primary hover:bg-primary/10'
                } transition-all duration-300`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include 30-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Compare All Features
            </Button>
            <Button variant="ghost" size="lg">
              Need Custom Pricing?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;