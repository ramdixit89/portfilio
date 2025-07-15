import React from 'react';
import { ReactTyped } from 'react-typed';
import '../style.css'; // Optional for animations or global overrides

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center text-center vh-100 bg-dark text-white"
      style={{
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        padding: '0 20px',
      }}
    >
      <div className="container" data-aos="zoom-in">
        <h6
          className="text-uppercase fw-light mb-3 text-white-50"
          style={{ letterSpacing: '2px', fontSize: '1rem' }}
        >
          Hello, my name is
        </h6>

        <h1 className="display-3 fw-bold mb-3" style={{ fontSize: '3.5rem' }}>
          Ram Dixit
        </h1>

        <h3 className="fw-normal fs-3 mb-4">
          And I'm a{' '}
          <span className="text-warning">
            <ReactTyped
              strings={['FullStack Developer', 'MERN Stack Engineer', 'React & Node.js Expert']}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </span>
        </h3>

        <a
          href="#contact"
          className="btn btn-warning px-5 py-3 fw-semibold rounded-pill shadow"
        >
          Hire me
        </a>
      </div>
    </section>
  );
}

export default Home;
