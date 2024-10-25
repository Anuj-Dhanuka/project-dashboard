import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa"; // Import the cross icon
import { useNavigate } from "react-router-dom";

const ClientSectionContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Header = styled.h2`
  color: #2d3436;
  margin: 0;
  font-size: 24px;
`;

const SearchAddWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  position: relative;
`;

const SearchBar = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: #00b894;
    box-shadow: 0 0 5px rgba(0, 184, 148, 0.5);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  font-size: 14px; /* Adjust the size of the icon */
  display: flex;
  align-items: center;

  &:hover {
    color: #00b894; /* Change color on hover */
  }
`;

const AddClientButton = styled.button`
  background-color: #00b894;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #019c75;
  }
`;

const ClientTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #00b894;
  color: white;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.delete ? "#ff7675" : "#00b894")};
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;

  &:hover {
    opacity: 0.9;
  }
`;

const AddClientForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  color: #2d3436;
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;



const ClientManagement = () => {

  const navigate = useNavigate()

  const [clients, setClients] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", company: "Acme Corp", clientTier: "Gold", creationDate: "2020-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321", company: "Globex Inc", clientTier: "Silver", creationDate: "2019-06-30" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "345-678-1234", company: "Wayne Enterprises", clientTier: "Gold", creationDate: "2018-11-25" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", phone: "567-123-4567", company: "Stark Industries", clientTier: "Platinum", creationDate: "2017-09-18" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", phone: "678-234-5678", company: "LexCorp", clientTier: "Silver", creationDate: "2021-03-12" },
    { id: 6, name: "Diana Prince", email: "diana@example.com", phone: "789-345-6789", company: "Amazon", clientTier: "Gold", creationDate: "2019-07-04" },
    { id: 7, name: "Eve Adams", email: "eve@example.com", phone: "890-456-7890", company: "Umbrella Corp", clientTier: "Bronze", creationDate: "2022-01-23" },
    { id: 8, name: "Frank Castle", email: "frank@example.com", phone: "901-567-8901", company: "Punisher LLC", clientTier: "Gold", creationDate: "2016-12-14" },
    { id: 9, name: "Grace Kelly", email: "grace@example.com", phone: "234-678-8901", company: "Pearl Enterprises", clientTier: "Silver", creationDate: "2023-08-19" },
    { id: 10, name: "Harry Potter", email: "harry@example.com", phone: "456-789-0123", company: "Hogwarts", clientTier: "Platinum", creationDate: "2015-10-10" },
  ]);
  

  const [newClient, setNewClient] = useState({ name: "", email: "", phone: "", company: "", clientTier: "", creationDate: "" });
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const addClient = () => {
    setClients([...clients, { id: clients.length + 1, ...newClient }]);
    setNewClient({ name: "", email: "", phone: "", company: "", clientTier: "", creationDate: "" });
    setShowForm(false);
  };

  const viewClientDetails = (id) => {
    navigate(`/clients/${id}`);
  };

  const deleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ClientSectionContainer>
      <TopBar>
        <Header>Client Management</Header>
        <SearchAddWrapper>
          <SearchBarContainer>
            <SearchBar
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <ClearButton onClick={clearSearch}>
                <FaTimes /> {/* Icon used for the clear button */}
              </ClearButton>
            )}
          </SearchBarContainer>
          <AddClientButton onClick={() => setShowForm(true)}>Add Client</AddClientButton>
        </SearchAddWrapper>
      </TopBar>

      {showForm && (
        <AddClientForm>
          <FormLabel>Name</FormLabel>
          <InputField
            type="text"
            name="name"
            value={newClient.name}
            onChange={handleInputChange}
            placeholder="Enter client name"
          />
          <FormLabel>Email</FormLabel>
          <InputField
            type="email"
            name="email"
            value={newClient.email}
            onChange={handleInputChange}
            placeholder="Enter client email"
          />
          <FormLabel>Phone</FormLabel>
          <InputField
            type="text"
            name="phone"
            value={newClient.phone}
            onChange={handleInputChange}
            placeholder="Enter client phone number"
          />
          <FormLabel>Company</FormLabel>
          <InputField
            type="text"
            name="company"
            value={newClient.company}
            onChange={handleInputChange}
            placeholder="Enter client company name"
          />
          <FormLabel>Client Tier</FormLabel>
          <InputField
            type="text"
            name="clientTier"
            value={newClient.clientTier}
            onChange={handleInputChange}
            placeholder="Enter client tier (e.g., Gold, Silver, Bronze)"
          />
          <FormLabel>Creation Date</FormLabel>
          <InputField
            type="date"
            name="creationDate"
            value={newClient.creationDate}
            onChange={handleInputChange}
          />
          <FormButtonContainer>
            <ActionButton onClick={addClient}>Add Client</ActionButton>
            <ActionButton delete onClick={() => setShowForm(false)}>
              Cancel
            </ActionButton>
          </FormButtonContainer>
        </AddClientForm>
      )}

      <ClientTable>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Company</TableHeader>
            <TableHeader>Client Tier</TableHeader>
            <TableHeader>Creation Date</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.id}</TableCell>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>{client.company}</TableCell>
              <TableCell>{client.clientTier}</TableCell>
              <TableCell>{client.creationDate}</TableCell>
              <TableCell>
                <ActionButton onClick={() => viewClientDetails(client.id)}>
                  View
                </ActionButton>
                <ActionButton onClick={() => alert("Edit feature coming soon!")}>
                  Edit
                </ActionButton>
                <ActionButton delete onClick={() => deleteClient(client.id)}>
                  Delete
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </ClientTable>
    </ClientSectionContainer>
  );
};

export default ClientManagement;
