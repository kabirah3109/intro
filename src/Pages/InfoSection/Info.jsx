
import React from 'react';

const Info = () => {
  return (
    <section className="info-section py-5 bg-light">
      <div className="container">
        <h1 className="info-heading text-center mb-5">Built with Modern Web Tech</h1>

        <div className="row g-4">
       
          <div className="col-md-6 col-lg-4">
            <div className="info-card p-4 bg-white shadow-sm rounded h-100">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-react text-primary fs-1"></i>
              </div>
              <h3 className="h5">React</h3>
              <p className="text-muted">
                Built with React hooks and functional components for a fast, interactive user experience.
              </p>
            </div>
          </div>

    
          <div className="col-md-6 col-lg-4">
            <div className="info-card p-4 bg-white shadow-sm rounded h-100">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-bootstrap text-success fs-1"></i>
              </div>
              <h3 className="h5">Bootstrap 5</h3>
              <p className="text-muted">
                Styled with Bootstrap for responsive, mobile-first design that looks great on any device.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="info-card p-4 bg-white shadow-sm rounded h-100">
              <div className="icon-wrapper mb-3">
                <i className="bi bi-code-slash text-info fs-1"></i>
              </div>
              <h3 className="h5">Clean & Custom</h3>
              <p className="text-muted">
              Fully customizable and easy to extend.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="/contact" className="btn btn-outline-primary text-black px-4 py-2">
            Have Questions?
              </a>
            <div className="text-center mt-3">
  <a 
    href="https://github.com/kabirah3109/intro" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn btn-dark px-4 py-2"
  >
    <i className="bi bi-github me-2"></i> View Source Code
  </a>
</div>
        
        </div>
      </div>
    </section>
  );
};

export default Info;