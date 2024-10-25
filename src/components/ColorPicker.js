// ColorPicker.js
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import PropTypes from "prop-types";

const ColorPicker = ({
  color = "#FFFFFF",
  onChangeComplete = () => {},
  styleName = null,
  changeType=null,
  options={}
}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const toggleColorPicker = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleColorChange = (color) => {
    console.log(color.hex);
    // Pass the selected color to the parent via onChangeComplete
    onChangeComplete(color.hex, styleName, changeType, options);
  };

  return (
    <ColorInputWrapper>
      <ColorPreview $color={color} onClick={toggleColorPicker} />
      {displayColorPicker && (
        <PickerOverlay>
          <SketchPicker
            color={color}
            onChangeComplete={handleColorChange}
            width="400px"
            disableAlpha
          />
          {/* Button to close the color picker */}
          <CloseButton onClick={toggleColorPicker}>Close</CloseButton>
        </PickerOverlay>
      )}
    </ColorInputWrapper>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string,
  onChangeComplete: PropTypes.func,
  setState: PropTypes.func,
};

// Styled components
const ColorInputWrapper = styled.div`
 
`;

const ColorPreview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background-color: ${(props) => props.$color};
  cursor: pointer;
  border: 1px solid #ddd;
  transition: all 0.3s ease;

  &:hover {
    border: 2px solid #4a90e2;  /* Thicker border on hover */
    transform: scale(1.05);     /* Slight zoom effect */
  }
`;


const PickerOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #357ab8;
  }
`;

export default ColorPicker;
