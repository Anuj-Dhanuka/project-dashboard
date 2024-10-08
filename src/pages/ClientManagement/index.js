import React, { useState } from 'react';
import ClientList from './components/ClientList';


const ClientManagement = () => {
  const [clients] = useState([
    { id: 1, company: 'Company A', email: 'johndoe@companya.com', phone: "123456789", name: 'John Doe', tier: 'VIP' },
    { id: 2, company: 'Company B', email: 'janeSmith@companyb.com', phone: "123456789", name: 'Jane Smith', tier: 'Standard' },
  ]);

  return (
    <div>
      <h2>Client Management</h2>
      <ClientList clients={clients} />
    </div>
  );
};

export default ClientManagement;
