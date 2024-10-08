import React, { useState } from 'react';
import styled from 'styled-components';

const TaskTable = styled.table`
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

const TaskManagement = () => {
  const [tasks] = useState([
    { id: 1, title: 'Design UI', status: 'Completed', project: 'Project Alpha' },
    { id: 2, title: 'Implement API', status: 'In Progress', project: 'Project Beta' },
  ]);

  return (
    <div>
      <h2>Task Management</h2>
      <TaskTable>
        <thead>
          <tr>
            <TableHeader>Task ID</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Project</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <TableCell>{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{task.project}</TableCell>
            </tr>
          ))}
        </tbody>
      </TaskTable>
    </div>
  );
};

export default TaskManagement;
