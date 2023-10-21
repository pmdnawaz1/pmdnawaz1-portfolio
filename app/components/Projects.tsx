import React from 'react';
import MeteorCard from './MeteorCard';
import projectsData from '../../data/projects.json';

export default function Projects() {
  return (
    <div>
      {projectsData.map((project) => (
        <div key={project.projectName}>
          <MeteorCard
            projectName={project.projectName}
            projectDescription={project.projectDescription}
          />
        </div>
      ))}
    </div>
  );
}