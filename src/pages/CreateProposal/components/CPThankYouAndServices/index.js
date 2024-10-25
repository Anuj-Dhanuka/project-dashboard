import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaLaptopCode, FaMobileAlt, FaCog, FaHandshake } from "react-icons/fa";

//Common Utils //Constants
import {
  defaultProposalId,
  proposalPageWidth,
} from "../../../../utils/constants";

//Common Utils //Common Functions
import {
  saveCaretPosition,
  restoreCaretPosition,
} from "../../../../utils/CommonUtils/commonFunctions";

//Redux
import { updateThankYouAndServices } from "../../../../redux/slices/createProposalsSlice.js";

const CPThankYouAndServices = () => {
  const dispatch = useDispatch();

  const logoImage = useSelector(
    (state) => state.createProposals.proposals[defaultProposalId]?.logoImage
  );
  const thankYouAndServicesSection = useSelector(
    (state) =>
      state.createProposals.proposals[defaultProposalId]?.sections
        .thankYouAndServices
  );

  const { sectionTitle, message, services, contact } =
    thankYouAndServicesSection;
  const { contactTitle, email, phone, address } = contact;

  const titleRef = useRef(null);
  const messageRef = useRef(null);
  const service1TitleRef = useRef(null);
  const service1DescriptionRef = useRef(null);
  const service2TitleRef = useRef(null);
  const service2DescriptionRef = useRef(null);
  const service3TitleRef = useRef(null);
  const service3DescriptionRef = useRef(null);
  const service4TitleRef = useRef(null);
  const service4DescriptionRef = useRef(null);
  const contactTitleRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);

  const handleTextChange = (ref, key, serviceIndex, contactInfo) => {
    const caretPosition = saveCaretPosition(ref.current);

    let updatedContent = { ...thankYouAndServicesSection };

    if (serviceIndex !== null && !contactInfo) {
      const updatedServices = [...updatedContent.services];
      updatedServices[serviceIndex] = {
        ...updatedServices[serviceIndex],
        [key]: ref.current.textContent,
      };
      updatedContent = { ...updatedContent, services: updatedServices };
    }

    if (contactInfo) {
      updatedContent = {
        ...updatedContent,
        contact: { ...updatedContent.contact, [key]: ref.current.textContent },
      };
    }

    if (serviceIndex === null && !contactInfo) {
      updatedContent = { ...updatedContent, [key]: ref.current.textContent };
    }

    dispatch(
      updateThankYouAndServices({
        proposalId: defaultProposalId,
        updatedFields: updatedContent,
      })
    );

    setTimeout(() => {
      restoreCaretPosition(ref.current, caretPosition);
    }, 0);
  };

  return (
    <ThankYouContainer>
      {/* Header Section */}
      <LogoContainer>
        <Logo src={logoImage} alt="PPC Roy Logo" />
      </LogoContainer>
      <SectionHeader>
        <SectionTitle
          contentEditable
          suppressContentEditableWarning
          ref={titleRef}
          onInput={() => handleTextChange(titleRef, "sectionTitle")}
        >
          {sectionTitle}
        </SectionTitle>
        <ThankYouMessage
          contentEditable
          suppressContentEditableWarning
          ref={messageRef}
          onInput={() => handleTextChange(messageRef, "message")}
        >
          {message}
        </ThankYouMessage>
      </SectionHeader>

      {/* Service Cards Section */}
      <ServiceCardsContainer>
        <ServiceCard>
          <ServiceIcon>
            <FaLaptopCode />
          </ServiceIcon>
          <ServiceTitle
            contentEditable
            suppressContentEditableWarning
            ref={service1TitleRef}
            onInput={() => handleTextChange(service1TitleRef, "title", 0)}
          >
            {services[0].title}
          </ServiceTitle>
          <ServiceDescription
            contentEditable
            suppressContentEditableWarning
            ref={service1DescriptionRef}
            onInput={() =>
              handleTextChange(service1DescriptionRef, "description", 0)
            }
          >
            {services[0].description}
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>
            <FaMobileAlt />
          </ServiceIcon>
          <ServiceTitle
            contentEditable
            suppressContentEditableWarning
            ref={service2TitleRef}
            onInput={() => handleTextChange(service2TitleRef, "title", 1)}
          >
            {services[1].title}
          </ServiceTitle>
          <ServiceDescription
            contentEditable
            suppressContentEditableWarning
            ref={service2DescriptionRef}
            onInput={() =>
              handleTextChange(service2DescriptionRef, "description", 1)
            }
          >
            {services[1].description}
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>
            <FaCog />
          </ServiceIcon>
          <ServiceTitle
            contentEditable
            suppressContentEditableWarning
            ref={service3TitleRef}
            onInput={() => handleTextChange(service3TitleRef, "title", 2)}
          >
            {services[2].title}
          </ServiceTitle>
          <ServiceDescription
            contentEditable
            suppressContentEditableWarning
            ref={service3DescriptionRef}
            onInput={() =>
              handleTextChange(service3DescriptionRef, "description", 2)
            }
          >
            {services[2].description}
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>
            <FaHandshake />
          </ServiceIcon>
          <ServiceTitle
            contentEditable
            suppressContentEditableWarning
            ref={service4TitleRef}
            onInput={() => handleTextChange(service4TitleRef, "title", 3)}
          >
            {services[3].title}
          </ServiceTitle>
          <ServiceDescription
            contentEditable
            suppressContentEditableWarning
            ref={service4DescriptionRef}
            onInput={() =>
              handleTextChange(service4DescriptionRef, "description", 3)
            }
          >
            {services[3].description}
          </ServiceDescription>
        </ServiceCard>
      </ServiceCardsContainer>

      {/* Contact Section */}
      <ContactSection>
        <ContactText
          contentEditable
          suppressContentEditableWarning
          ref={contactTitleRef}
          onInput={() =>
            handleTextChange(contactTitleRef, "contactTitle", null, true)
          }
        >
          {contactTitle}
        </ContactText>
          <ContactDetails
            contentEditable
            suppressContentEditableWarning
            ref={emailRef}
            onInput={() => handleTextChange(emailRef, "email", null, true)}
          >
            {email}
          </ContactDetails>
          <ContactDetails
            contentEditable
            suppressContentEditableWarning
            ref={phoneRef}
            onInput={() => handleTextChange(phoneRef, "phone", null, true)}
          >
            {phone}
          </ContactDetails>
          <ContactDetails
            contentEditable
            suppressContentEditableWarning
            ref={addressRef}
            onInput={() => handleTextChange(addressRef, "address", null, true)}
          >
            {address}
          </ContactDetails>
      </ContactSection>
    </ThankYouContainer>
  );
};

const ThankYouContainer = styled.div`
  width: ${proposalPageWidth};
  margin: 50px auto;
  padding: 50px 36px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  color: #333;
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 85%;
    padding: 1.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 30px;
  border-radius: 100px;
  align-self: flex-start;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h1`
  font-size: 2.8rem;
  color: #003366;
  margin-bottom: 1rem;
  font-weight: 700;
  outline: none;
  cursor: text;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const ThankYouMessage = styled.p`
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  outline: none;
  cursor: text;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const ServiceCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  width: 300px;
  background: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const ServiceIcon = styled.div`
  font-size: 4rem;
  color: #1abc9c;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.6rem;
  color: #003366;
  margin-bottom: 1rem;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const ContactSection = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  background-color: #f1f1f1;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #333;
  outline: none;
  cursor: text;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const ContactDetails = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  font-weight: bold;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

export default CPThankYouAndServices;
