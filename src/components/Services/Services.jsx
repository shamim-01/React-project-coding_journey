import React from 'react';
import { RiComputerLine } from 'react-icons/ri';
import { CiMobile3 } from 'react-icons/ci';
import { TbWorldWww } from 'react-icons/tb';
import { IoMdHappy } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi';
import { IoPulseOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';

const ServicesData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern responsive websites & web applications',
    link: '#',
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'iOS & Android native and cross-platform apps',
    link: '#',
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: 'Software Development',
    description: 'Custom software solutions for your business',
    link: '#',
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: 'Satisfied Clients',
    description: '100+ happy clients worldwide',
    link: '#',
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: 'SEO Optimization',
    description: 'Boost your website ranking on search engines',
    link: '#',
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: '24/7 Support',
    description: 'Round the clock technical assistance',
    link: '#',
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = delay => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: 'easeInOut',
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-light overflow-hidden relative py-16">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4"
          >
            What We Offer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
          >
            Services We <span className="text-secondary">Provide</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We offer comprehensive solutions to help your business grow in the
            digital world
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map(service => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-secondary/20"
            >
              {/* Icon */}
              <div className="text-5xl text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href={service.link}
                className="inline-flex items-center gap-1 text-secondary font-semibold group-hover:gap-2 transition-all duration-300"
              >
                Learn More
                <IoIosArrowRoundForward className="text-xl" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-3xl p-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-6">
            Let's discuss your project requirements and get a free quote
          </p>
          <button className="primary-btn inline-flex items-center gap-2 group">
            Contact Us Today
            <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
