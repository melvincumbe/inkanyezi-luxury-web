
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset submission message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
            Contact <span className="text-luxury-gold">Us</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="font-montserrat text-base leading-relaxed mb-8">
                We'd love to hear from you. Whether you have a question about our products, shipping, or anything else, our team is ready to answer all your inquiries.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Instagram className="h-6 w-6 text-luxury-gold mt-1 mr-4" />
                  <div>
                    <h3 className="font-playfair text-lg font-bold">Instagram</h3>
                    <a 
                      href="https://instagram.com/africanstyle_inkanyezi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-montserrat text-sm text-luxury-gold hover:underline"
                    >
                      @africanstyle_inkanyezi
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-luxury-gold mt-1 mr-4" />
                  <div>
                    <h3 className="font-playfair text-lg font-bold">Email</h3>
                    <a 
                      href="mailto:contact@inkanyezi.com" 
                      className="font-montserrat text-sm text-luxury-gold hover:underline"
                    >
                      contact@inkanyezi.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-luxury-gold mt-1 mr-4" />
                  <div>
                    <h3 className="font-playfair text-lg font-bold">WhatsApp</h3>
                    <a 
                      href="tel:+258874928428" 
                      className="font-montserrat text-sm text-luxury-gold hover:underline"
                    >
                      +258 874 928 428
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-playfair text-lg font-bold mb-4">Shipping Destinations</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🇧🇷</span>
                  <span className="text-3xl">🇳🇱</span>
                  <span className="text-3xl">✈️</span>
                </div>
                <p className="font-montserrat text-sm mt-2">
                  We offer fast shipping to Brazil, Netherlands, and worldwide.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-luxury-beige/20 p-8 rounded-sm">
              <h2 className="font-playfair text-2xl font-bold mb-6">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-sm">
                  <p className="font-montserrat text-sm">
                    Thank you for your message! We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="font-montserrat text-sm font-medium block mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-montserrat"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="font-montserrat text-sm font-medium block mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-montserrat"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="font-montserrat text-sm font-medium block mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="font-montserrat"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="gold"
                    disabled={isSubmitting}
                    className="w-full font-montserrat"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
