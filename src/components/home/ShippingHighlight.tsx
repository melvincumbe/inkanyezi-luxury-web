
import { Rocket, Shield, Crown } from "lucide-react";

const ShippingHighlight = () => {
  const features = [
    {
      id: 1,
      title: "Fast Shipping",
      description: "Quick delivery to Brazil, Netherlands and worldwide",
      icon: Rocket,
      emoji: "✈️"
    },
    {
      id: 2,
      title: "Authentic Products",
      description: "100% authentic luxury brands guaranteed",
      icon: Shield,
      emoji: ""
    },
    {
      id: 3,
      title: "Exclusivity",
      description: "Limited edition and exclusive luxury items",
      icon: Crown,
      emoji: "👑"
    }
  ];

  return (
    <section className="py-16 bg-luxury-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-6 border border-luxury-gold/20 rounded-sm">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-10 w-10 text-luxury-gold" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                {feature.title} {feature.emoji}
              </h3>
              <p className="font-montserrat text-sm text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-montserrat text-sm md:text-base text-white/70 max-w-2xl mx-auto">
            At Africanstyle Inkanyezi, we pride ourselves on fast shipping to Brazil 🇧🇷, Netherlands 🇳🇱, and other destinations worldwide. Our exclusive luxury products are delivered with care and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShippingHighlight;
