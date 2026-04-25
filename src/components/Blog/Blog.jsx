
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import Blob from '../../assets/blob.svg';
import ReactImg from '../../assets/react.jpg';
import javascriptImg from '../../assets/javascript.jpg';
import cssImg from '../../assets/css.jpg';
import responsiveImg from '../../assets/responsive.jpg';
import nodejsImg from '../../assets/nodejs.jpg';
import gitImg from '../../assets/git.jpg';

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

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to build your first component.',
    date: 'April 20, 2026',
    category: 'React',
    image: ReactImg,
  },
  {
    id: 2,
    title: 'JavaScript ES6+ Features',
    excerpt:
      'Explore the modern JavaScript features that will make your code better.',
    date: 'April 15, 2026',
    category: 'JavaScript',
    image: javascriptImg,
  },
  {
    id: 3,
    title: 'Tailwind CSS Best Practices',
    excerpt: 'Tips and tricks for writing efficient Tailwind CSS code.',
    date: 'April 10, 2026',
    category: 'CSS',
    image: cssImg,
  },
  {
    id: 4,
    title: 'Building Responsive Websites',
    excerpt: 'How to create websites that look great on all devices.',
    date: 'April 5, 2026',
    category: 'Responsive Design',
    image: responsiveImg,
  },
  {
    id: 5,
    title: 'Introduction to Node.js',
    excerpt: 'Get started with server-side JavaScript using Node.js.',
    date: 'March 28, 2026',
    category: 'Node.js',
    image: nodejsImg,
  },
  {
    id: 6,
    title: 'Understanding Git Basics',
    excerpt: 'Learn version control fundamentals with Git.',
    date: 'March 20, 2026',
    category: 'Git',
    image: gitImg,
  },
];

const Blog = () => {
  return (
    <section className="bg-light overflow-hidden relative pt-20">
      {/* Hero Section - Only Text */}
      <div className="container min-h-[400px] flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto relative z-20">
          <motion.div
            variants={FadeUp(0.2)}
            initial="initial"
            animate="animate"
            className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-6"
          >
            📝 Our Blog
          </motion.div>
          <motion.h1
            variants={FadeUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-3xl lg:text-5xl font-bold !leading-snug mb-6"
          >
            Latest <span className="text-secondary">Articles & Tutorials</span>
          </motion.h1>
          <motion.p
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto"
          >
            Stay updated with the latest tutorials, tips, and insights from our
            team of expert developers. Explore real-world examples, best
            practices, and modern development techniques to stay ahead in your
            journey.
          </motion.p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Blog Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-secondary bg-secondary/10 rounded-full mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-secondary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">📅 {post.date}</span>
                  <button className="text-secondary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Read More
                    <IoIosArrowRoundForward className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Blob */}
      <motion.img
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
        src={Blob}
        alt=""
        className="absolute -bottom-32 left-0 w-[800px] md:w-[1500px] z-0 opacity-30"
      />
    </section>
  );
};

export default Blog;
