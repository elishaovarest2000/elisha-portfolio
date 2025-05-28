import React from 'react';

export default function AboutMe() {
  return (
<section id="aboutMe" className="py-5 bg-light text-dark">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0">
        <img src="/elisha.png" alt="Elisha Massawe" className="img-fluid rounded-3 shadow" />
      </div>
      <div className="col-md-6">
        <h2 className="fw-bold mb-3">About Me</h2>
        <p>
          I'm Elisha Massawe, a Tanzanian graphic designer and full-stack developer. I specialize in creating impactful visual designs, clean code, and effective branding for businesses and individuals.
        </p>
        <p>
          My tools of choice include Photoshop, Figma, React, Laravel, and Canva. Whether it's a logo, website, or branding kit, I’m committed to quality and creativity.
        </p>
        <p className="fw-semibold">Tools & Skills: Photoshop, Figma, React, Laravel, Canva, Git</p>
        <a href="/Elisha Massawe CV.pdf" download className="btn btn-primary mt-2">
          Download CV
        </a>
      </div>
    </div>
  </div>
</section>
    );
    }   
