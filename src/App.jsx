import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
// import BlogSection from './components/Blog';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




export default function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '70px' }}>
        <Hero />
        <AboutMe />
        {/* <BlogSection />  */}
        <Services />
        <ChatWidget />
        <Testimonials />
        <Contact />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

 
