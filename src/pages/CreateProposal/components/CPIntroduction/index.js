import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaBullseye, FaHandshake, FaLightbulb } from "react-icons/fa";

// Common Utils // Constants
import {
  createProposalInputWidth,
  defaultProposalId,
  proposalPageWidth,
} from "../../../../utils/constants";

// Common Utils // Common Functions
import {
  saveCaretPosition,
  restoreCaretPosition,
  handleKeyDown,
} from "../../../../utils/CommonUtils/commonFunctions";
import { updateIntroductionContent } from "../../../../redux/slices/createProposalsSlice.js";


const CPIntroduction = () => {
  const dispatch = useDispatch();

  const logoImage = useSelector(
    (state) => state.createProposals.proposals[defaultProposalId]?.logoImage
  );
  const introductionSection = useSelector(
    (state) =>
      state.createProposals.proposals[defaultProposalId]?.sections.introduction
  );
  const { companyTitle, companyIntroduction, objectives, description } =
    introductionSection;
  const { card1, card2, card3 } = objectives;

  const introductionTitleRef = useRef(null);
  const companyIntroductionRef = useRef(null);

  const card1TitleRef = useRef(null);
  const card1DescriptionRef = useRef(null);
  const card2TitleRef = useRef(null);
  const card2DescriptionRef = useRef(null);
  const card3TitleRef = useRef(null);
  const card3DescriptionRef = useRef(null);

  const descriptionTextRef = useRef(null);

  const handleInputChange = (ref, key, cardKey = null, field = null) => {
    const caretPosition = saveCaretPosition(ref.current);

    if (cardKey && field) {
      // Update specific card's title or description
      const updatedObjectives = {
        ...introductionSection.objectives,
        [cardKey]: {
          ...introductionSection.objectives[cardKey],
          [field]: ref.current.textContent,
        },
      };

      dispatch(
        updateIntroductionContent({
          proposalId: defaultProposalId,
          updatedFields: { objectives: updatedObjectives },
        })
      );
    } else {
      // Update general fields like companyTitle or description
      const updatedContent = {
        ...introductionSection,
        [key]: ref.current.textContent,
      };
      dispatch(
        updateIntroductionContent({
          proposalId: defaultProposalId,
          updatedFields: updatedContent,
        })
      );
    }

    setTimeout(() => {
      restoreCaretPosition(ref.current, caretPosition);
    }, 0);
  };

  return (
    <IntroductionContainer>
      <OverlayShape />
      <ContentWrapper>
        <Logo src={logoImage} alt="PPC Roy Logo" />
        <InputTextContainer>
          <IntroductionTitle
            contentEditable
            suppressContentEditableWarning
            ref={introductionTitleRef}
            onInput={() =>
              handleInputChange(introductionTitleRef, "companyTitle")
            }
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                introductionTitleRef,
                "companyTitle",
                handleInputChange
              )
            }
          >
            {companyTitle}
          </IntroductionTitle>
          <CompanyIntroduction
            contentEditable
            suppressContentEditableWarning
            ref={companyIntroductionRef}
            onInput={() => {
              handleInputChange(companyIntroductionRef, "companyIntroduction");
            }}
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                companyIntroductionRef,
                "companyIntroduction",
                handleInputChange
              )
            }
          >
            {companyIntroduction}
          </CompanyIntroduction>
        </InputTextContainer>
      </ContentWrapper>

      <KeyObjectivesContainer>
        <ObjectiveItem>
          <ObjectiveIcon>
            <FaBullseye />
          </ObjectiveIcon>
          <ObjectiveTitle
            contentEditable
            suppressContentEditableWarning
            ref={card1TitleRef}
            onInput={() =>
              handleInputChange(card1TitleRef, null, "card1", "title")
            }
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                card1TitleRef,
                null,
                handleInputChange,
                "card1",
                "title"
              )
            }
          >
            {card1.title}
          </ObjectiveTitle>
          <ObjectiveText
            contentEditable
            suppressContentEditableWarning
            ref={card1DescriptionRef}
            onInput={() =>
              handleInputChange(
                card1DescriptionRef,
                null,
                "card1",
                "description"
              )
            }
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                card1DescriptionRef,
                null,
                handleInputChange,
                "card1",
                "description"
              )
            }
          >
            {card1.description}
          </ObjectiveText>
        </ObjectiveItem>

        <ObjectiveItem>
          <ObjectiveIcon>
            <FaHandshake />
          </ObjectiveIcon>
          <ObjectiveTitle
            contentEditable
            suppressContentEditableWarning
            ref={card2TitleRef}
            onInput={() =>
              handleInputChange(card2TitleRef, null, "card2", "title")
            }
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                card2TitleRef,
                null,
                handleInputChange,
                "card2",
                "title"
              )
            }
          >
            {card2.title}
          </ObjectiveTitle>
          <ObjectiveText
            contentEditable
            suppressContentEditableWarning
            ref={card2DescriptionRef}
            onInput={() =>
              handleInputChange(
                card2DescriptionRef,
                null,
                "card2",
                "description"
              )
            }
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                card2DescriptionRef,
                null,
                handleInputChange,
                "card2",
                "description"
              )
            }
          >
            {card2.description}
          </ObjectiveText>
        </ObjectiveItem>

        <ObjectiveItem>
          <ObjectiveIcon>
            <FaLightbulb />
          </ObjectiveIcon>
          <ObjectiveTitle
            contentEditable
            suppressContentEditableWarning
            ref={card3TitleRef}
            onInput={() =>
              handleInputChange(card3TitleRef, null, "card3", "title")
            }
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                card3TitleRef,
                null,
                handleInputChange,
                "card3",
                "title"
              )
            }
          >
            {card3.title}
          </ObjectiveTitle>
          <ObjectiveText
            contentEditable
            suppressContentEditableWarning
            ref={card3DescriptionRef}
            onInput={() =>
              handleInputChange(
                card3DescriptionRef,
                null,
                "card3",
                "description"
              )
            }
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                card3DescriptionRef,
                null,
                handleInputChange,
                "card3",
                "description"
              )
            }
          >
            {card3.description}
          </ObjectiveText>
        </ObjectiveItem>
      </KeyObjectivesContainer>

      <DescriptionText
        contentEditable
        suppressContentEditableWarning
        ref={descriptionTextRef}
        onInput={() => handleInputChange(descriptionTextRef, "description")}
        onKeyDown={(e) =>
          handleKeyDown(e, descriptionTextRef, "description", handleInputChange)
        }
      >
        {description}
      </DescriptionText>
    </IntroductionContainer>
  );
};


const IntroductionContainer = styled.div`
  width: ${proposalPageWidth};
  padding: 50px 36px;
  background: linear-gradient(135deg, #4a90e2, #50e3c2);
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  margin: 40px auto;
  position: relative;
`;

const OverlayShape = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 60px;
  margin-bottom: 30px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
`;

const InputTextContainer = styled.div`
  width: ${createProposalInputWidth};
`;

const IntroductionTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  border-bottom: 1px dashed transparent;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const CompanyIntroduction = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const KeyObjectivesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

const ObjectiveItem = styled.div`
  width: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;

const ObjectiveIcon = styled.div`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #ffd700;
`;

const ObjectiveTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const ObjectiveText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;


export default CPIntroduction;
