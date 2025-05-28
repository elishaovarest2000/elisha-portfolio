import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import ContactForm from './components/contactForm';


export default function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '70px' }}>
        <Hero />
        <AboutMe />
        <Services />
        <Testimonials />
        <Contact />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

 
