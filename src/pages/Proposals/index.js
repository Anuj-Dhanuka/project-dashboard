import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaEye,
  FaEdit,
  FaSearch,
  FaCalendarAlt,
  FaDollarSign,
  FaTrashAlt,
  FaTimes,
} from "react-icons/fa"; // Icons including the delete icon

const ProposalContainer = styled.div`
  padding: 40px;
  background-color: #f3f4f6;
  border-radius: 15px;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInnerContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 10px 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  width: 250px;
  font-size: 16px;
  outline: none;
  margin-right: 15px;
`;

const ClearIcon = styled(FaTimes)`
  position: absolute;
  right: 20px;
  top: 14px;
  color: #999;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #666;
  }
`;

const SearchIcon = styled(FaSearch)`
  color: #333;
  font-size: 20px;
  cursor: pointer;
`;

const FilterSelect = styled.select`
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  margin-left: 15px;
  outline: none;
`;

const AddProposalButton = styled(Link)`
  padding: 12px 25px;
  background: linear-gradient(135deg, #ff6b6b, #f06595);
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, #fc5c65, #eb3b5a);
  }

  @media (max-width: 768px) {
    margin-top: 15px;
    width: 100%;
    text-align: center;
  }
`;

const ProposalCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProposalInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }

  p {
    margin: 10px 0 5px;
    font-size: 16px;
  }
`;

const DateInfo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
  margin: 5px 0;

  svg {
    margin-right: 8px;
  }
`;

const ProposalAmount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;

  svg {
    margin-right: 8px;
  }
`;

const ProposalStatus = styled.span`
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) =>
    props.status === "pending"
      ? "#f39c12"
      : props.status === "approved"
      ? "#27ae60"
      : "#e74c3c"};
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 15px;
    width: 100%;
    justify-content: space-between;
  }
`;

const ActionButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  margin-left: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }

  &:first-child {
    margin-left: 0;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  margin-left: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`;

const ConfirmationDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .dialog-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;

    button {
      margin-top: 20px;
      padding: 10px 15px;
      background: #ff6b6b;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
      margin-right: 10px;

      &:hover {
        background: #e74c3c;
      }
    }
  }
`;

const Proposals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [proposals, setProposals] = useState([
    {
      id: 1,
      name: "Website Redesign",
      client: "ABC Corp",
      status: "pending",
      createdAt: "2024-10-01",
      validUntil: "2024-11-30",
      amount: "$5000",
    },
    {
      id: 2,
      name: "Mobile App Development",
      client: "XYZ Inc",
      status: "approved",
      createdAt: "2024-09-15",
      validUntil: "2024-12-15",
      amount: "$12000",
    },
    {
      id: 3,
      name: "SEO Optimization",
      client: "DEF Ltd",
      status: "rejected",
      createdAt: "2024-09-25",
      validUntil: "2024-10-25",
      amount: "$3000",
    },
  ]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [proposalToDelete, setProposalToDelete] = useState(null);

  const deleteProposal = (id) => {
    setProposals(proposals.filter((proposal) => proposal.id !== id));
    setShowConfirmDialog(false);
  };

  const confirmDeleteProposal = (id) => {
    setProposalToDelete(id);
    setShowConfirmDialog(true);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const filteredProposals = proposals.filter(
    (proposal) =>
      (proposal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proposal.client.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "" || proposal.status === statusFilter)
  );

  return (
    <ProposalContainer>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Proposals
      </h1>

      <ControlsContainer>
        <SearchContainer>
          <SearchInnerContainer>
            <SearchInput
              type="text"
              placeholder="Search proposals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && <ClearIcon onClick={handleClearSearch} />}
          </SearchInnerContainer>
          <SearchIcon />

          <FilterSelect
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </FilterSelect>
        </SearchContainer>

        <AddProposalButton to="/proposal/create">
          + Add New Proposal
        </AddProposalButton>
      </ControlsContainer>

      {filteredProposals.length === 0 ? (
        <p style={{ color: "#777" }}>No proposals found.</p>
      ) : (
        filteredProposals.map((proposal) => (
          <ProposalCard key={proposal.id}>
            <ProposalInfo>
              <h3>{proposal.name}</h3>
              <p>Client: {proposal.client}</p>

              <DateInfo>
                <FaCalendarAlt /> Created: {proposal.createdAt}
              </DateInfo>
              <DateInfo>
                <FaCalendarAlt /> Valid Until: {proposal.validUntil}
              </DateInfo>

              <ProposalAmount>
                <FaDollarSign /> {proposal.amount}
              </ProposalAmount>

              <ProposalStatus status={proposal.status}>
                {proposal.status}
              </ProposalStatus>
            </ProposalInfo>

            <CardActions>
              <ActionButton to={`/proposal/${proposal.id}`}>
                <FaEye /> View
              </ActionButton>
              <ActionButton to={`/proposal/${proposal.id}/edit`}>
                <FaEdit /> Edit
              </ActionButton>
              <DeleteButton onClick={() => confirmDeleteProposal(proposal.id)}>
                <FaTrashAlt /> Delete
              </DeleteButton>
            </CardActions>
          </ProposalCard>
        ))
      )}

      {showConfirmDialog && (
        <ConfirmationDialog>
          <div className="dialog-content">
            <h2>Are you sure?</h2>
            <p>Do you really want to delete this proposal?</p>
            <button onClick={() => deleteProposal(proposalToDelete)}>
              Yes, Delete
            </button>
            <button onClick={() => setShowConfirmDialog(false)}>Cancel</button>
          </div>
        </ConfirmationDialog>
      )}
    </ProposalContainer>
  );
};

export default Proposals;
