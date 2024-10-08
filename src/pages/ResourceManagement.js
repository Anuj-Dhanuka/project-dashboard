import React from 'react';
import styled from 'styled-components';

const ResourceTable = styled.table`
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

const ResourceManagement = () => {
  const [resources] = React.useState([
    { id: 1, name: 'Alice', role: 'Developer', project: 'Project Alpha' },
    { id: 2, name: 'Bob', role: 'Designer', project: 'Project Beta' },
  ]);

  return (
    <div>
      <h2>Resource Management</h2>
      <ResourceTable>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Project</TableHeader>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => (
            <tr key={resource.id}>
              <TableCell>{resource.id}</TableCell>
              <TableCell>{resource.name}</TableCell>
              <TableCell>{resource.role}</TableCell>
              <TableCell>{resource.project}</TableCell>
            </tr>
          ))}
        </tbody>
      </ResourceTable>
    </div>
  );
};

export default ResourceManagement;
