import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ca-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Prasanth<span className="text-ca-gold"> V & Associates</span></h3>
            <p className="mb-4 text-gray-300">
              Professional chartered accountancy services tailored for Indian businesses and individuals.
            </p>
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-4 w-4 text-ca-gold" />
              <span>+91 9550783795</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-ca-gold" />
              <span>info@Prasanth V & Associates.com</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-ca-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-ca-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-ca-gold transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-ca-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-ca-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-ca-gold transition-colors">Tax Planning & Filing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-ca-gold transition-colors">GST Services</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-ca-gold transition-colors">Audit & Assurance</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-ca-gold transition-colors">Business Advisory</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-ca-gold transition-colors">Bookkeeping & Accounting</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Prasanth V & Associates. All rights reserved.
            </p>
            <div className="space-x-4">
              <a href="#" className="text-gray-400 text-sm hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
