import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaRocket, FaLightbulb, FaCogs } from "react-icons/fa";

//Common Utils //Constants
import {
  proposalPageWidth,
  defaultProposalId,
  createProposalInputWidth,
} from "../../../../utils/constants";

//Common Utils //Common Functions
import {
  saveCaretPosition,
  restoreCaretPosition,
} from "../../../../utils/CommonUtils/commonFunctions";

//Redux
import { updateWorkScope } from "../../../../redux/slices/createProposalsSlice.js";


const CPWorkScope = () => {
  const dispatch = useDispatch();

  const logoImage = useSelector(
    (state) => state.createProposals.proposals[defaultProposalId]?.logoImage
  );
  const workScopeSection = useSelector(
    (state) =>
      state.createProposals.proposals[defaultProposalId]?.sections.workScope
  );

  const { images, header, subHeader, timelineItems } = workScopeSection;
  const { item1, item2, item3 } = timelineItems;
  const { timeLineImages } = images;

  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const timeline1TitleRef = useRef(null);
  const timeline1DateRef = useRef(null);
  const timeline1DescriptionRef = useRef(null);
  const timeline2TitleRef = useRef(null);
  const timeline2DateRef = useRef(null);
  const timeline2DescriptionRef = useRef(null);
  const timeline3TitleRef = useRef(null);
  const timeline3DateRef = useRef(null);
  const timeline3DescriptionRef = useRef(null);

  const handleTextChange = (ref, field, timelineKey) => {
    const caretPosition = saveCaretPosition(ref.current);
    const updatedValue = ref.current.innerText;

    // Dispatch the updateWorkScope action
    dispatch(
      updateWorkScope({
        proposalId: defaultProposalId,
        ...(field === "header" && { header: updatedValue }),
        ...(field === "subHeader" && { subHeader: updatedValue }),
        ...(timelineKey && {
          timelineItems: {
            [timelineKey]: { [field]: updatedValue },
          },
        }),
      })
    );

    setTimeout(() => {
      restoreCaretPosition(ref.current, caretPosition);
    }, 0);
  };

  return (
    <WorkScopeContainer>
      <LogoContainer>
        <Logo src={logoImage} alt="PPC Roy Logo" />
      </LogoContainer>

      <InputTextContainer>
        <Header
          contentEditable
          suppressContentEditableWarning
          ref={headerRef}
          onInput={() => handleTextChange(headerRef, "header")}
        >
          {header}
        </Header>
        <SubHeader
          contentEditable
          suppressContentEditableWarning
          ref={subHeaderRef}
          onInput={() => handleTextChange(subHeaderRef, "subHeader")}
        >
          {subHeader}
        </SubHeader>
      </InputTextContainer>

      <DecorativeDivider />

      <TimelineContainer>
        <VerticalLine />

        {/* Timeline Item 1 */}
        <TimelineItem>
          <IconWrapper>
            <FaLightbulb />
          </IconWrapper>

          <TimelineContent>
            <TimelineTitle
              contentEditable
              suppressContentEditableWarning
              ref={timeline1TitleRef}
              onInput={() =>
                handleTextChange(timeline1TitleRef, "title", "item1")
              }
            >
              {item1.title}
            </TimelineTitle>
            <TimelineDate
              contentEditable
              suppressContentEditableWarning
              ref={timeline1DateRef}
              onInput={() =>
                handleTextChange(timeline1DateRef, "date", "item1")
              }
            >
              {item1.date}
            </TimelineDate>
            <TimelineDescription
              contentEditable
              suppressContentEditableWarning
              ref={timeline1DescriptionRef}
              onInput={() =>
                handleTextChange(
                  timeline1DescriptionRef,
                  "description",
                  "item1"
                )
              }
            >
              {item1.description}
            </TimelineDescription>
            <TimelineImage src={timeLineImages[0]} alt="Ideation" />
          </TimelineContent>
        </TimelineItem>

        {/* Timeline Item 2 */}
        <TimelineItem>
          <IconWrapper>
            <FaCogs />
          </IconWrapper>
          <TimelineContent>
            <TimelineTitle
              contentEditable
              suppressContentEditableWarning
              ref={timeline2TitleRef}
              onInput={() =>
                handleTextChange(timeline2TitleRef, "title", "item2")
              }
            >
              {item2.title}
            </TimelineTitle>
            <TimelineDate
              contentEditable
              suppressContentEditableWarning
              ref={timeline2DateRef}
              onInput={() =>
                handleTextChange(timeline2DateRef, "date", "item2")
              }
            >
              {item2.date}
            </TimelineDate>
            <TimelineDescription
              contentEditable
              suppressContentEditableWarning
              ref={timeline2DescriptionRef}
              onInput={() =>
                handleTextChange(
                  timeline2DescriptionRef,
                  "description",
                  "item2"
                )
              }
            >
              {item2.description}
            </TimelineDescription>
            <TimelineImage src={timeLineImages[1]} alt="Development" />
          </TimelineContent>
        </TimelineItem>

        {/* Timeline Item 3 */}
        <TimelineItem>
          <IconWrapper>
            <FaRocket />
          </IconWrapper>
          <TimelineContent>
            <TimelineTitle
              contentEditable
              suppressContentEditableWarning
              ref={timeline3TitleRef}
              onInput={() =>
                handleTextChange(timeline3TitleRef, "title", "item3")
              }
            >
              {item3.title}
            </TimelineTitle>
            <TimelineDate
              contentEditable
              suppressContentEditableWarning
              ref={timeline3DateRef}
              onInput={() =>
                handleTextChange(timeline3DateRef, "date", "item3")
              }
            >
              {item3.date}
            </TimelineDate>
            <TimelineDescription
              contentEditable
              suppressContentEditableWarning
              ref={timeline3DescriptionRef}
              onInput={() =>
                handleTextChange(
                  timeline3DescriptionRef,
                  "description",
                  "item3"
                )
              }
            >
              {item3.description}
            </TimelineDescription>
            <TimelineImage src={timeLineImages[2]} alt="Launch" />
          </TimelineContent>
        </TimelineItem>
      </TimelineContainer>
    </WorkScopeContainer>
  );
};

const WorkScopeContainer = styled.div`
  width: ${proposalPageWidth};
  margin: 30px auto;
  padding: 50px 36px;
  background: linear-gradient(135deg, #fefefe, #f4f6f7);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
    padding: 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 60px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
`;

const InputTextContainer = styled.div`
  width: ${createProposalInputWidth};
`;

const Header = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3436;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 1.5rem 0;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const SubHeader = styled.p`
  font-size: 1.2rem;
  color: #636e72;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 2rem;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const DecorativeDivider = styled.div`
  width: 70px;
  height: 5px;
  background: linear-gradient(to right, #1abc9c, #16a085);
  border-radius: 5px;
  margin: 1rem auto;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-left: 8px solid #1abc9c;
  position: relative;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1abc9c, #27ae60);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 1.6rem;
`;

const TimelineContent = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3436;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const TimelineDescription = styled.p`
  font-size: 1.1rem;
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

const TimelineDate = styled.span`
  font-size: 0.9rem;
  color: #888;
  font-style: italic;
  outline: none;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const TimelineImage = styled.img`
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 0.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #1abc9c, #50e3c2);
  opacity: 0.6;
  border-radius: 2px;
`;


export default CPWorkScope;
