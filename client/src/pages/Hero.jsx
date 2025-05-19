import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="hero dark-hero">
      <div className="hero-content">
        <h2>Hi There!</h2>
        <h1>I'M <span className="highlight">CAS ERAS</span></h1>
        <h3>
          <Typewriter
            words={['Software Developer', 'Web Developer', 'Python Developer', 'AI Enthusiast', 'Automation Builder']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h3>

       <p className="hero-intro">
          I started my journey as a web developer, building websites for small businesses and learning to translate ideas into digital solutions.
          <br /><br />
          Over time, I became fascinated by the power of data — not just how it’s displayed, but how it drives decisions. That’s when I shifted gears into data science, automation, and AI development.
          <br /><br />
          Today, I focus on creating data-driven tools, smart systems, and AI-powered solutions that automate workflows, improve efficiency, and unlock new opportunities.
        </p>

      </div>
    </section>
  );
};

export default Home;
