import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ClientManagement from './pages/ClientManagement';
import ProjectOverview from './pages/ProjectOverview';
import TaskManagement from './pages/TaskManagement';
import Financials from './pages/Financials';
import ResourceManagement from './pages/ResourceManagement';
import ClientCommunication from './pages/ClientCommunication';
import Milestones from './pages/Milestones';
import styled from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle';

const DashboardLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <DashboardLayout>
        <Sidebar />
        <Content>
          <Routes>
            <Route path="/clients" element={<ClientManagement />} />
            <Route path="/projects" element={<ProjectOverview />} />
            <Route path="/tasks" element={<TaskManagement />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/resources" element={<ResourceManagement />} />
            <Route path="/communication" element={<ClientCommunication />} />
            <Route path="/milestones" element={<Milestones />} />
          </Routes>
        </Content>
      </DashboardLayout>
    </Router>
  );
}

export default App;
