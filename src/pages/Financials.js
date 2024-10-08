import React from 'react';
import styled from 'styled-components';

const FinancialTable = styled.table`
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

const Financials = () => {
  const [financials] = React.useState([
    { id: 1, project: 'Project Alpha', budget: '$1000', spent: '$600' },
    { id: 2, project: 'Project Beta', budget: '$2000', spent: '$300' },
  ]);

  return (
    <div>
      <h2>Financials</h2>
      <FinancialTable>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Project</TableHeader>
            <TableHeader>Budget</TableHeader>
            <TableHeader>Spent</TableHeader>
          </tr>
        </thead>
        <tbody>
          {financials.map((item) => (
            <tr key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.project}</TableCell>
              <TableCell>{item.budget}</TableCell>
              <TableCell>{item.spent}</TableCell>
            </tr>
          ))}
        </tbody>
      </FinancialTable>
    </div>
  );
};

export default Financials;
