import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  defaultProposalId,
  createProposalsSectionIds,
} from "../../../../utils/constants";

import { updateProposalLogo } from "../../../../redux/slices/createProposalsSlice.js";

import CoverCustomization from "./components/CoverCustomization";
import IntroductionCustomization from "./components/IntroductionCustomization.js";
import InvestmentPlanCustomization from "./components/InvestmentPlanCustomization.js";
import WorkscopeCustomization from "./components/WorkscopeCustomization.js";
import AgreementCustomization from "./components/AgreementCustomization.js";
import NextStepsCustomization from "./components/NextStepsCustomization.js";
import ThankYouAndServicesCustomization from "./components/ThankYouAndServicesCustomization.js";

const CpRightSideBar = () => {
  const dispatch = useDispatch();

  const activeSection = useSelector(
    (state) => state.customizeContainer.customizeActiveSection
  );
  const logoImage = useSelector(
    (state) => state.createProposals.proposals[defaultProposalId]?.logoImage
  );
  const rightSidebarRef = useRef(null);


  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const logoURL = reader.result;
        dispatch(
          updateProposalLogo({ proposalId: defaultProposalId, logo: logoURL })
        );
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <RightSidebarWrapper ref={rightSidebarRef}>
      <SidebarTitle>Proposal Designer</SidebarTitle>

      <SectionTitle>Logo</SectionTitle>
      <InputContainer>
        {logoImage && <LogoPreview src={logoImage} alt="Logo Preview" />}
        <div>
          <Label>Change Logo</Label>
          <ImageInput
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>
      </InputContainer>

      {activeSection === createProposalsSectionIds.COVER && (
        <>
        <CoverCustomization id={createProposalsSectionIds.COVER} rightSidebarRef={rightSidebarRef} />
        </>
      )}
      {activeSection === createProposalsSectionIds.INTRODUCTION && (
        <IntroductionCustomization
          id={createProposalsSectionIds.INTRODUCTION}
        />
      )}
      {activeSection === createProposalsSectionIds.WORKSCOPE && (
        <WorkscopeCustomization id={createProposalsSectionIds.WORKSCOPE} />
      )}
      {activeSection === createProposalsSectionIds.INVESTMENTPLAN && (
        <InvestmentPlanCustomization
          id={createProposalsSectionIds.INVESTMENTPLAN}
        />
      )}
      {activeSection === createProposalsSectionIds.AGREEMENT && (
        <AgreementCustomization id={createProposalsSectionIds.AGREEMENT} />
      )}
      {activeSection === createProposalsSectionIds.NEXTSTEPS && (
        <NextStepsCustomization id={createProposalsSectionIds.NEXTSTEPS} />
      )}
      {activeSection === createProposalsSectionIds.THANKYOUANDSERVICES && (
        <ThankYouAndServicesCustomization
          id={createProposalsSectionIds.THANKYOUANDSERVICES}
        />
      )}
    </RightSidebarWrapper>
  );
};

// Styled Components

const RightSidebarWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 30px 20px;
  background: linear-gradient(to bottom, #f9f9f9, #ffffff);
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  border-left: 1px solid #e0e0e0;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto; /* Ensure only this container scrolls */

  &::-webkit-scrollbar {
    width: 0px;
  }
  scrollbar-width: none;
`;


const SidebarTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(90deg, #4a90e2, #50e3c2);
  color: transparent;
  -webkit-background-clip: text;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #4a90e2;
    transition: width 0.4s ease, left 0.4s ease;
  }

`;

const SectionTitle = styled.h4`
  font-size: 18px;
  margin: 24px 0 10px;
  color: #333;
  font-weight: 600;
  padding-bottom: 6px;
  border-bottom: 2px solid #4a90e2;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const ImageInput = styled.input`
  padding: 10px;
  background: #f0f0f0;
  border-radius: 8px;
  border: 2px solid #ddd;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    border-color: #4a90e2;
  }
`;

const LogoPreview = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ddd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
`;

export default CpRightSideBar;
