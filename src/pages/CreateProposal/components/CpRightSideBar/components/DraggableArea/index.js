// DraggableComponents.js
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import CPDragAndDrop from "../../../CPDragAndDrop";

export function DraggableInputField({ id, placeholder }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "grab",
    marginBottom: "8px",
    backgroundColor: "white",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export function DraggableTextArea({ id, placeholder }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "grab",
    marginBottom: "8px",
    backgroundColor: "white",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <textarea placeholder={placeholder} rows="3" style={{ width: "100%" }} />
    </div>
  );
}

export function DraggableCheckbox({ id, label }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "grab",
    marginBottom: "8px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <input type="checkbox" />
      <label style={{ marginLeft: "8px" }}>{label}</label>
    </div>
  );
}

export default function DraggableArea() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {/* Draggable Area with Multiple Field Types */}
        <CPDragAndDrop id="drag-section">
          <h3>Drag Section</h3>
          <DraggableInputField id="input-field" placeholder="Input Field" />
          <DraggableTextArea id="text-area" placeholder="Text Area" />
          <DraggableCheckbox id="checkbox" label="Checkbox" />
        </CPDragAndDrop>
      </div>
    </>
  );
}
