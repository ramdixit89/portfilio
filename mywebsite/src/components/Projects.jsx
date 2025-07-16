import React, { useState } from 'react';
import { Card, Button, Row, Col, Pagination, Container } from 'react-bootstrap';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

import rdcodersImg from '../assets/img/RDCoders.PNG';
import grandBazar from '../assets/img/grandbazar.PNG';
import E_commImg from '../assets/img/E-comm.PNG';
import reduxImg from '../assets/img/project-2-Redux.PNG';
import e_comm from '../assets/img/project-3-shoppingCart.PNG';
import insight from '../assets/img/inshightfull.PNG';
import saree from '../assets/img/saree.PNG';

const Projects = () => {
  const projects = [
    { title: 'RDCoders', img: rdcodersImg, url: 'https://e-learning-platform-1-gscn.onrender.com/' },
    { title: 'Grand Bazaar', img: grandBazar, url: 'https://grand-bazar-frontend.onrender.com/' },
    { title: 'E-commerce', img: E_commImg, url: 'https://reactjs-e-commerce.onrender.com/' },
    { title: 'Insightfull Architect', img: insight, url: 'https://insightfularchitect.netlify.app/' },
    { title: 'Saree', img: saree, url: 'https://saree-ecom.netlify.app/' },
    { title: 'Redux Store', img: reduxImg, url: 'https://rd-store-app.netlify.app/' },
    { title: 'Shopping Cart', img: e_comm, url: 'https://shopping-cart-app-rdcoders.netlify.app/' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: document.getElementById('projects').offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <>
      {/* Wave Top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 120">
          <path
            fill="#f0f4f8"
            d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,58.7C672,43,768,53,864,58.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
          ></path>
        </svg>
      </div>

      <section id="projects" className="py-5" style={{ backgroundColor: '#f0f4f8' }}>
        <Container>
          <h2 className="text-center mb-5 fw-bold text-dark"> My Projects</h2>
          <Row>
            {currentProjects.map((project, index) => (
              <Col md={4} sm={6} xs={12} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="project-card shadow border-0 h-100">
                    <Card.Img
                      variant="top"
                      src={project.img}
                      alt={project.title}
                      className="project-img rounded-top"
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="text-center fw-semibold">{project.title}</Card.Title>
                      <Button
                        href={project.url}
                        target="_blank"
                        variant="dark"
                        className="mt-3 w-100 d-flex justify-content-center align-items-center gap-2 rounded-pill"
                      >
                        View Project <FiExternalLink />
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {totalPages > 1 && (
            <Pagination className="justify-content-center mt-4">
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages)].map((_, i) => (
                <Pagination.Item
                  key={i}
                  active={i + 1 === currentPage}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          )}
        </Container>
      </section>

      {/* Wave Bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 120">
          <path
            fill="#f0f4f8"
            d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,53.3C672,53,768,43,864,32C960,21,1056,11,1152,21.3C1248,32,1344,64,1392,74.7L1440,85V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Projects;
