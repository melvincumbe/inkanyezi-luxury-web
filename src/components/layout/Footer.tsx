
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">
              <span className="text-white">INKAN</span>
              <span className="text-luxury-gold">YEZI</span>
            </h3>
            <p className="font-montserrat text-sm text-white/70">
              Estilo não se veste, se incorpora... mais
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/africanstyle_inkanyezi" className="text-white hover:text-luxury-gold transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contact@inkanyezi.com" className="text-white hover:text-luxury-gold transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+258874928428" className="text-white hover:text-luxury-gold transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-bold uppercase text-luxury-gold">Shop</h4>
            <ul className="space-y-2 font-montserrat text-sm">
              <li>
                <Link to="/products" className="text-white/70 hover:text-luxury-gold transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=bags" className="text-white/70 hover:text-luxury-gold transition-colors">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/products?category=eyewear" className="text-white/70 hover:text-luxury-gold transition-colors">
                  Eyewear
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-white/70 hover:text-luxury-gold transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-bold uppercase text-luxury-gold">Info</h4>
            <ul className="space-y-2 font-montserrat text-sm">
              <li>
                <Link to="/about" className="text-white/70 hover:text-luxury-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-luxury-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-white/70 hover:text-luxury-gold transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/70 hover:text-luxury-gold transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Shipping */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-bold uppercase text-luxury-gold">Fast Shipping</h4>
            <div className="flex items-center space-x-2">
              <Plane className="h-5 w-5 text-luxury-gold" />
              <span className="font-montserrat text-sm text-white/70">
                We ship to Brazil, Netherlands, and worldwide
              </span>
            </div>
            <div className="flex space-x-2">
              <span className="text-2xl">🇧🇷</span>
              <span className="text-2xl">🇳🇱</span>
              <span className="text-2xl">✈️</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="font-montserrat text-xs text-white/50">
            © {new Date().getFullYear()} Africanstyle Inkanyezi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
