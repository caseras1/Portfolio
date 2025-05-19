import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p className="project-category">{project.category}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
