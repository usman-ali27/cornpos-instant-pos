import { Star, Quote } from "lucide-react";
import businessTeam from "@/assets/business-team.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Store Manager",
      company: "Fresh Market Grocery",
      content: "DreamsPOS has completely transformed how we manage our store. The inventory tracking is seamless and the reporting features help us make better business decisions every day.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Restaurant Owner",
      company: "Golden Dragon Restaurant",
      content: "The ease of use is incredible. Our staff learned the system in just one day, and we've seen a 30% improvement in order processing speed since switching to DreamsPOS.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Retail Chain Director",
      company: "Fashion Forward Stores",
      content: "Managing multiple locations is now effortless. The multi-store functionality and real-time sync across all our locations has saved us countless hours of manual work.",
      rating: 5
    },
    {
      name: "David Thompson",
      title: "Pharmacy Owner",
      company: "Community Health Pharmacy",
      content: "The barcode scanning and prescription management features are exactly what we needed. Customer checkout is faster and our accuracy has improved significantly.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers
            <span className="text-primary"> Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real business owners say about DreamsPOS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-slide-up bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-primary mr-3" />
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-foreground text-lg mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.title}</div>
                  <div className="text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-scale-in" style={{ animationDelay: "0.8s" }}>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-3xl blur-2xl opacity-75"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
              <img 
                src={businessTeam} 
                alt="Happy business team using DreamsPOS"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Join 10,000+ Happy Customers</h3>
                  <p className="text-white/90">Experience the difference DreamsPOS can make for your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;