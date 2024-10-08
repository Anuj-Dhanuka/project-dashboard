import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  background-color: #0984e3;
  color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const ProjectOverview = () => {
  const [projects] = useState([
    { id: 1, name: 'Project Alpha', status: 'In Progress', client: 'Company A' },
    { id: 2, name: 'Project Beta', status: 'Not Started', client: 'Company B' },
  ]);

  return (
    <div>
      <h2>Project Overview</h2>
      <ProjectTable>
        <thead>
          <tr>
            <TableHeader>Project ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Client</TableHeader>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <TableCell>{project.id}</TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>{project.client}</TableCell>
            </tr>
          ))}
        </tbody>
      </ProjectTable>
    </div>
  );
};

export default ProjectOverview;
