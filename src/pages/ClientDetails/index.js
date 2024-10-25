import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Sample clients data
import { clientData } from "../../utils/CommonUtils/clientsdata";

// Styled-components for styling the Client Details page
const Container = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  max-width: 1200px; /* Increased width for larger display */
  margin: 0 auto;
`;

const Header = styled.h2`
  color: #2d3436;
  margin: 0;
  font-size: 24px;
  margin-bottom: 24px;
`;

const ClientCard = styled.div`
  background-color: #6c5ce7; /* Changed background color */
  color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const CardHeader = styled.h1`
  margin: 0;
  font-size: 28px;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const CardItem = styled.span`
  margin-right: 20px; /* Add some spacing between items, can be adjusted */
`;

const SectionHeader = styled.h2`
  color: #2d3436;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const SectionContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const BackButton = styled.button`
  background-color: #2d3436;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00b894;
  }
`;

const ProjectTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const ContactsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const ClientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const client = clientData.find((client) => client.id === parseInt(id));

  if (!client) {
    return <p>Client not found!</p>;
  }

  // Dummy data for projects, proposals, invoices, and contacts
  const projects = [
    { name: "Website Redesign", status: "In Progress", startDate: "2024-01-10", endDate: "2024-06-15" },
    { name: "Marketing Campaign", status: "Completed", startDate: "2023-08-01", endDate: "2023-12-01" },
  ];

  const proposals = [
    { title: "SEO Strategy", status: "Accepted", submittedDate: "2024-02-20" },
    { title: "Social Media Marketing", status: "Pending", submittedDate: "2024-03-10" },
  ];

  const invoices = [
    { number: "INV-001", amount: "$1,200", dueDate: "2024-04-15", status: "pending" },
    { number: "INV-002", amount: "$800", dueDate: "2024-05-01", status: "pending" },
  ];

  const contacts = [
    { name: "John Doe", email: "john@example.com", phone: "+1 234 567 8901" },
    { name: "Jane Smith", email: "jane@example.com", phone: "+1 234 567 8902" },
  ];

  return (
    <Container>
      <Header>Client Details</Header>
      <ClientCard>
        <CardHeader>{client.name}</CardHeader>
        <CardRow>
          <CardItem>Email:</CardItem>
          <CardItem>{client.email}</CardItem>
        </CardRow>
        <CardRow>
          <CardItem>Phone:</CardItem>
          <CardItem>{client.phone}</CardItem>
        </CardRow>
        <CardRow>
          <CardItem>Company:</CardItem>
          <CardItem>{client.company}</CardItem>
        </CardRow>
        <CardRow>
          <CardItem>Client Tier:</CardItem>
          <CardItem>{client.clientTier}</CardItem>
        </CardRow>
        <CardRow>
          <CardItem>Creation Date:</CardItem>
          <CardItem>{client.creationDate}</CardItem>
        </CardRow>
      </ClientCard>

      <SectionContainer>
        <SectionHeader>Projects</SectionHeader>
        <ProjectTable>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <tr key={index}>
                  <td>{project.name}</td>
                  <td>{project.status}</td>
                  <td>{project.startDate}</td>
                  <td>{project.endDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No projects found.</td>
              </tr>
            )}
          </tbody>
        </ProjectTable>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>Proposals</SectionHeader>
        <ProjectTable>
          <thead>
            <tr>
              <th>Proposal Title</th>
              <th>Status</th>
              <th>Submitted Date</th>
            </tr>
          </thead>
          <tbody>
            {proposals.length > 0 ? (
              proposals.map((proposal, index) => (
                <tr key={index}>
                  <td>{proposal.title}</td>
                  <td>{proposal.status}</td>
                  <td>{proposal.submittedDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No proposals found.</td>
              </tr>
            )}
          </tbody>
        </ProjectTable>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>Invoices</SectionHeader>
        <ProjectTable>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.length > 0 ? (
              invoices.map((invoice, index) => (
                <tr key={index}>
                  <td>{invoice.number}</td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No invoices found.</td>
              </tr>
            )}
          </tbody>
        </ProjectTable>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>Contacts</SectionHeader>
        <ContactsTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No contacts found.</td>
              </tr>
            )}
          </tbody>
        </ContactsTable>
      </SectionContainer>

      <BackButton onClick={() => navigate(-1)}>Back to Client Management</BackButton>
    </Container>
  );
};

export default ClientDetails;
