import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Inspired by Sikh principles of Seva (selfless service) and Sarbat da Bhala (well-being of all), we are dedicated to serving humanity through various charitable initiatives, focusing on education, health, and community development.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Initiatives</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Langar Seva (Community Kitchen)</a></li>
              <li><a href="#" className="hover:text-gray-300">Educational Support</a></li>
              <li><a href="#" className="hover:text-gray-300">Healthcare Camps</a></li>
              <li><a href="#" className="hover:text-gray-300">Women Empowerment</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm">Email: seva@example.org</li>
              <li className="text-sm">Phone: +1 234 567 890</li>
              <li className="text-sm">Address: 123 Seva Street, Anytown, USA</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white py-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Seva Organization. All rights reserved.</p>
          <p>
            "Recognize the human race as one." — Guru Gobind Singh Ji
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
