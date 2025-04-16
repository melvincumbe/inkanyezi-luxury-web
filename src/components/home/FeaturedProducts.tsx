
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard, Product } from "@/components/ui/product-card";

const FeaturedProducts = () => {
  // Sample product data
  const products: Product[] = [
    {
      id: "1",
      name: "GG Marmont Small Bag",
      brand: "Gucci",
      price: 2390,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isExclusive: true
    },
    {
      id: "2",
      name: "Monogram Sunglasses",
      brand: "Saint Laurent",
      price: 450,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isExclusive: false
    },
    {
      id: "3",
      name: "Monogram Bracelet",
      brand: "Louis Vuitton",
      price: 680,
      image: "https://images.unsplash.com/photo-1589290170892-b8b0b89cc693?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isExclusive: true
    },
    {
      id: "4",
      name: "Nova Check Scarf",
      brand: "Burberry",
      price: 470,
      image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isExclusive: false
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="font-playfair text-3xl font-bold">
            Exclusive <span className="text-luxury-gold">Products</span>
          </h2>
          <Button 
            variant="ghost" 
            asChild
            className="mt-4 md:mt-0 font-montserrat text-luxury-black hover:text-luxury-gold"
          >
            <Link to="/products">
              View All Products
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
