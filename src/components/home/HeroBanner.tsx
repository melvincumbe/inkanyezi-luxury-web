
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-luxury-black/80 z-10" />
      
      {/* Hero Image */}
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Fashion"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Estilo não se veste, <span className="text-luxury-gold italic">se incorpora...</span>
            </h1>
            <p className="font-montserrat text-sm md:text-base text-white/80 mb-8 max-w-lg mx-auto">
              Exclusive African fashion from top designers. Fast shipping to Brazil, Netherlands and worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="gold"
                asChild
                className="font-montserrat"
              >
                <Link to="/products">
                  Explore Collection
                </Link>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-white/10 font-montserrat"
              >
                <Link to="/about">
                  About Inkanyezi
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
