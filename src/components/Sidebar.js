import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  FaSignOutAlt,
  FaUserFriends,
  FaProjectDiagram,
  FaTasks,
  FaChartLine,
  FaUsers,
  FaComments,
  FaFlagCheckered,
} from "react-icons/fa"; // Import icons

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2d3436; /* Dark background for the sidebar */
  color: #fff;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: background 0.3s; /* Smooth background transition */ 
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 30px; /* Space between logo and menu */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoText = styled.h2`
  margin: 0;
  font-size: 26px; /* Increased font size for better visibility */
  font-weight: bold; /* Bold font for emphasis */
  color: #00b894; /* Green color for the logo */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Subtle shadow effect for depth */
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  flex-grow: 1; /* Allows the menu to take available space */
`;

const SidebarMenuItem = styled.li`
  margin: 15px 0;
  border-radius: 5px; /* Rounded corners for menu items */
  overflow: hidden; /* Ensures child elements respect the border radius */
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    props.active
      ? "#fff"
      : "#dfe6e9"}; /* White for active, light grey for inactive */
  background-color: ${(props) =>
    props.active
      ? "#00b894"
      : "#37474f"}; /* Green for active, dark grey for inactive */
  padding: 15px;
  display: flex;
  align-items: center;
  transition: background 0.3s, color 0.3s; /* Smooth transition for hover effects */

  &:hover {
    background-color: #00b894; /* Green background on hover */
    color: #fff; /* White text on hover */
  }
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: #dfe6e9; /* Light grey color for the logout button */
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 20px;

  &:hover {
    color: #ff7675; /* Change color on hover */
  }
`;

const LogoutIcon = styled(FaSignOutAlt)`
  margin-right: 8px; /* Space between icon and text */
`;

const IconWrapper = styled.div`
  margin-right: 10px; /* Space between icon and text */
`;

const Sidebar = () => {
  const location = useLocation(); // Get the current route

  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoText>PPC Roy</LogoText> {/* Company Name as Logo */}
      </LogoContainer>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarLink to="/clients" active={location.pathname === "/clients"}>
            <IconWrapper>
              <FaUserFriends />
            </IconWrapper>{" "}
            Client Management
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink
            to="/projects"
            active={location.pathname === "/projects"}
          >
            <IconWrapper>
              <FaProjectDiagram />
            </IconWrapper>{" "}
            Project Overview
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink to="/tasks" active={location.pathname === "/tasks"}>
            <IconWrapper>
              <FaTasks />
            </IconWrapper>{" "}
            Task Management
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink
            to="/financials"
            active={location.pathname === "/financials"}
          >
            <IconWrapper>
              <FaChartLine />
            </IconWrapper>{" "}
            Financials
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink
            to="/resources"
            active={location.pathname === "/resources"}
          >
            <IconWrapper>
              <FaUsers />
            </IconWrapper>{" "}
            Resource Management
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink
            to="/communication"
            active={location.pathname === "/communication"}
          >
            <IconWrapper>
              <FaComments />
            </IconWrapper>{" "}
            Client Communication
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink
            to="/milestones"
            active={location.pathname === "/milestones"}
          >
            <IconWrapper>
              <FaFlagCheckered />
            </IconWrapper>{" "}
            Milestones
          </SidebarLink>
        </SidebarMenuItem>
      </SidebarMenu>
      <LogoutButton>
          <LogoutIcon /> Logout
        </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
