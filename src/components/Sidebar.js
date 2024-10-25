import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  FaFileInvoiceDollar,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation(); // Get the current route

  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoImage src="https://thumbs.dreamstime.com/b/ppc-letter-logo-design-black-background-creative-initials-concept-247867562.jpg" alt="Logo" /> {/* Small logo */}
        <LogoText>PPC Roy</LogoText> {/* Company Name as Logo */}
      </LogoContainer>
      <LineSeparator /> {/* Separator Line */}
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarLink to="/clients" $isActive={location.pathname === "/clients"}>
            <IconWrapper>
              <FaUserFriends />
            </IconWrapper>{" "}
            Client Management
          </SidebarLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarLink to="/proposals" $isActive={location.pathname === "/proposals"}>
            <IconWrapper>
              <FaFileInvoiceDollar />
            </IconWrapper>{" "}
            Proposals
          </SidebarLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarLink
            to="/projects"
            $isActive={location.pathname === "/projects"}
          >
            <IconWrapper>
              <FaProjectDiagram />
            </IconWrapper>{" "}
            Project Overview
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink to="/tasks" $isActive={location.pathname === "/tasks"}>
            <IconWrapper>
              <FaTasks />
            </IconWrapper>{" "}
            Task Management
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink
            to="/financials"
            $isActive={location.pathname === "/financials"}
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
            $isActive={location.pathname === "/resources"}
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
            $isActive={location.pathname === "/communication"}
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
            $isActive={location.pathname === "/milestones"}
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

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #2d3436; /* Dark background for the sidebar */
  color: #fff;
  padding: 20px;
  height: 100vh; /* Ensure it takes full viewport height */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: sticky; /* Make the sidebar sticky */
  top: 0; /* Stick the sidebar at the top */
  overflow-y: auto; /* If content overflows, the sidebar itself will scroll */
  transition: background 0.3s;
  
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100px; /* Shrink sidebar for smaller screens */
  }
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: center; /* Align logo and text horizontally */
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 40px; /* Small logo image */
  height: 40px;
  margin-right: 10px; /* Space between logo and text */
`;

const LogoText = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #00b894; /* Green color for the logo text */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 20px; /* Reduce text size on mobile */
  }
`;

const LineSeparator = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: #b2bec3; /* Light grey line */
  margin: 0px 0;
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

const SidebarLink = styled(NavLink)`
  text-decoration: none;
  color: #dfe6e9; /* Inactive link color */
  background-color: #37474f; /* Inactive background color */
  padding: 15px;
  display: flex;
  align-items: center;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background-color: #00b894; /* Green background on hover */
    color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Slight shadow on hover */
  }

  &.active {
    background-color: #00b894; /* Green background when active */
    color: #fff;
  }

  svg {
    color: ${(props) => (props.$isActive ? "#fff" : "#b2bec3")}; /* Icons color based on active state */
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
  padding: 10px 0;

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

export default Sidebar;
