
import Layout from "@/components/layout/Layout";
import { Rocket, Clock, Globe, CreditCard } from "lucide-react";

const Shipping = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
            Shipping <span className="text-luxury-gold">Information</span>
          </h1>
          
          <div className="space-y-12">
            {/* Fast Shipping Section */}
            <div className="bg-luxury-beige/20 p-8 rounded-sm">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="bg-luxury-gold/10 p-4 rounded-full mr-6 mb-4 md:mb-0">
                  <Rocket className="h-8 w-8 text-luxury-gold" />
                </div>
                <div>
                  <h2 className="font-playfair text-2xl font-bold">Fast Shipping</h2>
                  <p className="font-montserrat text-sm text-gray-600">
                    We pride ourselves on fast and reliable international shipping
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="font-montserrat text-base leading-relaxed">
                  At Africanstyle Inkanyezi, we understand that when you order luxury items, you want them as quickly as possible. That's why we've partnered with premium shipping services to ensure your products arrive safely and on time.
                </p>
                
                <div className="flex items-center space-x-4 mt-4">
                  <span className="text-3xl">🇧🇷</span>
                  <span className="text-3xl">🇳🇱</span>
                  <span className="text-3xl">✈️</span>
                </div>
              </div>
            </div>
            
            {/* Delivery Times */}
            <div>
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-luxury-gold mr-2" />
                <h2 className="font-playfair text-2xl font-bold">Estimated Delivery Times</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-luxury-gold/20 rounded-sm p-6">
                  <h3 className="font-playfair text-xl font-bold mb-4">Brazil</h3>
                  <ul className="space-y-2 font-montserrat text-sm">
                    <li className="flex justify-between">
                      <span>São Paulo, Rio de Janeiro</span>
                      <span className="font-medium">2-3 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Major Cities</span>
                      <span className="font-medium">3-5 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Other Areas</span>
                      <span className="font-medium">5-7 business days</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-luxury-gold/20 rounded-sm p-6">
                  <h3 className="font-playfair text-xl font-bold mb-4">Netherlands</h3>
                  <ul className="space-y-2 font-montserrat text-sm">
                    <li className="flex justify-between">
                      <span>Amsterdam, Rotterdam</span>
                      <span className="font-medium">1-2 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Major Cities</span>
                      <span className="font-medium">2-3 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Other Areas</span>
                      <span className="font-medium">3-4 business days</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-luxury-gold/20 rounded-sm p-6 md:col-span-2">
                  <h3 className="font-playfair text-xl font-bold mb-4">Worldwide Shipping</h3>
                  <ul className="space-y-2 font-montserrat text-sm">
                    <li className="flex justify-between">
                      <span>Europe</span>
                      <span className="font-medium">3-5 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>North America</span>
                      <span className="font-medium">5-7 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Asia</span>
                      <span className="font-medium">7-10 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rest of the World</span>
                      <span className="font-medium">10-14 business days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Shipping Methods */}
            <div>
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-luxury-gold mr-2" />
                <h2 className="font-playfair text-2xl font-bold">Shipping Methods</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-sm border border-luxury-gold/10">
                  <h3 className="font-playfair text-xl font-bold mb-2">Standard Shipping</h3>
                  <p className="font-montserrat text-sm mb-4">
                    Our standard shipping option provides reliable delivery with tracking information.
                  </p>
                  <p className="font-montserrat text-sm font-medium">
                    Delivery times vary by destination as outlined above.
                  </p>
                </div>
                
                <div className="bg-luxury-beige/30 p-6 rounded-sm border border-luxury-gold/10">
                  <h3 className="font-playfair text-xl font-bold mb-2">Express Shipping</h3>
                  <p className="font-montserrat text-sm mb-4">
                    For faster delivery, our express shipping option ensures your luxury items arrive at your doorstep as quickly as possible.
                  </p>
                  <p className="font-montserrat text-sm font-medium">
                    Express shipping reduces standard delivery times by 1-3 business days, depending on the destination.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Payment & Insurance */}
            <div>
              <div className="flex items-center mb-6">
                <CreditCard className="h-6 w-6 text-luxury-gold mr-2" />
                <h2 className="font-playfair text-2xl font-bold">Payment & Insurance</h2>
              </div>
              
              <div className="space-y-4 font-montserrat text-base leading-relaxed">
                <p>
                  All shipments are insured for their full value at no additional cost to you, ensuring that your luxury items are protected throughout their journey.
                </p>
                <p>
                  We accept various payment methods, including major credit cards, bank transfers, and secure online payment platforms.
                </p>
                <p>
                  For orders over $1,000, we may require a signature upon delivery to ensure your items reach you safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;
