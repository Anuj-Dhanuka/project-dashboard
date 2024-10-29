import React from "react";
import styled from "styled-components";
import { FaGripVertical } from "react-icons/fa";

function DragableItems({ id, icon, label }) {
 

  return (
    <BlockOption>
      <BlockContent>
        {icon} {label}
      </BlockContent>
      <HoverDragIcon>
        <FaGripVertical size={16} />
      </HoverDragIcon>
    </BlockOption>
  );
}

// Styled components (same as before)

const BlockOption = styled.div`
  background: linear-gradient(145deg, #e0e5ec, #ffffff);
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 16px;
  border-radius: 12px;
  text-align: center;
  cursor: grab;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 16px;
  color: #4a4a4a;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 130px;

  &:hover {
    background: #4a90e2;
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.98);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const BlockContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HoverDragIcon = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease;

  ${BlockOption}:hover & {
    opacity: 1;
  }
`;

export default DragableItems;
