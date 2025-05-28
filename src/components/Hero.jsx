import React from 'react';

export default function Hero() {
  return (
      <section
      id="hero"
      className="text-center  text-white py-5"
      style={{
        
        backgroundImage: "url('/background website image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
      }}
    >
      <h1 className="display-4 fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
  Elisha Massawe – Graphic Designer
</h1>

      <p className="lead fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
        I create stunning designs that make your brand stand out. Whether you need a logo, flyer, or web design, I've got you covered!
        Welcome to my portfolio. I design logos, flyers, profiles, thumbnails and more!
      </p>
      <button className="btn btn-primary" href="#contact"
              style={{ textDecoration: 'none', color: 'white' }}
              onClick={() => window.location.href = '#contact'}>              
            Contact Me</button>
    </section>
  );
}
