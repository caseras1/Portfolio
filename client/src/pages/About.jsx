import React from 'react';
import profilePic from '../assets/prof_photo.jpeg'; // Make sure this image exists
import { FaPython, FaNodeJs, FaGitAlt, FaReact, FaPhp } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiDjango, SiPostgresql, SiOracle, SiJupyter, SiMysql } from 'react-icons/si';

const skills = [
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaPhp />, name: 'PHP' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiMysql />, name: 'MySQL / SQL' },
  { icon: <SiOracle />, name: 'Oracle APEX / PL-SQL' },
  { icon: <SiJupyter />, name: 'JupyterLab' },
  { icon: <FaGitAlt />, name: 'Git & GitHub' },
  
];


const About = () => (
  <section className="page-section about-section" id="about">
    <div className="about-container">
      <div className="about-image">
        <img src={profilePic} alt="Cas Eras" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I’m <strong>Cas Eras</strong> — a Dutch software developer based in Dubai, currently focused on
          building smart, data-driven tools that solve real problems. I started my career in web development, but quickly
          transitioned into backend technologies and data science.
        </p>
        <p>
          I recently completed a data science course using JupyterLab, where I worked with Python, pandas, visualization,
          and real-world datasets. Since then, my main goal has been to grow in the field of data science — building
          systems that extract insights, automate processes, and drive smart decision-making.
        </p>
        <p>
          I specialize in technologies like Python, SQL, Django, Node.js, and Oracle APEX. I’m passionate about data engineering,
          API development, and using AI in practical applications. I love solving real-world problems with scalable, well-documented tools.
        </p>
        <p>
          Outside of code, I’m into personal growth, fitness, and exploring emerging AI and trading tech. Right now, I’m
          interning at a digital agency in Dubai, where I’m learning fast, contributing to real products, and staying focused
          on building a career in data science.
        </p>
      </div>
    </div>

    <div className="skills-wrapper">
      <h3>Professional <span>Skillset</span></h3>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
