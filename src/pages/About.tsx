
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-luxury-gold">Inkanyezi</span>
          </h1>
          
          {/* Brand Story */}
          <div className="mb-16">
            <div className="relative h-96 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Luxury Fashion" 
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-luxury-black/40 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-playfair text-5xl font-bold text-white">
                    <span className="text-white">INKAN</span>
                    <span className="text-luxury-gold">YEZI</span>
                  </span>
                  <p className="font-montserrat text-sm text-white/90 mt-2">Desde 2023</p>
                </div>
              </div>
            </div>
            
            <p className="font-montserrat text-base leading-relaxed mb-4">
              Africanstyle Inkanyezi, founded in 2023, is a luxury fashion boutique that brings exclusivity and style to our discerning clients. Based in Maranhão, Brazil, we connect the world with high-end fashion brands such as Gucci, Louis Vuitton, Saint Laurent, and Burberry.
            </p>
            
            <p className="font-montserrat text-base leading-relaxed mb-4">
              Our name, Inkanyezi, embodies our philosophy of being a guiding star in the world of luxury fashion, illuminating the path to exceptional style and sophistication.
            </p>
            
            <p className="font-montserrat text-base leading-relaxed">
              What sets us apart is our commitment to providing exclusive products with fast shipping to Brazil, Netherlands, and beyond. Every item in our collection is carefully selected to ensure authenticity and premium quality.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-luxury-beige/30 p-8 rounded-sm mb-16">
            <h2 className="font-playfair text-2xl font-bold mb-4 text-center">Our Mission</h2>
            <p className="font-montserrat text-base leading-relaxed text-center italic">
              "Estilo não se veste, se incorpora... mais" <br />
              <span className="text-sm font-normal text-gray-600 mt-2 block">
                (Style is not worn, it is embodied... more)
              </span>
            </p>
            <p className="font-montserrat text-base leading-relaxed mt-4 text-center">
              Our mission is to embody unique style in every piece, offering exclusive products and fast shipping to Brazil, Netherlands, and beyond. We strive to make luxury accessible while maintaining the highest standards of quality and authenticity.
            </p>
          </div>
          
          {/* Values */}
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-luxury-gold/20 rounded-sm">
                <h3 className="font-playfair text-xl font-bold mb-2 text-luxury-gold">Exclusivity</h3>
                <p className="font-montserrat text-sm">
                  We pride ourselves on offering exclusive luxury items that stand out for their uniqueness and quality.
                </p>
              </div>
              
              <div className="text-center p-6 border border-luxury-gold/20 rounded-sm">
                <h3 className="font-playfair text-xl font-bold mb-2 text-luxury-gold">Authenticity</h3>
                <p className="font-montserrat text-sm">
                  Every product in our collection is 100% authentic, sourced directly from the most prestigious luxury brands.
                </p>
              </div>
              
              <div className="text-center p-6 border border-luxury-gold/20 rounded-sm">
                <h3 className="font-playfair text-xl font-bold mb-2 text-luxury-gold">Service</h3>
                <p className="font-montserrat text-sm">
                  We are committed to providing exceptional service, including fast shipping and a personalized shopping experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
