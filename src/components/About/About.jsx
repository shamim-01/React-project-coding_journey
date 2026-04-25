import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import Blob from '../../assets/blob.svg';
import myImage from '../../assets/pngwing.com.png';
import myImage1 from '../../assets/pngwing.com (3).png';

export const FadeUp = delay => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: 'easeInOut',
      },
    },
  };
};

export const FadeRight = delay => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: 'easeInOut',
      },
    },
  };
};

export const FadeLeft = delay => {
  return {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: 'easeInOut',
      },
    },
  };
};

const About = () => {
  return (
    <section className="bg-light overflow-hidden relative pt-20">
      {/* Hero Section */}
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Left Side - About Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[500px]">
            <motion.div
              variants={FadeUp(0.2)}
              initial="initial"
              animate="animate"
              className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-semibold text-sm"
            >
              ✨ About Us
            </motion.div>
            <motion.h1
              variants={FadeUp(0.4)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Welcome to{' '}
              <span className="text-secondary">The Coding Journey</span>
            </motion.h1>
            <motion.p
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-gray-600 leading-relaxed"
            >
              We are dedicated to helping developers learn and grow their coding
              skills through high-quality tutorials, resources, and community
              support.
            </motion.p>
            <motion.p
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="text-gray-600 leading-relaxed"
            >
              Our mission is to make programming education accessible to
              everyone, regardless of their background or experience level. We
              believe that anyone can learn to code with the right guidance and
              resources.
            </motion.p>
            <motion.div
              variants={FadeUp(1.0)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Join Our Community
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Side - About Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
            src={myImage}
            alt="About us"
            className="w-[400px] xl:w-[500px] relative z-10 drop-shadow rounded-2xl"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="container py-20 relative z-10">
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Achievements in <span className="text-secondary">Numbers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our journey and the impact we've made in the coding
            community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-3">
              50+
            </h3>
            <p className="text-gray-600 text-lg">Tutorials Published</p>
          </motion.div>

          <motion.div
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-3">
              10K+
            </h3>
            <p className="text-gray-600 text-lg">Happy Students</p>
          </motion.div>

          <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-3">
              5+
            </h3>
            <p className="text-gray-600 text-lg">Years of Excellence</p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 py-20 relative z-10">
        <motion.div
          variants={FadeLeft(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={myImage1}
            alt="Our mission"
            className="w-[400px] xl:w-[450px] rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          variants={FadeRight(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our <span className="text-secondary">Mission</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At The Coding Journey, we're committed to democratizing coding
            education. We believe that quality programming education should be
            accessible to everyone, regardless of their financial situation or
            geographical location.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Through our carefully crafted tutorials, hands-on projects, and
            supportive community, we help aspiring developers transform their
            careers and build amazing things with code.
          </p>
          <div>
            <button className="primary-btn flex items-center gap-2 group">
              Learn More
              <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="container py-20 relative z-10">
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Core <span className="text-secondary">Values</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at The Coding Journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-all duration-300">
              <span className="text-4xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every tutorial, resource, and
              interaction with our community
            </p>
          </motion.div>

          <motion.div
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-all duration-300">
              <span className="text-4xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p className="text-gray-600">
              Building a supportive environment where developers can learn and
              grow together
            </p>
          </motion.div>

          <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-all duration-300">
              <span className="text-4xl">💡</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-600">
              Staying ahead with modern technologies and innovative teaching
              methods
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-20 relative z-10">
        <motion.div
          variants={FadeUp(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your{' '}
            <span className="text-secondary">Coding Journey</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of students already learning with us and transform
            your coding career
          </p>
          <button className="primary-btn flex items-center gap-2 group mx-auto">
            Get Started Today
            <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Background Blob */}
      <motion.img
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
        src={Blob}
        alt=""
        className="absolute -bottom-32 left-0 w-[800px] md:w-[1500px] z-0 opacity-50"
      />
    </section>
  );
};

export default About;
