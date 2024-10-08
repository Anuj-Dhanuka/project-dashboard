import React from 'react';
import styled from 'styled-components';

const CommunicationTable = styled.table`
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

const ClientCommunication = () => {
  const [communications] = React.useState([
    { id: 1, client: 'Company A', date: '2024-10-01', message: 'Initial Project Kickoff' },
    { id: 2, client: 'Company B', date: '2024-10-02', message: 'Discussing Project Requirements' },
  ]);

  return (
    <div>
      <h2>Client Communication</h2>
      <CommunicationTable>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Client</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Message</TableHeader>
          </tr>
        </thead>
        <tbody>
          {communications.map((com) => (
            <tr key={com.id}>
              <TableCell>{com.id}</TableCell>
              <TableCell>{com.client}</TableCell>
              <TableCell>{com.date}</TableCell>
              <TableCell>{com.message}</TableCell>
            </tr>
          ))}
        </tbody>
      </CommunicationTable>
    </div>
  );
};

export default ClientCommunication;
