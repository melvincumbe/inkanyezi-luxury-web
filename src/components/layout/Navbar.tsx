
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-luxury-gold/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-playfair font-bold tracking-tight">
            <span className="text-luxury-black">INKAN</span>
            <span className="text-luxury-gold">YEZI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-montserrat text-sm font-medium uppercase tracking-wider hover:text-luxury-gold transition-colors">
            Home
          </Link>
          <Link to="/products" className="font-montserrat text-sm font-medium uppercase tracking-wider hover:text-luxury-gold transition-colors">
            Products
          </Link>
          <Link to="/about" className="font-montserrat text-sm font-medium uppercase tracking-wider hover:text-luxury-gold transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="font-montserrat text-sm font-medium uppercase tracking-wider hover:text-luxury-gold transition-colors">
            Contact
          </Link>
          <Link to="/tracking" className="font-montserrat text-sm font-medium uppercase tracking-wider hover:text-luxury-gold transition-colors">
            Track Order
          </Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-luxury-gold/20 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-montserrat text-sm font-medium uppercase tracking-wider py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="font-montserrat text-sm font-medium uppercase tracking-wider py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="font-montserrat text-sm font-medium uppercase tracking-wider py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="font-montserrat text-sm font-medium uppercase tracking-wider py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/tracking" 
              className="font-montserrat text-sm font-medium uppercase tracking-wider py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Track Order
            </Link>
            <div className="flex space-x-4 py-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
