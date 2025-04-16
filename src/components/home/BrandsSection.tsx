
const BrandsSection = () => {
  const brands = [
    { id: 1, name: "Gucci" },
    { id: 2, name: "Louis Vuitton" },
    { id: 3, name: "Saint Laurent" }, 
    { id: 4, name: "Burberry" }
  ];

  return (
    <section className="py-16 bg-luxury-beige/30">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl font-bold text-center mb-12">
          Featured <span className="text-luxury-gold">Brands</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center justify-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold tracking-wide text-luxury-black/80">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
