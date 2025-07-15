import React from 'react';
import myImage from '../assets/img/myImage.jpg';
import resume from '../assets/resume/Ram_Dixit_Resume.pdf';
import { ReactTyped } from 'react-typed';
import '../style.css'; // Include custom styles if needed

function About() {
  return (
    <section id="about" className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src={myImage}
              alt="Ram Dixit"
              className="img-fluid rounded-circle shadow border border-3 border-primary"
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-7" data-aos="fade-left">
            <h4 className="mb-3 fw-semibold">
              I'm <span className="text-primary fw-bold">Ram Dixit</span> and I'm a{' '}
              <span className="text-success">
                <ReactTyped
                  strings={[
                    'FullStack Developer',
                    'MERN Stack Engineer',
                    'React & Node.js Expert',
                  ]}
                  typeSpeed={80}
                  backSpeed={40}
                  loop
                />
              </span>
            </h4>
            <p className="text-muted">
              I’m a passionate full-stack developer with hands-on experience in building modern,
              fast, and scalable web applications using the MERN stack. I specialize in creating
              clean UIs, REST APIs, and responsive websites. Let's build something amazing together!
            </p>
            <a
              href={resume}
              className="btn btn-primary mt-3"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
