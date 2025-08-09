import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Project Details</h1>
      <p>Project ID: {id}</p>
    </div>
  );
};

export default ProjectDetails;
