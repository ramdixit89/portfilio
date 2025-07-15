import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaUser, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../style.css';
function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Contact Me</h2>
        <div className="row">
          {/* Left Info Column */}
          <div className="col-md-5 mb-4">
            <h4 className="mb-3">Get in Touch</h4>
            <p>If you're interested in working together, fill out the form or reach me directly:</p>

            <div className="mb-3 d-flex align-items-center">
              <FaUser className="me-3 text-primary fs-5" />
              <span className="fw-semibold">Ram Dixit</span>
            </div>

            <div className="mb-3 d-flex align-items-center">
              <FaMapMarkerAlt className="me-3 text-danger fs-5" />
              <span className="fw-semibold">Indore, MP, India</span>
            </div>

            <div className="mb-3 d-flex align-items-center">
              <FaEnvelope className="me-3 text-success fs-5" />
              <span className="fw-semibold">ramdixit8965@gmail.com</span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="col-md-7">
            <h4 className="mb-3">Message Me</h4>
            <Form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="8a64ae64-4a1c-408e-976f-ae5fc5bd080c" />

              <div className="row">
                <div className="col-md-6 mb-3">
                  <Form.Control
                    type="text"
                    name="first_name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <Button type="submit" variant="primary" className="px-4">Send Message</Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
