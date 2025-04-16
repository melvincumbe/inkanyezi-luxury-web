
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ProductCard, Product } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, FilterX } from "lucide-react";

const Products = () => {
  // Sample product data - in a real app, this would come from an API
  const allProducts: Product[] = [
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
    },
    {
      id: "5",
      name: "GG Belt with Double G Buckle",
      brand: "Gucci",
      price: 490,
      image: "https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isExclusive: true
    },
    {
      id: "6",
      name: "Monogram Wallet",
      brand: "Louis Vuitton",
      price: 890,
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isExclusive: false
    },
    {
      id: "7",
      name: "Cat Eye Sunglasses",
      brand: "Saint Laurent",
      price: 380,
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isExclusive: true
    },
    {
      id: "8",
      name: "Check Cotton Shirt",
      brand: "Burberry",
      price: 390,
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isExclusive: false
    }
  ];

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [exclusiveOnly, setExclusiveOnly] = useState(false);

  // Filter and sort products
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "" || product.brand === selectedBrand;
    const matchesExclusive = !exclusiveOnly || product.isExclusive;
    
    return matchesSearch && matchesBrand && matchesExclusive;
  }).sort((a, b) => {
    if (priceSort === "asc") {
      return a.price - b.price;
    } else if (priceSort === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand("");
    setPriceSort("");
    setExclusiveOnly(false);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
          Luxury <span className="text-luxury-gold">Collection</span>
        </h1>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-9 font-montserrat"
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="font-montserrat">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Brands</SelectItem>
                  <SelectItem value="Gucci">Gucci</SelectItem>
                  <SelectItem value="Louis Vuitton">Louis Vuitton</SelectItem>
                  <SelectItem value="Saint Laurent">Saint Laurent</SelectItem>
                  <SelectItem value="Burberry">Burberry</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priceSort} onValueChange={setPriceSort}>
                <SelectTrigger className="font-montserrat">
                  <SelectValue placeholder="Price: Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Price: Default</SelectItem>
                  <SelectItem value="asc">Price: Low to High</SelectItem>
                  <SelectItem value="desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant={exclusiveOnly ? "gold" : "outline"} 
                onClick={() => setExclusiveOnly(!exclusiveOnly)}
                className="font-montserrat"
              >
                Exclusive Only
              </Button>
            </div>

            <Button 
              variant="ghost" 
              onClick={resetFilters}
              className="flex items-center font-montserrat"
            >
              <FilterX className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-montserrat text-lg text-gray-600">No products found matching your criteria.</p>
            <Button 
              variant="link" 
              onClick={resetFilters}
              className="mt-2 font-montserrat text-luxury-gold"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
