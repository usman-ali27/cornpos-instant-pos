import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Utensils, ShoppingBag, Truck, Car } from "lucide-react";
import DemoForm from "./DemoForm";
import restaurantGuy from "@/assets/restaurant-guy.png";

const Hero = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <section className="relative py-5 text-center">
      <div className="max-w-7xl bg-[#fdf9f1] p-8 rounded-[5%] mx-auto">
        {/* Top tagline */}
        <div className="inline-flex items-center bg-white px-5 py-2 rounded-full shadow-sm gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"></span>
          <p className="text-sm font-medium text-gray-600">
            Manage your entire business in one place
          </p>
        </div>


        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-900 my-4">
          Not Just a POS
        </h1>

        <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6">
          The Complete Restaurant POS Solution
        </h2>

        {/* Sub description */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Streamline your orders, manage inventory, and boost customer satisfaction —
          all from one smart system. More than just a POS, it's the recipe for smooth
          operations and business growth
        </p>

        {/* POS type buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md text-base flex items-center gap-2">
            <Utensils className="h-4 w-4" /> Dine In
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md text-base flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" /> Pickup
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md text-base flex items-center gap-2">
            <Truck className="h-4 w-4" /> Delivery
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md text-base flex items-center gap-2">
            <Car className="h-4 w-4" /> Drive Thru
          </Button>
        </div>

        {/* Demo Button */}
        <div className="mb-12">
          <Button
            size="lg"
            onClick={() => setIsDemoFormOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-md"
          >
            Book a Free Demo
          </Button>
        </div>

        {/* Restaurant Guy Image */}
        <div className="flex justify-center">
          <img
            src={restaurantGuy}
            alt="Restaurant Guy"
            className="w-[300px] sm:w-[400px] h-auto"
          />
        </div>
      </div>

      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </section>
  );
};

export default Hero;
