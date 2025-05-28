import React from 'react';

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',  // Logo left, nav right
        padding: '10px 20px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 1030,
      }}
    >
      {/* Logo on the left */}
      <img
        src="/elisha logo.png"
        alt="Elisha Logo"
        style={{ height: '70px', width: 'auto' }}
      />

      {/* Navigation links on the right */}
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '20px',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="#hero"
              style={{ textDecoration: 'none', color: '#333' }}
              onClick={() => window.location.href = '#hero'}
            >
              Home
            </a>
          </li>
         
          <li>
            <a
              href="#aboutMe"
              style={{ textDecoration: 'none', color: '#333' }}
              onClick={() => window.location.href = '#aboutMe'}
            >
              About Me
            </a>
          </li>
            <li>
            <a
              href="#services"
              style={{ textDecoration: 'none', color: '#333' }}
              onClick={() => window.location.href = '#services'}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              style={{ textDecoration: 'none', color: '#333' }}
              onClick={() => window.location.href = '#testimonials'}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ textDecoration: 'none', color: '#333' }}
              onClick={() => window.location.href = '#contact'}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
