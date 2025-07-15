import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-4 bg-dark text-light">
      <div className="container text-center">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-light"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://github.com/ramdixit89"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-light"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ram-dixit-549240223/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-light"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-light"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/8965090033"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-light"
        >
          <FaWhatsapp />
        </a>
        <p className="mt-3">
          &copy; {new Date().getFullYear()} RamD | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
