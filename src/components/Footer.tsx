
import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Blaze Wings</span>
                <span className="text-sm text-gray-400 block -mt-1">Technology</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering businesses with modern, reliable, and cost-effective software solutions through innovation and automation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:blazewingstechnology@gmail.com" className="hover:text-white transition-colors">
                  blazewingstechnology@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <a href="tel:+916383347427" className="hover:text-white transition-colors">
                  +91 6383347427
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/technologies" className="block text-gray-400 hover:text-white transition-colors">
                Technologies
              </Link>
              <Link to="/process" className="block text-gray-400 hover:text-white transition-colors">
                Our Process
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-gray-400">
              <div>Software Development</div>
              <div>DevOps Solutions</div>
              <div>Cloud Infrastructure</div>
              <div>AI Automation</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-sm text-gray-400 text-center">
              © 2025 Blaze Wings Technology Pvt Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
