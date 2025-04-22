import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-ca-navy">Prasanth<span className="text-ca-gold"> V & Associates</span></span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-700 hover:text-ca-navy font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-ca-navy font-medium transition-colors">About Us</a>
            <a href="#team" className="text-gray-700 hover:text-ca-navy font-medium transition-colors">Our Team</a>
            <a href="#testimonials" className="text-gray-700 hover:text-ca-navy font-medium transition-colors">Testimonials</a>
            <Button className="ml-4 bg-ca-navy hover:bg-ca-navy/90">
              <a href="#contact" className="text-white">Contact Us</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              className="p-2 rounded-md text-gray-700 hover:text-ca-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50">
          <div className="pt-2 pb-4 space-y-1">
            <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-ca-gray hover:text-ca-navy">Services</a>
            <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-ca-gray hover:text-ca-navy">About Us</a>
            <a href="#team" className="block px-4 py-2 text-gray-700 hover:bg-ca-gray hover:text-ca-navy">Our Team</a>
            <a href="#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-ca-gray hover:text-ca-navy">Testimonials</a>
            <a href="#contact" className="block px-4 py-3 font-medium bg-ca-navy text-white">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
