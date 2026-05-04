import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              About QurbaniHat
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted online marketplace for Qurbani livestock. Browse, book, and sacrifice
              with peace of mind. We ensure quality animals and smooth booking experience.
            </p>
          </div>

          {/* Contact Info */}
          <div className="ml-0 md:ml-20">
            <h3 className="text-lg font-semibold mb-3">
              Contact Info
            </h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="hover:text-white transition">📧 info@qurbanihat.com</li>
              <li className="hover:text-white transition">📞 +880 1700-000000</li>
              <li className="hover:text-white transition">📍 Barishal, Bangladesh</li>
            </ul>
          </div>

          {/* Social Links */}
          <div >
            <h3 className="text-lg font-semibold mb-3">
              Follow Us
            </h3>

            <div className="flex justify-center sm:justify-start space-x-5 text-2xl mt-2">
              <a
                href="#"
                className="hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-pink-400 transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-transform transform hover:scale-110"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-md text-gray-100">
          © {new Date().getFullYear()} QurbaniHat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}