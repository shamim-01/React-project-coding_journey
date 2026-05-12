import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="overflow-x-hidden bg-white text-dark">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="services">
          <Services />
        </section>

        <Banner />

        <section id="subscribe">
          <Subscribe />
        </section>

        <Banner2 />
      </main>

      <Footer />
    </>
  );
};

export default App;
