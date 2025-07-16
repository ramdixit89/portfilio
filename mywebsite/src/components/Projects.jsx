import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Pagination } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style.css';
import rdcodersImg from '../assets/img/RDCoders.PNG';
import grandBazar from '../assets/img/grandbazar.PNG';
import E_commImg from '../assets/img/E-comm.PNG';
import reduxImg from '../assets/img/project-2-Redux.PNG';
import e_comm from '../assets/img/project-3-shoppingCart.PNG';
import insight from '../assets/img/inshightfull.PNG';
import saree from '../assets/img/saree.PNG';
function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: 'RDCoders',
      img: rdcodersImg,
      url: 'https://e-learning-platform-1-gscn.onrender.com/',
    },
    {
      title: 'Grand Bazaar',
      img: grandBazar,
      url: 'https://grand-bazar-frontend.onrender.com/',
    },
    {
      title: 'E-commerce',
      img: E_commImg,
      url: 'https://reactjs-e-commerce.onrender.com/',
    },
    {
       title: 'Insightfull Architect',
       img: insight,
       url: 'https://insightfularchitect.netlify.app/'
    },
    {
        title: 'Saree',
        img: saree,
        url: 'https://saree-ecom.netlify.app/'
    },
    {
      title: 'Redux Store',
      img: reduxImg,
      url: 'https://rd-store-app.netlify.app/',
    },
    {
      title: 'Shopping Cart',
      img: e_comm,
      url: 'https://shopping-cart-app-rdcoders.netlify.app/',
    },
    // Add more projects here if needed
  ];

  const projectsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: document.getElementById('projects').offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-5 text-center" data-aos="fade-down">My Projects</h2>
        <Row>
          {currentProjects.map((project, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 shadow-sm border-0 project-card">
                <Card.Img
                  variant="top"
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                />
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Button
                    href={project.url}
                    target="_blank"
                    variant="primary"
                    className="mt-auto"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
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
      </div>
    </section>
  );
}

export default Projects;
