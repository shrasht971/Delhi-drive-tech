import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Navigation Links */}
          <div className="mb-4 lg:mb-0">
            <h2 className="font-bold text-lg">Quick Links</h2>
            <ul>
              <li className="my-2">
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li className="my-2">
                <a href="#about" className="hover:underline">About</a>
              </li>
              <li className="my-2">
                <a href="#services" className="hover:underline">Services</a>
              </li>
              <li className="my-2">
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-4 lg:mb-0">
            <h2 className="font-bold text-lg">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com" aria-label="YouTube" className="hover:text-gray-400">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-bold text-lg">Contact Us</h2>
            <ul>
              <li className="my-2">
                <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
              </li>
              <li className="my-2">
                <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
              </li>
              <li className="my-2">
                <p>123 Main Street, City, Country</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

