import trustedCompanies from "@/assets/trusted-companies.jpg";

const TrustedCompanies = () => {
  const companies = [
    "McDonald's",
    "Starbucks", 
    "Target",
    "Walmart",
    "Best Buy",
    "Home Depot",
    "CVS Pharmacy",
    "7-Eleven",
    "Subway",
    "KFC",
    "Pizza Hut",
    "Dunkin'"
  ];

  const stats = [
    { number: "10,000+", label: "Active Businesses" },
    { number: "50M+", label: "Transactions Processed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <section id="trusted" className="py-20 sm:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Businesses
            <span className="text-primary"> Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join thousands of successful businesses that trust DreamsPOS for their daily operations.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Names Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Serving Industry Leaders
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="animate-fade-in p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-sm font-medium text-foreground">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Representation */}
        <div className="animate-scale-in" style={{ animationDelay: "0.8s" }}>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-3xl blur-2xl opacity-75"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
              <img 
                src={trustedCompanies} 
                alt="Trusted Companies"
                className="w-full h-auto rounded-xl opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;