import React from 'react';
import styled from 'styled-components';

const MilestoneTable = styled.table`
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

const Milestones = () => {
  const [milestones] = React.useState([
    { id: 1, project: 'Project Alpha', milestone: 'Phase 1 Complete', dueDate: '2024-10-15' },
    { id: 2, project: 'Project Beta', milestone: 'Initial Design Review', dueDate: '2024-10-20' },
  ]);

  return (
    <div>
      <h2>Milestones</h2>
      <MilestoneTable>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Project</TableHeader>
            <TableHeader>Milestone</TableHeader>
            <TableHeader>Due Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {milestones.map((milestone) => (
            <tr key={milestone.id}>
              <TableCell>{milestone.id}</TableCell>
              <TableCell>{milestone.project}</TableCell>
              <TableCell>{milestone.milestone}</TableCell>
              <TableCell>{milestone.dueDate}</TableCell>
            </tr>
          ))}
        </tbody>
      </MilestoneTable>
    </div>
  );
};

export default Milestones;
