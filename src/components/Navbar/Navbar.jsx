import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { motion } from 'framer-motion';

const NavbarMenu = [
  { id: 1, title: 'Home', link: '#home' },
  { id: 2, title: 'About', link: '#about' },
  { id: 3, title: 'Blog', link: '#blog' },
  { id: 4, title: 'Services', link: '#services' },
  { id: 5, title: 'Contact Us', link: '#subscribe' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >

        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl">
            The Coding Journey
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map(menu => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          <IoMdMenu
            className="text-4xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NavbarMenu.map(menu => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-secondary"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
