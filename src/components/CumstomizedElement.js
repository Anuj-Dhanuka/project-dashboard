import React from "react";
import styled from "styled-components";

//Global Components
import ColorPicker from "./ColorPicker";

//Common Utils //Common Functions
import { getContrastBackground } from "../utils/CommonUtils/commonFunctions";

function CumstomizedElement({
  color,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  styleName,
  handleStyleChange,
}) {
  return (
    <ElementContainer>
      <Label1>Text Color:</Label1>
      <ColorPickerContainer>
        <ColorPicker
          color={color}
          onChangeComplete={handleStyleChange}
          styleName={styleName}
          changeType="color"
        />
        <ColorHexCode
          style={{
            color: color,
            backgroundColor: getContrastBackground(color),
          }}
        >
          {color}
        </ColorHexCode>
      </ColorPickerContainer>
      <Label1>Font Size:</Label1>
      <NumberInput
        type="number"
        name="fontSize"
        value={parseInt(fontSize, 10)}
        onChange={(e) => handleStyleChange(e, styleName, "fontSize")}
      />
      <Label1>Font Weight:</Label1>
      <SelectInput
        name="fontWeight"
        value={fontWeight}
        onChange={(e) =>
          handleStyleChange(e, styleName, "fontWeight")
        }
      >
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">normal</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">bold</option>
        <option value="800">800</option>
        <option value="900">900</option>
      </SelectInput>

      <Label1>Line Height:</Label1>
      <NumberInput
        type="number"
        name="lineHeight"
        step="1"
        value={parseInt(lineHeight, 10)}
        onChange={(e) =>
          handleStyleChange(e, styleName, "lineHeight")
        }
      />
      <Label1>Font Style:</Label1>
      <FontStyleSelect
        name="fontStyle"
        value={fontStyle}
        onChange={(e) =>
          handleStyleChange(e, styleName, "fontStyle")
        }
      >
        <option value="normal">Normal</option>
        <option value="italic">Italic</option>
        <option value="oblique">Oblique</option>
      </FontStyleSelect>
    </ElementContainer>
  );
}

const ElementContainer = styled.div`
  margin-top: 10px;
  padding: 16px;
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

const NumberInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #333;
  background-color: #f8f8f8;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
    outline: none;
  }

  &:hover {
    border-color: #4a90e2;
  }
`;

const SelectInput = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #333;
  background-color: #f8f8f8;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #4a90e2; // Change border color on hover
  }

  &:focus {
    outline: none;
    border-color: #4a90e2; // Highlight the border on focus
  }
`;

const FontStyleSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #333;
  background-color: #f8f8f8;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
    outline: none;
  }

  &:hover {
    border-color: #4a90e2;
  }
`;

export default CumstomizedElement;
