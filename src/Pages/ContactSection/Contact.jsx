import React from 'react'

const Contact = () => {
    return (
                <section id="contact" className="contact">
                    <h2 className="contact-heading">Get In Touch</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea id="message" className="form-textarea" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </section>
            );

            
}


export default Contact


