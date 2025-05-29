import React from 'react';


export default function Services() {
  return (
    <section id="services" className="container my-5">
      <h2 className="text-center mb-4" style={{ fontWeight: '700', color: '#343a40' }}>
        Services
      </h2>

      <div className="row g-4">
        {/* Service 1 */}
        <div className="col-md-4">
          <div
            className="card h-100 shadow-sm"
            style={{ borderRadius: '15px', border: 'none', backgroundColor: '#f8f9fa' }}
          >
            <img
              src="/images/Agriculture Farming Business Logo.png"
              className="card-img-top"
              alt="Logo Design"
              style={{ borderRadius: '15px 15px 0 0', height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title" style={{ fontWeight: '600' }}>
                Logo Design
              </h5>
              <p className="card-text text-secondary">
                Unique and creative logo designs tailored for your brand identity.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4">
          <div
            className="card h-100 shadow-sm"
            style={{ borderRadius: '15px', border: 'none', backgroundColor: '#f8f9fa' }}
          >
            <img
              src="/images/hiring poster.png"
              className="card-img-top"
              alt="Flyers & Posters"
              style={{ borderRadius: '15px 15px 0 0', height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title" style={{ fontWeight: '600' }}>
                Flyers & Posters
              </h5>
              <p className="card-text text-secondary">
                High-quality promotional designs for both digital and print use.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4">
          <div
            className="card h-100 shadow-sm"
            style={{ borderRadius: '15px', border: 'none', backgroundColor: '#f8f9fa' }}
          >
            <img
              src="/images/thumbnail.png"
              className="card-img-top"
              alt="Web Design"
              style={{ borderRadius: '15px 15px 0 0', height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title" style={{ fontWeight: '600' }}>
                Website Design
              </h5>
              <p className="card-text text-secondary">
                Stunning website designs that provide a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
