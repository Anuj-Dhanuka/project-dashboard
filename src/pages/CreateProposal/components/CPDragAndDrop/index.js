// DroppableArea.js
import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function CPDragAndDrop({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    minHeight: "200px",
    border: "2px dashed #aaa",
    borderRadius: "4px",
    padding: "16px",
    backgroundColor: isOver ? "#e0ffe0" : "#f0f0f0",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
