import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-5">
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontWeight: '700' }}>Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-secondary mb-2"><strong>Email:</strong> elishaellyclif@example.com</p>
                <p className="text-secondary mb-2"><strong>Phone:</strong> +255 696 218 943</p>
                <p className="text-secondary mb-2"><strong>Location:</strong> Dar es Salaam, Tanzania</p>
                <p className="text-muted mt-3">Let’s work together! I’m always excited to collaborate on fresh ideas and creative projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
