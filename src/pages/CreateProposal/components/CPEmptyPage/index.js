// DragAndDrop.js
import React from "react";
import styled from "styled-components";
import { useDroppable } from "@dnd-kit/core";

import { proposalPageWidth } from "../../../../utils/constants";

function CPDragAndDrop({ id, children }) {
  const { setNodeRef } = useDroppable({ id });
  const style = {
    minHeight: "100vh",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default function EmptyPage({ droppedItems }) {
  return (
    <Container>
      <div>
        <CPDragAndDrop id="drop-section">
          <h3>Drop Section</h3>
          {droppedItems.length > 0 &&
            droppedItems.map((item, index) => <div key={index}>{item}</div>)}
        </CPDragAndDrop>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: ${proposalPageWidth};
  height: 100vh;
  background: linear-gradient(135deg, #fefefe, #f4f6f7);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  padding: 50px 36px;
`;
