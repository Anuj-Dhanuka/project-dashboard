import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

//Constants
import { defaultProposalId } from "../../../../../../utils/constants/index.js";

//Common Utils
import { getContrastBackground } from "../../../../../../utils/CommonUtils/commonFunctions";

// Redux
import {
  updateCoverImages,
  updateCoverSectionCustomStyles,
  updateCustomizeActiveElement,
} from "../../../../../../redux/slices";

//Global Components
import ColorPicker from "../../../../../../components/ColorPicker.js";

//Components
import CumstomizedElement from "../../../../../../components/CumstomizedElement.js";

function CoverCustomization({ rightSidebarRef }) {
  const dispatch = useDispatch();
  const cover = useSelector(
    (state) => state.createProposals.proposals[defaultProposalId].sections.cover
  );
  const sections = useSelector(
    (state) =>
      state.customizeContainer.coverSectionContainers.coverSectionSubContainers
  );

  const elements = useSelector(
    (state) =>
      state.customizeContainer.coverSectionContainers
        .coverSectionsElementContainers
  );
  const coverSectionCustomStyles = useSelector(
    (state) => state.createProposalsStyling.coverSectionCustomStyles
  );

  const activeSubSection = useSelector(
    (state) => state.customizeContainer.customizeActiveSubSection
  );
  const activeElement = useSelector(
    (state) => state.customizeContainer.customizeActiveElement
  );

  const {
    customCoverContainer,
    customSectionTitle,
    customSubtitle,
    customInfoTitle,
    customInfoText,
    customHexagonOuterWrapper,
  } = coverSectionCustomStyles;
  const { images } = cover;
  const { hexImages } = images;

  const [isBackgroundContainerOpen, setIsBackgroundContainerOpen] =
    useState(true);
  const [isHexImagesOpen, setIsHexImagesOpen] = useState(false);
  const [isHeaderContainerOpen, setIsHeaderContainerOpen] = useState(false);
  const [isInfoContainerOpen, setIsInfoContainerOpen] = useState(false);

  const [isTitleOpen, setIsTitleOpen] = useState(false);
  const [isSubTitleOpen, setIsSubTitleOpen] = useState(false);
  const [isInfoTitleOpen, setIsInfoTitleOpen] = useState(false);
  const [isInfoTextOpen, setIsInfoTextOpen] = useState(false);

  useEffect(() => {
    switch (activeSubSection) {
      case sections.COVERBACKGROUNDCONTAINER:
        setIsBackgroundContainerOpen(true);
        break;
      case sections.COVERHEADERCONTAINER:
        setIsHeaderContainerOpen(true);
        break;
      case sections.COVERINFOCONTAINER:
        setIsInfoContainerOpen(true);
        break;
      case sections.COVERHEXIMAGESCONTAINER:
        setIsHexImagesOpen(true);
        break;
      default:
        break;
    }
    switch (activeElement) {
      case elements.COVERTITLE:
        setIsTitleOpen(true);
        break;
      case elements.COVERSUBTITLE:
        setIsSubTitleOpen(true);
        break;
      case elements.COVERINFOTITLE:
        setIsInfoTitleOpen(true);
        break;
      case elements.COVERINFOTEXT:
        setIsInfoTextOpen(true);
        break;
      case elements.COVERHEXIMAGE:
        //logic
        break;
      default:
        break;
    }
  }, [activeSubSection, sections, activeElement, elements]);

  const handleStyleChange = (e, styleName, changeType, options = {}) => {
    let updatedField = {};

    switch (changeType) {
      case "lineHeight":
        updatedField = {
          [styleName]: {
            ...coverSectionCustomStyles[styleName],
            lineHeight: `${e.target.value}px`,
          },
        };
        break;
      case "fontSize":
        updatedField = {
          [styleName]: {
            ...coverSectionCustomStyles[styleName],
            fontSize: `${e.target.value}px`,
          },
        };
        break;
      case "fontWeight":
        updatedField = {
          [styleName]: {
            ...coverSectionCustomStyles[styleName],
            fontWeight: e.target.value,
          },
        };
        break;
      case "fontStyle":
        updatedField = {
          [styleName]: {
            ...coverSectionCustomStyles[styleName],
            fontStyle: e.target.value,
          },
        };
        break;
      case "color":
        const { backgroundPrimary, backgroundSecondary, backgroundColor } =
          options;
        if (backgroundPrimary) {
          updatedField = {
            [styleName]: {
              ...coverSectionCustomStyles[styleName],
              backgroundPrimary: e,
            },
          };
        } else if (backgroundSecondary) {
          updatedField = {
            [styleName]: {
              ...coverSectionCustomStyles[styleName],
              backgroundSecondary: e,
            },
          };
        } else if (backgroundColor) {
          updatedField = {
            [styleName]: {
              ...coverSectionCustomStyles[styleName],
              backgroundColor: e,
            },
          };
        } else {
          updatedField = {
            [styleName]: {
              ...coverSectionCustomStyles[styleName],
              color: e,
            },
          };
        }
        break;
      default:
        return;
    }

    dispatch(updateCoverSectionCustomStyles({ updatedField: updatedField }));
  };

  const handleHexImagesChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newHexImage = URL.createObjectURL(file);
      const updatedHexImages = [...hexImages];
      updatedHexImages[index] = newHexImage;
      dispatch(
        updateCoverImages({
          defaultProposalId,
          images: { ...images, hexImages: updatedHexImages },
        })
      );
    }
  };

  const toggleSection = (section, element = null) => {
    section((prevState) => !prevState);
    if (element) {
      dispatch(updateCustomizeActiveElement({ activeElement: element }));
    }
  };

  const handleImageClick = (element) => {
    dispatch(updateCustomizeActiveElement({ activeElement: element }));
  };

  return (
    <SectionWrapper>
      <SectionTitle>Cover Section</SectionTitle>
      <Header
        onClick={() => {
          toggleSection(setIsBackgroundContainerOpen);
        }}
        id={sections.COVERBACKGROUNDCONTAINER}
      >
        {/* Arrow icon rotates based on the section state */}
        {isBackgroundContainerOpen ? (
          <FaChevronDown color="#333" />
        ) : (
          <FaChevronRight color="#333" />
        )}{" "}
        {sections.COVERBACKGROUNDCONTAINER}
      </Header>
      {isBackgroundContainerOpen && (
        <BackgroundContainer>
          <Label1>Primary Background Color:</Label1>
          <ColorPickerContainer>
            <ColorPicker
              color={customCoverContainer.backgroundPrimary}
              onChangeComplete={handleStyleChange}
              styleName="customCoverContainer"
              changeType="color"
              options={{ backgroundPrimary: true }}
            />
            <ColorHexCode
              style={{
                color: customCoverContainer.backgroundPrimary,
                backgroundColor: getContrastBackground(
                  customCoverContainer.backgroundPrimary
                ),
              }}
            >
              {customCoverContainer.backgroundPrimary}
            </ColorHexCode>
          </ColorPickerContainer>

          <Label1>Secondary Background Color:</Label1>
          <ColorPickerContainer>
            <ColorPicker
              color={customCoverContainer.backgroundSecondary}
              onChangeComplete={handleStyleChange}
              styleName="customCoverContainer"
              changeType="color"
              options={{ backgroundSecondary: true }}
            />
            <ColorHexCode
              style={{
                color: customCoverContainer.backgroundSecondary,
                backgroundColor: getContrastBackground(
                  customCoverContainer.backgroundSecondary
                ),
              }}
            >
              {customCoverContainer.backgroundSecondary}
            </ColorHexCode>
          </ColorPickerContainer>
          <Header
            onClick={() => {
              toggleSection(setIsHeaderContainerOpen);
            }}
          >
            {/* Arrow icon rotates based on the section state */}
            {isHeaderContainerOpen ? (
              <FaChevronDown color="#333" />
            ) : (
              <FaChevronRight color="#333" />
            )}{" "}
            {sections.COVERHEADERCONTAINER}
          </Header>

          {isHeaderContainerOpen && (
            <HeaderContainer>
              <Element
                onClick={() => {
                  toggleSection(setIsTitleOpen, elements.COVERTITLE);
                }}
                $isElement={activeElement === elements.COVERTITLE}
              >
                {isTitleOpen ? (
                  <FaChevronDown color="#333" />
                ) : (
                  <FaChevronRight color="#333" />
                )}{" "}
                {elements.COVERTITLE}
              </Element>
              {isTitleOpen && (
                <CumstomizedElement
                  color={customSectionTitle.color}
                  fontSize={customSectionTitle.fontSize}
                  fontStyle={customSectionTitle.fontStyle}
                  fontWeight={customSectionTitle.fontWeight}
                  lineHeight={customSectionTitle.lineHeight}
                  styleName={"customSectionTitle"}
                  handleStyleChange={handleStyleChange}
                />
              )}

              <Element
                onClick={() => {
                  toggleSection(setIsSubTitleOpen, elements.COVERSUBTITLE);
                }}
                $isElement={activeElement === elements.COVERSUBTITLE}
              >
                {isSubTitleOpen ? (
                  <FaChevronDown color="#333" />
                ) : (
                  <FaChevronRight color="#333" />
                )}{" "}
                {elements.COVERSUBTITLE}
              </Element>
              {isSubTitleOpen && (
                <CumstomizedElement
                  color={customSubtitle.color}
                  fontSize={customSubtitle.fontSize}
                  fontStyle={customSubtitle.fontStyle}
                  fontWeight={customSubtitle.fontWeight}
                  lineHeight={customSubtitle.lineHeight}
                  styleName={"customSubtitle"}
                  handleStyleChange={handleStyleChange}
                />
              )}
            </HeaderContainer>
          )}

          <Header
            onClick={() => {
              toggleSection(setIsInfoContainerOpen);
            }}
          >
            {/* Arrow icon rotates based on the section state */}
            {isInfoContainerOpen ? (
              <FaChevronDown color="#333" />
            ) : (
              <FaChevronRight color="#333" />
            )}{" "}
            {sections.COVERINFOCONTAINER}
          </Header>

          {isInfoContainerOpen && (
            <HeaderContainer>
              <Element
                onClick={() => {
                  toggleSection(setIsInfoTitleOpen, elements.COVERINFOTITLE);
                }}
                $isElement={activeElement === elements.COVERINFOTITLE}
              >
                {isInfoTitleOpen ? (
                  <FaChevronDown color="#333" />
                ) : (
                  <FaChevronRight color="#333" />
                )}{" "}
                {elements.COVERINFOTITLE}
              </Element>
              {isInfoTitleOpen && (
                <CumstomizedElement
                  color={customInfoTitle.color}
                  fontSize={customInfoTitle.fontSize}
                  fontStyle={customInfoTitle.fontStyle}
                  fontWeight={customInfoTitle.fontWeight}
                  lineHeight={customInfoTitle.lineHeight}
                  styleName={"customInfoTitle"}
                  handleStyleChange={handleStyleChange}
                />
              )}

              <Element
                onClick={() => {
                  toggleSection(setIsInfoTextOpen, elements.COVERINFOTEXT);
                }}
                $isElement={activeElement === elements.COVERINFOTEXT}
              >
                {isInfoTextOpen ? (
                  <FaChevronDown color="#333" />
                ) : (
                  <FaChevronRight color="#333" />
                )}{" "}
                {elements.COVERINFOTEXT}
              </Element>
              {isInfoTextOpen && (
                <>
                  <CumstomizedElement
                    color={customInfoText.color}
                    fontSize={customInfoText.fontSize}
                    fontStyle={customInfoText.fontStyle}
                    fontWeight={customInfoText.fontWeight}
                    lineHeight={customInfoText.lineHeight}
                    styleName={"customInfoText"}
                    handleStyleChange={handleStyleChange}
                  />
                </>
              )}
            </HeaderContainer>
          )}

          <Header
            onClick={() => {
              toggleSection(setIsHexImagesOpen);
            }}
            $isElement={activeElement === elements.COVERHEXIMAGE}
          >
            {/* Arrow icon rotates based on the section state */}
            {isHexImagesOpen ? (
              <FaChevronDown color="#333" />
            ) : (
              <FaChevronRight color="#333" />
            )}{" "}
            {sections.COVERHEXIMAGESCONTAINER}
          </Header>

          {isHexImagesOpen && (
            <HeaderContainer>
              <Label1>Image Border Color:</Label1>
              <ColorPickerContainer>
                <ColorPicker
                  color={customHexagonOuterWrapper.backgroundColor}
                  onChangeComplete={handleStyleChange}
                  styleName="customHexagonOuterWrapper"
                  changeType="color"
                  options={{ backgroundColor: true }}
                />
                <ColorHexCode
                  style={{
                    color: customHexagonOuterWrapper.backgroundColor,
                    backgroundColor: getContrastBackground(
                      customHexagonOuterWrapper.backgroundColor
                    ),
                  }}
                >
                  {customHexagonOuterWrapper.backgroundColor}
                </ColorHexCode>
              </ColorPickerContainer>

              {hexImages.map((hexImage, index) => (
                <ImageRow
                  key={index}
                  onClick={() => handleImageClick(elements.COVERHEXIMAGE)}
                >
                  <ImagePreview src={hexImage} alt={`Hex Image ${index + 1}`} />
                  <FileInputContainer>
                    <Label>Change Image {index + 1}</Label>
                    <ImageInput
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleHexImagesChange(e, index)}
                    />
                  </FileInputContainer>
                </ImageRow>
              ))}
            </HeaderContainer>
          )}
        </BackgroundContainer>
      )}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  margin-bottom: 12px;
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  margin: 24px 0 10px;
  color: #333;
  font-weight: 600;
  padding-bottom: 6px;
  border-bottom: 2px solid #4a90e2;
`;

const Header = styled.p`
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$isElement ? "rgba(255, 99, 71, 0.1)" : "transparent"};
  box-shadow: ${(props) =>
    props.$isElement ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none"};
  border: ${(props) =>
    props.$isElement
      ? "1px solid rgba(255, 99, 71, 0.8)"
      : "1px solid transparent"};
  transition: background-color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;

  svg {
    margin-right: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: ${(props) =>
      props.$isElement ? "rgba(255, 99, 71, 0.15)" : "#f9f9f9"};
    box-shadow: ${(props) =>
      props.$isElement
        ? "0 6px 18px rgba(0, 0, 0, 0.15)"
        : "0 2px 8px rgba(0, 0, 0, 0.05)"};
  }
`;

const Element = styled.p`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$isElement ? "rgba(255, 99, 71, 0.1)" : "transparent"};
  box-shadow: ${(props) =>
    props.$isElement ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none"};
  border: ${(props) =>
    props.$isElement
      ? "1px solid rgba(255, 99, 71, 0.8)"
      : "1px solid transparent"};
  transition: background-color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;

  svg {
    margin-right: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: ${(props) =>
      props.$isElement ? "rgba(255, 99, 71, 0.15)" : "#f9f9f9"};
    box-shadow: ${(props) =>
      props.$isElement
        ? "0 6px 18px rgba(0, 0, 0, 0.15)"
        : "0 2px 8px rgba(0, 0, 0, 0.05)"};
  }
`;

const BackgroundContainer = styled.div`
  padding: 16px;
  transition: background 0.3s ease;
`;

const HeaderContainer = styled.div`
  padding: 10px;
`;

const ImageRow = styled.div`
  margin-bottom: 12px;
  margin-top: 12px;
  gap: 12px;
  max-width: 100%;
`;

const ImagePreview = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 8px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ddd;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Label = styled.label`
  font-size: 12px;
  color: #666;
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

const Label1 = styled.label`
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
  font-weight: 600;
`;

const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ColorHexCode = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: normal;
  text-transform: uppercase;
  padding: 8px 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: inline-block;
  min-width: 80px;
  text-align: center;
  transition: color 0.3s ease;
`;

export default CoverCustomization;
