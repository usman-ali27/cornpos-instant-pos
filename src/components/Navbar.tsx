import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import DemoForm from "./DemoForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">DreamsPOS</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Button onClick={() => setIsDemoFormOpen(true)}>Book Demo</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Contact
              </button>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex items-center px-3">
                  <Button onClick={() => setIsDemoFormOpen(true)} size="sm" className="w-full">Book Demo</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </nav>
  );
};

export default Navbar;