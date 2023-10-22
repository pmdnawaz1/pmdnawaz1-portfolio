'use client';import React, { useState, useEffect } from 'react';
import MeteorCard from './MeteorCard';
import Loading from './Loading';

export default function Projects() {
  const [projects, setProjects] = useState<{ projectName: string; projectDescription: string; }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projectDetails', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'PSN_KEY': `${process.env.PSN_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {isLoading ? (
        <Loading />
      ) : (
        projects.map((project) => (
          <div
            key={project.projectName}
            style={{
              flex: '0 0 auto',
              marginRight: '10px',
              minWidth: '200px',
              maxWidth: '300px',
              minHeight: '200px',
              maxHeight: '400px',
              width: 'calc(100vw - 40px)',
            }}
          >
            <MeteorCard
              projectName={project.projectName}
              projectDescription={project.projectDescription}
            />
          </div>
        ))
      )}
    </div>
  );
}