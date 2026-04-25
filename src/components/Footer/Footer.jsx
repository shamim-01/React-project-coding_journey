import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              The Coding Journey
            </h1>
            <p className="text-gray-400 leading-relaxed text-sm">
              TCJ is a platform dedicated to empowering aspiring developers.
              From beginner tutorials to advanced programming concepts, we
              provide a comprehensive learning experience designed to help you
              master coding skills, build projects, and launch your tech career.
            </p>
            {/* Trust Badge */}
            <div className="flex items-center gap-2 pt-2">
              <i className="ri-graduation-cap-line text-gray-400 text-lg"></i>
              <span className="text-gray-400 text-sm">10K+ Students</span>
            </div>
          </div>

          {/* Courses Section */}
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-white relative inline-block">
              Courses
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-secondary rounded-full"></span>
            </h1>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Software Development',
                'Apps Development',
                'E-learning',
                'Data Science',
                'Cloud Computing',
              ].map((course, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <IoIosArrowRoundForward className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-secondary rounded-full"></span>
            </h1>
            <ul className="space-y-3">
              {[
                { name: 'Home', link: '/' },
                { name: 'About Us', link: '/about' },
                { name: 'Services', link: '/services' },
                { name: 'Blog', link: '/blog' },
                { name: 'Contact', link: '/contact' },
                { name: 'Privacy Policy', link: '/privacy' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <IoIosArrowRoundForward className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Section */}
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-white relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-secondary rounded-full"></span>
            </h1>

            {/* Contact Info */}
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3 group">
                <MdEmail className="text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-sm">info@thecodingjourney.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <MdPhone className="text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 group">
                <MdLocationOn className="text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="pt-2">
              <p className="text-gray-400 text-sm mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 rounded-l-lg bg-gray-800 w-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary border border-gray-700 text-white placeholder:text-gray-500"
                />
                <button className="bg-gradient-to-r from-secondary to-primary text-white font-semibold px-5 rounded-r-lg hover:opacity-90 transition-all duration-300">
                  Go
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              {[
                {
                  icon: <FaWhatsapp />,
                  link: '#',
                  color: 'hover:bg-green-500',
                },
                {
                  icon: <FaInstagram />,
                  link: '#',
                  color: 'hover:bg-pink-500',
                },
                {
                  icon: <FaYoutube />,
                  link: '#',
                  color: 'hover:bg-red-500',
                },
                { icon: <FaFacebook />, link: '#', color: 'hover:bg-blue-500' },
                { icon: <FaLinkedin />, link: '#', color: 'hover:bg-blue-600' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} The Coding Journey. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary text-sm transition-colors"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
