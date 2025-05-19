import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import CodeStream from '../components/CodeStream';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="page-section projects-section" id="projects">
      <h2>Projects</h2>

      <div className="project-dropdown-wrapper">
        <select
          className="project-dropdown"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="projects-grid fixed-columns">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Right-side animated code stream */}
      <CodeStream />
    </section>
  );
};

export default Projects;
