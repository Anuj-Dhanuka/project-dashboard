import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

//Redux
import { updateCustomizeActiveSection } from "../../redux/slices/index.js";

//Components
import CPLeftSideBar from "./components/CPLeftSideBar";
import CpRightSideBar from "./components/CpRightSideBar";
import CPCoverSection from "./components/CPCoverSection";
import CPIntroduction from "./components/CPIntroduction";
import CPWorkScope from "./components/CPWorkScope";
import CPAgreement from "./components/CPAgreement";
import CPNextSteps from "./components/CPNextSteps";
import CPThankYouAndServices from "./components/CPThankYouAndServices";
import CPInvestmentPlan from "./components/CPInvestmentPlan";

const CreateProposal = () => {
  const dispatch = useDispatch();

  const [activeSection, setActiveSection] = useState(null);
  const createProposalsSectionIds = useSelector(
    (state) => state.customizeContainer.createProposalsSectionIds
  );

  const options = { threshold: 0.3 };
  const [coverRef, coverInView] = useInView(options);
  const [introRef, introInView] = useInView(options);
  const [workScopeRef, workScopeInView] = useInView(options);
  const [investmentRef, investmentInView] = useInView(options);
  const [agreementRef, agreementInView] = useInView(options);
  const [nextStepsRef, nextStepsInView] = useInView(options);
  const [thankYouRef, thankYouInView] = useInView(options);

  useEffect(() => {
    if (coverInView) setActiveSection("Cover");
    else if (introInView) setActiveSection("Introduction");
    else if (workScopeInView) setActiveSection("WorkScope");
    else if (investmentInView) setActiveSection("InvestmentPlan");
    else if (agreementInView) setActiveSection("Agreement");
    else if (nextStepsInView) setActiveSection("NextSteps");
    else if (thankYouInView) setActiveSection("ThankYouAndServices");
  }, [
    coverInView,
    introInView,
    workScopeInView,
    investmentInView,
    agreementInView,
    nextStepsInView,
    thankYouInView,
  ]);

  const sectionRefs = useRef({
    Cover: coverRef,
    Introduction: introRef,
    WorkScope: workScopeRef,
    InvestmentPlan: investmentRef,
    Agreement: agreementRef,
    NextSteps: nextStepsRef,
    ThankYouAndServices: thankYouRef,
  });

  const handleSectionClick = (id) => {
    const section = sectionRefs.current[id];
    if (section?.current) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCustomizationSectionChange = (id) => {
    dispatch(updateCustomizeActiveSection(id));
  };

  return (
    <CreateProposalContainer>
      <SidebarContainer>
        <CPLeftSideBar
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
        />
      </SidebarContainer>

      <SectionsContainer>
        <Section
          id="Cover"
          ref={coverRef}
          onClick={() =>
            handleCustomizationSectionChange(createProposalsSectionIds.COVER)
          }
        >
          <CPCoverSection />
        </Section>
        <Section
          id="Introduction"
          ref={introRef}
          onClick={() =>
            handleCustomizationSectionChange(
              createProposalsSectionIds.INTRODUCTION
            )
          }
        >
          <CPIntroduction />
        </Section>
        <Section
          id="WorkScope"
          ref={workScopeRef}
          onClick={() =>
            handleCustomizationSectionChange(
              createProposalsSectionIds.WORKSCOPE
            )
          }
        >
          <CPWorkScope />
        </Section>
        <Section
          id="InvestmentPlan"
          ref={investmentRef}
          onClick={() =>
            handleCustomizationSectionChange(
              createProposalsSectionIds.INVESTMENTPLAN
            )
          }
        >
          <CPInvestmentPlan />
        </Section>
        <Section
          id="Agreement"
          ref={agreementRef}
          onClick={() =>
            handleCustomizationSectionChange(
              createProposalsSectionIds.AGREEMENT
            )
          }
        >
          <CPAgreement />
        </Section>
        <Section
          id="NextSteps"
          ref={nextStepsRef}
          onClick={() =>
            handleCustomizationSectionChange(
              createProposalsSectionIds.NEXTSTEPS
            )
          }
        >
          <CPNextSteps />
        </Section>
        <Section
          id="ThankYouAndServices"
          ref={thankYouRef}
          onClick={() =>
            handleCustomizationSectionChange(
              createProposalsSectionIds.THANKYOUANDSERVICES
            )
          }
        >
          <CPThankYouAndServices />
        </Section>
      </SectionsContainer>

      <RightSidebarContainer>
        <CpRightSideBar />
      </RightSidebarContainer>
    </CreateProposalContainer>
  );
};

const CreateProposalContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 20%;
  background-color: #f4f4f4;
`;

const RightSidebarContainer = styled.div`
  width: 20%;
  background-color: #f4f4f4;
`;

const SectionsContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CreateProposal;
