import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrashAlt, FaFolderOpen } from "react-icons/fa"; // Icons for edit and delete actions

const ClientListContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  padding: 10px;
  background-color: #00b894;
  color: white;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

const TextCenterTh = styled.th`
  padding: 10px;
  background-color: #00b894;
  color: white;
  text-align: center;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ActionContainer = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.edit ? "#0984e3" : "#d63031")};
  border: none;
  color: white;
  padding: 10px 16px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => (props.edit ? "#1e90ff" : "#e74c3c")}; /* Softer hover color */
    transform: translateY(-2px); /* Slight lift on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Larger shadow on hover */
  }

  &:active {
    transform: translateY(0); /* Reset lift when clicked */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Reset shadow */
  }
`;

const IconWrapper = styled.div`
  margin-right: 8px;
  font-size: 18px; /* Increase icon size for better visibility */
  display: flex;
  align-items: center;
`;


const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const EmptyIcon = styled(FaFolderOpen)`
  font-size: 60px;
  color: #b2bec3;
  margin-bottom: 20px;
`;

const EmptyMessage = styled.p`
  font-size: 20px;
  color: #636e72;
  margin: 0;
`;

const EmptySubText = styled.p`
  font-size: 14px;
  color: #b2bec3;
  margin-top: 10px;
`;

const ClientList = ({ clients, onEdit, onDelete }) => {
  return (
    <ClientListContainer>
      {!clients || clients.length === 0 ? (
        <EmptyStateContainer>
          <EmptyIcon />
          <EmptyMessage>No clients available</EmptyMessage>
          <EmptySubText>
            Once you add clients, they will appear here.
          </EmptySubText>
        </EmptyStateContainer>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Client Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Company</Th>
              <TextCenterTh>Actions</TextCenterTh>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <Td>{client.name}</Td>
                <Td>{client.email}</Td>
                <Td>{client.phone}</Td>
                <Td>{client.company}</Td>
                <ActionContainer>
                  <ActionButton edit onClick={() => onEdit(client)}>
                    <IconWrapper>
                      <FaEdit />
                    </IconWrapper>{" "}
                    Edit
                  </ActionButton>
                  <ActionButton onClick={() => onDelete(client.id)}>
                    <IconWrapper>
                      <FaTrashAlt />
                    </IconWrapper>{" "}
                    Delete
                  </ActionButton>
                </ActionContainer>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </ClientListContainer>
  );
};

export default ClientList;
