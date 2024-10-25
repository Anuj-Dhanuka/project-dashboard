// src/pages/ProposalDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const ProposalContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProposalStatus = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  color: #fff;
  background-color: ${(props) => props.status === 'pending' ? '#f39c12' : props.status === 'approved' ? '#2ecc71' : '#e74c3c'};
`;

const ProposalDetails = () => {
  const { id } = useParams();
  const proposal = {
    id,
    name: 'Website Redesign',
    client: 'ABC Corp',
    description: 'Proposal to redesign the ABC Corp website with a modern, responsive design.',
    status: 'pending',
  };

  return (
    <ProposalContainer>
      <h1>Proposal Details</h1>
      <p><strong>Proposal Name:</strong> {proposal.name}</p>
      <p><strong>Client:</strong> {proposal.client}</p>
      <p><strong>Description:</strong> {proposal.description}</p>
      <p><strong>Status:</strong> <ProposalStatus status={proposal.status}>{proposal.status}</ProposalStatus></p>
      <Link to={`/proposal/${proposal.id}/edit`}>Edit Proposal</Link>
    </ProposalContainer>
  );
};

export default ProposalDetails;
