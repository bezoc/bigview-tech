
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-lg"></div>
              <span className="text-xl font-bold text-white">BigView Tech</span>
            </div>
            <p className="text-gray-400">
              Leading GPU technology for gaming, AI, and professional workloads.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products" className="hover:text-purple-400 transition-colors">Gaming GPUs</Link></li>
              <li><Link to="/products" className="hover:text-purple-400 transition-colors">Workstation Cards</Link></li>
              <li><Link to="/products" className="hover:text-purple-400 transition-colors">AI Accelerators</Link></li>
              <li><Link to="/products" className="hover:text-purple-400 transition-colors">Mining Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-purple-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                <span className="text-white text-sm">T</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-white text-sm">L</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <span className="text-white text-sm">G</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BigView Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
