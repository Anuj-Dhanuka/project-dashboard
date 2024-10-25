import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  FaCheckCircle,
  FaFileSignature,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

//Common Utils //Constants
import {
  createProposalInputWidth,
  defaultProposalId,
  proposalPageWidth,
} from "../../../../utils/constants";

//Common Utils //Common Fuctions
import {
  saveCaretPosition,
  restoreCaretPosition,
} from "../../../../utils/CommonUtils/commonFunctions";

//Redux
import { updateNextStepsContent } from "../../../../redux/slices/createProposalsSlice.js";

const CPNextSteps = () => {
  const dispatch = useDispatch();

  const logoImage = useSelector(
    (state) => state.createProposals.proposals[defaultProposalId]?.logoImage
  );
  const nextStepSection = useSelector(
    (state) =>
      state.createProposals.proposals[defaultProposalId]?.sections.nextSteps
  );
  const { sectionTitle, steps, contact } = nextStepSection;
  const {
    contactTitle,
    phoneTitle,
    phoneText,
    emailTitle,
    emailText,
    addressTitle,
    addressText,
  } = contact;

  const titleRef = useRef(null);
  const step1TitleRef = useRef(null);
  const step1DescriptionRef = useRef(null);
  const step2TitleRef = useRef(null);
  const step2DescriptionRef = useRef(null);
  const step3TitleRef = useRef(null);
  const step3DescriptionRef = useRef(null);
  const step4TitleRef = useRef(null);
  const step4DescriptionRef = useRef(null);
  const contactTitleRef = useRef(null);
  const phoneTitleRef = useRef(null);
  const phoneTextRef = useRef(null);
  const emailTitleRef = useRef(null);
  const emailTextRef = useRef(null);
  const addressTitleRef = useRef(null);
  const addressTextRef = useRef(null);

  const handleTextChange = (ref, key, stepIndex = null, contactInfo = null) => {
    const caretPosition = saveCaretPosition(ref.current);
    let updatedContent = { ...nextStepSection }; // Make a copy of the section data

    // Handle step updates
    if (stepIndex !== null && !contactInfo) {
      const updatedSteps = [...updatedContent.steps];
      updatedSteps[stepIndex] = {
        ...updatedSteps[stepIndex],
        [key]: ref.current.textContent,
      };
      updatedContent = { ...updatedContent, steps: updatedSteps };
    }

    // Handle contact info updates
    if (contactInfo) {
      updatedContent = {
        ...updatedContent,
        contact: { ...updatedContent.contact, [key]: ref.current.textContent },
      };
    }

    // Handle section title updates (or other direct section fields)
    if (stepIndex === null && !contactInfo) {
      updatedContent = { ...updatedContent, [key]: ref.current.textContent };
    }

    // Dispatch the updated content to Redux store
    dispatch(
      updateNextStepsContent({
        proposalId: defaultProposalId,
        updatedFields: updatedContent,
      })
    );

    // Restore the caret position after updating content
    setTimeout(() => {
      restoreCaretPosition(ref.current, caretPosition);
    }, 0);
  };

  return (
    <NextStepsContainer>
      <LogoContainer>
        <Logo src={logoImage} alt="PPC Roy Logo" />
      </LogoContainer>
      <Title
        contentEditable
        suppressContentEditableWarning
        ref={titleRef}
        onInput={() => handleTextChange(titleRef, "sectionTitle")}
      >
        {sectionTitle}
      </Title>
      <HorizontalLine />

      <StepList>
        <StepItem>
          <StepIcon>
            <FaCheckCircle />
          </StepIcon>
          <StepTitle
            contentEditable
            suppressContentEditableWarning
            ref={step1TitleRef}
            onInput={() => handleTextChange(step1TitleRef, "title", 0)}
          >
            {steps[0].title}
          </StepTitle>
          <StepDescription
            contentEditable
            suppressContentEditableWarning
            ref={step1DescriptionRef}
            onInput={() =>
              handleTextChange(step1DescriptionRef, "description", 0)
            }
          >
            {steps[0].description}
          </StepDescription>
        </StepItem>

        <StepItem>
          <StepIcon>
            <FaFileSignature />
          </StepIcon>
          <StepTitle
            contentEditable
            suppressContentEditableWarning
            ref={step2TitleRef}
            onInput={() => handleTextChange(step2TitleRef, "title", 1)}
          >
            {steps[1].title}
          </StepTitle>
          <StepDescription
            contentEditable
            suppressContentEditableWarning
            ref={step2DescriptionRef}
            onInput={() =>
              handleTextChange(step2DescriptionRef, "description", 1)
            }
          >
            {steps[1].description}
          </StepDescription>
        </StepItem>

        <StepItem>
          <StepIcon>
            <FaPhone />
          </StepIcon>
          <StepTitle
            contentEditable
            suppressContentEditableWarning
            ref={step3TitleRef}
            onInput={() => handleTextChange(step3TitleRef, "title", 2)}
          >
            {steps[2].title}
          </StepTitle>
          <StepDescription
            contentEditable
            suppressContentEditableWarning
            ref={step3DescriptionRef}
            onInput={() =>
              handleTextChange(step3DescriptionRef, "description", 2)
            }
          >
            {steps[2].description}
          </StepDescription>
        </StepItem>

        <StepItem>
          <StepIcon>
            <FaEnvelope />
          </StepIcon>
          <StepTitle
            contentEditable
            suppressContentEditableWarning
            ref={step4TitleRef}
            onInput={() => handleTextChange(step4TitleRef, "title", 3)}
          >
            {steps[3].title}
          </StepTitle>
          <StepDescription
            contentEditable
            suppressContentEditableWarning
            ref={step4DescriptionRef}
            onInput={() =>
              handleTextChange(step4DescriptionRef, "description", 3)
            }
          >
            {steps[3].description}
          </StepDescription>
        </StepItem>
      </StepList>

      <ContactSection>
        <ContactTitle
          contentEditable
          suppressContentEditableWarning
          ref={contactTitleRef}
          onInput={() =>
            handleTextChange(contactTitleRef, "contactTitle", null, true)
          }
        >
          {contactTitle}
        </ContactTitle>
        <ContactInfo>
          <p>
            <StrongText
              contentEditable
              suppressContentEditableWarning
              ref={phoneTitleRef}
              onInput={() =>
                handleTextChange(phoneTitleRef, "phoneTitle", null, true)
              }
            >
              {phoneTitle}
            </StrongText>{" "}
            <a
              contentEditable
              suppressContentEditableWarning
              href={`tel:${phoneText}`}
              ref={phoneTextRef}
              onInput={() =>
                handleTextChange(phoneTextRef, "phoneText", null, true)
              }
            >
              {phoneText}
            </a>
          </p>
          <p>
            <StrongText
              contentEditable
              suppressContentEditableWarning
              ref={emailTitleRef}
              onInput={() =>
                handleTextChange(emailTitleRef, "emailTitle", null, true)
              }
            >
              {emailTitle}
            </StrongText>{" "}
            <a
              contentEditable
              suppressContentEditableWarning
              href={`mailto:${emailText}`}
              ref={emailTextRef}
              onInput={() =>
                handleTextChange(emailTextRef, "emailText", null, true)
              }
            >
              {emailText}
            </a>
          </p>
          <p>
            <StrongText
              contentEditable
              suppressContentEditableWarning
              ref={addressTitleRef}
              onInput={() =>
                handleTextChange(addressTitleRef, "addressTitle", null, true)
              }
            >
              {" "}
              {addressTitle}
            </StrongText>{" "}
            <SpanText
              contentEditable
              suppressContentEditableWarning
              ref={addressTextRef}
              onInput={() =>
                handleTextChange(addressTextRef, "addressText", null, true)
              }
            >
              {addressText}
            </SpanText>
          </p>
        </ContactInfo>
      </ContactSection>
    </NextStepsContainer>
  );
};

const NextStepsContainer = styled.div`
  width: ${proposalPageWidth};
  margin: 40px auto;
  padding: 50px 36px;
  background: linear-gradient(135deg, #e0f7fa, #ffebee);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  color: #333;

  @media print {
    width: 100%;
    margin: 0;
    box-shadow: none;
    background: white;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #00bcd4;
  padding: 5px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2e3440;
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 3px dashed #f06292;
  margin: 15px auto 25px;
  width: 50%;
`;

const StepList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media print {
    flex-direction: column;
  }
`;

const StepItem = styled.div`
  width: 300px;
  background: linear-gradient(135deg, #fffde7, #f3e5f5);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #ddd;
  text-align: left;
  transition: transform 0.3s ease;
  margin-bottom: 16px;

  @media print {
    page-break-inside: avoid;
  }
`;

const StepIcon = styled.div`
  font-size: 2.8rem;
  color: #ff7043;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #424242;
  text-transform: uppercase;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #616161;
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
  width: ${createProposalInputWidth};
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #e1bee7, #bbdefb);
  border-radius: 12px;
  border: 1px solid #ddd;

  @media print {
    page-break-inside: avoid;
  }
`;

const ContactTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2e3440;
  text-transform: uppercase;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const ContactInfo = styled.div`
  font-size: 1rem;
  color: #424242;

  a {
    color: #0288d1;
    font-weight: bold;
    text-decoration: none;
    outline: none;
    cursor: text;
    white-space: normal;
    overflow-wrap: break-word;
    word-break: normal;

    &:focus {
      border-bottom: 1px dashed #2c3e50;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StrongText = styled.strong`
  font-size: 1rem;
  color: #424242;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const SpanText = styled.span`
  font-size: 1rem;
  color: #424242;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

export default CPNextSteps;
