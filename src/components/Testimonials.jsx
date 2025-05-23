import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5" style={{ fontWeight: '700' }}>What Clients Say</h2>
        <div className="row g-4 justify-content-center">

          <div className="col-md-5">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <p className="card-text text-secondary fst-italic">
                  “Elisha's design brought our brand to life. Highly recommended!”
                </p>
                <h6 className="card-subtitle text-muted mt-3">– A Happy Client</h6>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <p className="card-text text-secondary fst-italic">
                  “Professional, fast, and creative. Great work!”
                </p>
                <h6 className="card-subtitle text-muted mt-3">– Business Owner</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
