import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

//Common Utils //Constants
import {
  proposalPageWidth,
  createProposalInputWidth,
  defaultProposalId,
} from "../../../../utils/constants";

//Common Functions
import {
  saveCaretPosition,
  restoreCaretPosition,
  handleKeyDown,
} from "../../../../utils/CommonUtils/commonFunctions";

//Redux
import { updateCoverContent } from "../../../../redux/slices/createProposalsSlice.js";
import { updateCustomizeActiveElement } from "../../../../redux/slices/index.js";

const CPCoverSection = () => {
  const dispatch = useDispatch();

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const infoTitleRef = useRef(null);
  const infoTextRef1 = useRef(null);
  const infoTextRef2 = useRef(null);

  const customStyles = useSelector(
    (state) => state.createProposalsStyling.coverSectionCustomStyles
  );
  const sections = useSelector(
    (state) => state.customizeContainer.coverSectionContainers.coverSectionSubContainers
  );
  const elements = useSelector(
    (state) => state.customizeContainer.coverSectionContainers.coverSectionsElementContainers
  );
  const activeElement = useSelector(
    (state) => state.customizeContainer.customizeActiveElement
  );
  const logoImage = useSelector(
    (state) => state.createProposals.proposals[defaultProposalId]?.logoImage
  );
  const coverSection = useSelector(
    (state) =>
      state.createProposals.proposals[defaultProposalId]?.sections.cover
  );

  const {
    customCoverContainer,
    customSectionTitle,
    customSubtitle,
    customInfoTitle,
    customInfoText,
    customHexagonOuterWrapper,
    customHexagonImageContainer,
  } = customStyles;

  const { images, content } = coverSection;
  const { hexImages } = images;
  const { title, subtitle, infoTitle, infoText1, infoText2 } = content; 

  useEffect(() => {
    if (activeElement === elements.COVERTITLE && titleRef.current) {
      titleRef.current.focus();
    } else if (activeElement === elements.COVERSUBTITLE && subtitleRef.current) {
      subtitleRef.current.focus();
    } else if (activeElement === elements.COVERINFOTITLE && infoTitleRef.current) {
      infoTitleRef.current.focus();
    } else if (activeElement === elements.COVERINFOTEXT && infoTextRef1.current) {
      infoTextRef1.current.focus();
    }
  }, [activeElement, elements]);

  const handleTextChange = (ref, key) => {
    const caretPosition = saveCaretPosition(ref.current);

    const updatedContent = { ...content, [key]: ref.current.textContent };
    dispatch(
      updateCoverContent({
        proposalId: defaultProposalId,
        updatedFields: { content: updatedContent },
      })
    );

    setTimeout(() => {
      restoreCaretPosition(ref.current, caretPosition);
    }, 0);
  };

  const handleElementClick = (id) => {
    dispatch(updateCustomizeActiveElement({activeElement: id}))
  }

  return (
    <CoverContainer
      id={sections.COVERBACKGROUNDCONTAINER}
      $customCoverContainer={customCoverContainer}
    >
      {/* Company Logo */}
      <LogoContainer>
        <Logo src={logoImage} alt="Company Logo" />
      </LogoContainer>

      {/* Title and subtitle text */}
      <ContenAndImageWrapper>
        <ContentContainer id={sections.COVERHEADERCONTAINER}>
          <SectionTitle
            id={elements.COVERTITLE}
            contentEditable
            suppressContentEditableWarning={true}
            ref={titleRef}
            onInput={() => handleTextChange(titleRef, "title")}
            onClick={() => handleElementClick(elements.COVERTITLE)}
            onKeyDown={(e) =>
              handleKeyDown(e, titleRef, "title", handleTextChange)
            }
            $customSectionTitle={customSectionTitle}
          >
            {title}
          </SectionTitle>

          <Subtitle
            contentEditable
            id={elements.COVERSUBTITLE}
            suppressContentEditableWarning={true}
            ref={subtitleRef}
            onInput={() => handleTextChange(subtitleRef, "subtitle")}
            onClick={() => handleElementClick(elements.COVERSUBTITLE)}
            onKeyDown={(e) =>
              handleKeyDown(e, subtitleRef, "subtitle", handleTextChange)
            }
            $customSubtitle={customSubtitle}
          >
            {subtitle}
          </Subtitle>
        </ContentContainer>

        {/* Hexagon blocks */}
        <HexagonWrapper id={sections.COVERHEXIMAGESCONTAINER} onClick={() => handleElementClick(elements.COVERHEXIMAGE)}>
          <HexagonOuterWrapper
            $customHexagonOuterWrapper={customHexagonOuterWrapper}
          >
            <HexagonImageContainer $customHexagonImageContainer={customHexagonImageContainer}>
              <HexagonImage src={hexImages[0]} alt="Hex Image 1" />
            </HexagonImageContainer>
          </HexagonOuterWrapper>

          <HexagonImageWrapper1>
            <HexagonOuterWrapper
              $customHexagonOuterWrapper={customHexagonOuterWrapper}
            >
              <HexagonImageContainer $customHexagonImageContainer={customHexagonImageContainer}>
                <HexagonImage src={hexImages[1]} alt="Hex Image 2" />
              </HexagonImageContainer>
            </HexagonOuterWrapper>

            <HalfHexagonOuterWrapper
              $customHexagonOuterWrapper={customHexagonOuterWrapper}
            >
              <HalfHexagonImageContainer $customHexagonImageContainer={customHexagonImageContainer}>
                <HalfHexagonImage src={hexImages[2]} alt="Hex Image 3" />
              </HalfHexagonImageContainer>
            </HalfHexagonOuterWrapper>
          </HexagonImageWrapper1>

          <HexagonImageWrapper2>
            <HexagonOuterWrapper
              $customHexagonOuterWrapper={customHexagonOuterWrapper}
            >
              <HexagonImageContainer $customHexagonImageContainer={customHexagonImageContainer}>
                <HexagonImage src={hexImages[3]} alt="Hex Image 4" />
              </HexagonImageContainer>
            </HexagonOuterWrapper>
          </HexagonImageWrapper2>
        </HexagonWrapper>
      </ContenAndImageWrapper>

      <InfoContainer id={sections.COVERINFOCONTAINER}>
        <InfoTitle
          contentEditable
          id={elements.COVERINFOTITLE}
          suppressContentEditableWarning={true}
          ref={infoTitleRef}
          onInput={() => handleTextChange(infoTitleRef, "infoTitle")}
          onClick={() => handleElementClick(elements.COVERINFOTITLE)}
          onKeyDown={(e) =>
            handleKeyDown(e, infoTitleRef, "infoTitle", handleTextChange)
          }
          $customInfoTitle={customInfoTitle}
        >
          {infoTitle}
        </InfoTitle>
        <InfoText
          contentEditable
          id={elements.COVERINFOTEXT}
          suppressContentEditableWarning={true}
          ref={infoTextRef1}
          onInput={() => handleTextChange(infoTextRef1, "infoText1")}
          onClick={() => handleElementClick(elements.COVERINFOTEXT)}
          onKeyDown={(e) =>
            handleKeyDown(e, infoTextRef1, "infoText1", handleTextChange)
          }
          $customInfoText={customInfoText}
        >
          {infoText1}
        </InfoText>
        <InfoText
          contentEditable
          id={elements.COVERINFOTEXT}
          suppressContentEditableWarning={true}
          ref={infoTextRef2}
          onInput={() => handleTextChange(infoTextRef2, "infoText2", elements.COVERINFOTEXT)}
          onClick={() => handleElementClick(elements.COVERINFOTEXT)}
          onKeyDown={(e) =>
            handleKeyDown(e, infoTextRef2, "infoText2", handleTextChange)
          }
          $customInfoText={customInfoText}
        >
          {infoText2}
        </InfoText>
      </InfoContainer>
    </CoverContainer>
  );
};

const CoverContainer = styled.div`
  width: ${proposalPageWidth};
  min-height: 100vh;
  font-family: ;
  border: 1px solid
    ${(props) => props.$customCoverContainer.borderColor || "#003366"};
  background: linear-gradient(
    135deg,
    ${(props) => props.$customCoverContainer.backgroundPrimary || "#003366"} 50%,
    ${(props) => props.$customCoverContainer.backgroundSecondary || "#f0f4f8"}
      50%
  );
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 36px;
  box-sizing: border-box;
  position: relative;
`;

const LogoContainer = styled.div`
  align-self: flex-start;
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 30px;
  border-radius: 100px;
`;

const ContenAndImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  flex: 1.2;
`;

const SectionTitle = styled.h1`
  width: 340px;
  color: ${(props) => props.$customSectionTitle.color || "#FFFFFF"};
  font-size: ${(props) => props.$customSectionTitle.fontSize || "1.5rem"};
  margin-bottom: 10px;
  line-height: ${(props) => props.$customSectionTitle.lineHeight || "2.5rem"};
  outline: none;
  font-family: inherit;
  font-weight: ${(props) => props.$customSectionTitle.fontWeight || "bold"};
  font-style: ${(props) => props.$customSectionTitle.fontStyle || "normal"};
  border-bottom: 1px dashed transparent;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #1abc9c;
  }
`;

const Subtitle = styled.p`
  width: 340px;
  color: ${(props) => props.$customSubtitle.color || "#1abc9c"};
  font-size: ${(props) => props.$customSubtitle.fontSize || "1.1rem"};
  margin-bottom: 40px;
  line-height: ${(props) => props.$customSubtitle.lineHeight || "2rem"};
  outline: none;
  font-family: inherit;
  font-weight: ${(props) => props.$customSubtitle.fontWeight || "normal"};
  font-style: ${(props) => props.$customSubtitle.fontStyle || "normal"};
  text-transform: none;
  border-bottom: 1px dashed transparent;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #1abc9c;
  }
`;

const HexagonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 30px;
  position: relative;
`;

const HexagonOuterWrapper = styled.div`
  width: 210px;
  height: 260px;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background-color: ${(props) =>
    props.$customHexagonOuterWrapper.backgroundColor || "#3498db"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
`;

const HexagonImageContainer = styled.div`
  width: 200px;
  height: 250px;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background-color: ${(props) => props.$customHexagonImageContainer.backgroundColor || "#f0f4f8"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HalfHexagonOuterWrapper = styled.div`
  width: 105px;
  height: 260px;
  padding: 3px;
  background-color: ${(props) =>
    props.$customHexagonOuterWrapper.backgroundColor || "#3498db"};
  clip-path: polygon(0% 25%, 0% 75%, 100% 100%, 100% 0%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HalfHexagonImageContainer = styled.div`
  width: 100px;
  height: 250px;
  clip-path: polygon(0% 25%, 0% 75%, 100% 100%, 100% 0%);
  background-color: #f0f4f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HexagonImageWrapper1 = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 180px;
`;

const HexagonImageWrapper2 = styled.div`
  margin-top: 115px;
`;

const HexagonImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
`;

const HalfHexagonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(0% 25%, 0% 75%, 100% 100%, 100% 0%);
`;

const InfoContainer = styled.div`
  width: ${createProposalInputWidth};
  align-self: flex-start;
  color: #ffffff;
`;

const InfoTitle = styled.h2`
  font-size: ${(props) => props.$customInfoTitle.fontSize || "1.8rem"};
  color: ${(props) => props.$customInfoTitle.color || "#1abc9c"};
  font-weight: ${(props) => props.$customInfoTitle.fontWeight || "bold"};
  line-height: ${(props) => props.$customInfoTitle.lineHeight || "2rem"};
  font-style: ${(props) => props.$customInfoTitle.fontStyle || "normal"};
  margin-bottom: 10px;
  width: 100%;
  outline: none;
  border-bottom: 1px dashed transparent;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #1abc9c;
  }
`;

const InfoText = styled.p`
  font-size: ${(props) => props.$customInfoText.fontSize || "1.2rem"};
  color: ${(props) => props.$customInfoText.color || "#2c3e50"};
  width: 100%;
  outline: none;
  line-height: ${(props) => props.$customInfoText.lineHeight || "1.8rem"};
  font-weight: ${(props) => props.$customInfoText.fontWeight || "normal"};
  font-style: ${(props) => props.$customInfoText.fontStyle || "normal"};
  font-family: inherit;
  border-bottom: 1px dashed transparent;
  cursor: text;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: normal;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

export default CPCoverSection;
