import React from "react";

const handleSubmit = (e) => {
  e.preventDefault();
  alert("Form submitted! (Not connected to backend yet)");
};

// Then in form:
<form className="contact-form ..." onSubmit={handleSubmit}></form>;

const Contact = () => {
  return (
    <section id="contact" className="contact py-5 bg-light">
      <div className="container">
        <h2 className="contact-heading text-center mb-4">Get In Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form className="contact-form p-4 bg-white shadow-sm rounded">
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control form-input"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-input"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn btn btn-primary w-100 py-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
