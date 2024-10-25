import React from "react";
import { FaGripVertical } from "react-icons/fa";
import styled from "styled-components";

//Common Utils //Constants
import { createProposalsSections } from "../../../../utils/constants";

const CPLeftSideBar = ({ activeSection, handleSectionClick }) => (
  <SidebarContainer>
    <SidebarTitle>Create Proposal</SidebarTitle>
    {createProposalsSections.map((section, index) => (
      <React.Fragment key={section.id}>
        <SidebarItem
          $isActive={activeSection === section.id ? "true" : undefined}
          onClick={() => handleSectionClick(section.id)}
        >
          <FaGripVertical />
          <span>{section.title}</span>
        </SidebarItem>
        {index !== createProposalsSections.length - 1 && <SectionDivider />}
      </React.Fragment>
    ))}
  </SidebarContainer>
);

const SidebarContainer = styled.div`
  height: 100vh;
  background-color: #4a90e2;
  color: #ffffff;
  padding: 20px;
  position: sticky;
  top: 0;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
`;

const SidebarItem = styled.div`
  padding: 15px;
  cursor: grab;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.$isActive ? "#3b7cd5" : "transparent")};
  color: ${(props) => (props.$isActive ? "#ffffff" : "#eaeaea")};
  border: 1px solid transparent;
  transition: all 0.3s ease;
  &:hover {
    background-color: #3884c8;
    border: 1px solid #606470;
    color: #ffffff;
    cursor: grabbing;
  }

  span {
    margin-left: 15px;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
`;

const SectionDivider = styled.div`
  border-bottom: 1px solid #3b7cd5;
  margin-bottom: 12px;
`;

export default CPLeftSideBar;
