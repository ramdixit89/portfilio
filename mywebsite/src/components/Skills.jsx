import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaGit
} from 'react-icons/fa';
import {
  SiPostman, SiExpress, SiJsonwebtokens, SiMysql
} from 'react-icons/si';
import { BsDatabase } from 'react-icons/bs';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: 'HTML', percent: 90, icon: <FaHtml5 className="text-html" /> },
    { name: 'CSS', percent: 70, icon: <FaCss3Alt className="text-css" /> },
    { name: 'JavaScript', percent: 80, icon: <FaJs className="text-js" /> },
    { name: 'Bootstrap', percent: 85, icon: <FaBootstrap className="text-bootstrap" /> },
    { name: 'React.js', percent: 75, icon: <FaReact className="text-react" /> },
    { name: 'Node.js', percent: 75, icon: <FaNodeJs className="text-node" /> },
    { name: 'REST APIs', percent: 80, icon: <BsDatabase className="text-db" /> },
    { name: 'Express.js', percent: 70, icon: <SiExpress className="text-express" /> },
    { name: 'Postman', percent: 80, icon: <SiPostman className="text-postman" /> },
    { name: 'JWT Auth', percent: 70, icon: <SiJsonwebtokens className="text-jwt" /> },
    { name: 'Git', percent: 75, icon: <FaGit className="text-git" /> },
    { name: 'MySQL', percent: 75, icon: <SiMysql className="text-mysql" /> },
  ];

  return (
    <section id="skills" className="py-5 text-white" style={{ background: '#0f172a' }}>
      <div className="container">
        <h2 className="mb-5 text-center" data-aos="fade-down">My Skills</h2>
        <div className="row g-4">
          {skills.map((skill, i) => (
            <div
              className="col-6 col-sm-4 col-md-3"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="skill-card card text-center h-100 border-0 shadow-sm p-3 rounded">
                <div className="fs-1 mb-2 icon-glow">{skill.icon}</div>
                <h6 className="mb-1">{skill.name}</h6>
                <small className="text-muted">{skill.percent}%</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
