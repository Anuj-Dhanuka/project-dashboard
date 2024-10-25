import React from "react";
import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";

//Global Components
import Sidebar from "../components/Sidebar";

//Pages
import ClientManagement from "../pages/ClientManagement";
import ClientDetails from "../pages/ClientDetails";
import Proposals from "../pages/Proposals";
import CreateProposal from "../pages/CreateProposal";
import ProposalDetails from "../pages/ProposalDetails";
import ProjectOverview from "../pages/ProjectOverview";
import TaskManagement from "../pages/TaskManagement";
import Financials from "../pages/Financials";
import ResourceManagement from "../pages/ResourceManagement";
import ClientCommunication from "../pages/ClientCommunication";
import Milestones from "../pages/Milestones";

const Navigations = () => {
  const location = useLocation();

  // Check if the current route is the "Create Proposal" route
  const isCreateProposalPage = location.pathname === "/proposal/create";

  return (
    <DashboardLayout>
      {!isCreateProposalPage && <Sidebar />}
      <Content>
        <Routes>
          <Route path="/clients" element={<ClientManagement />} />
          <Route path="/clients/:id" element={<ClientDetails />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/proposal/create" element={<CreateProposal />} />
          <Route path="/proposal/:id" element={<ProposalDetails />} />
          <Route path="/proposal/:id/edit" element={<CreateProposal />} />
          <Route path="/projects" element={<ProjectOverview />} />
          <Route path="/tasks" element={<TaskManagement />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/resources" element={<ResourceManagement />} />
          <Route path="/communication" element={<ClientCommunication />} />
          <Route path="/milestones" element={<Milestones />} />
        </Routes>
      </Content>
    </DashboardLayout>
  );
};

const DashboardLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f4f4;
  background-color: red;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
`;

export default Navigations;
