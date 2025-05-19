import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <section className="page-section project-details">
      <h2>{project.title}</h2>
      <p className="project-category">{project.category}</p>
      <p>{project.description}</p>
      {project.image && <img src={project.image} alt={project.title} className="project-image" />}
    </section>
  );
};

export default ProjectDetails;
