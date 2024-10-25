export const saveCaretPosition = (el) => {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  return {
    node: range.startContainer,
    offset: range.startOffset,
  };
};

export const restoreCaretPosition = (el, savedPosition) => {
  const selection = window.getSelection();
  const range = document.createRange();
  range.setStart(savedPosition.node, savedPosition.offset);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
};

const insertLineBreak = (ref, handleTextChange) => {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0); // Get the current range (caret position)

  const br = document.createElement("br"); // Create a <br> element
  range.deleteContents(); // Remove any selected content

  range.insertNode(br); // Insert the <br> element at the caret position

  // Move the caret after the newly inserted <br> element
  range.setStartAfter(br);
  range.setEndAfter(br);
  selection.removeAllRanges();
  selection.addRange(range);

  // Call the text update handler to save the new content
  handleTextChange(ref);
};

export const handleKeyDown = (e, ref, key, handleTextChange) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent default behavior of Enter key

    // Insert a line break using the new function
    insertLineBreak(ref, handleTextChange);

    // Call the text update handler to save the new content
    handleTextChange(ref, key);
  }
};

export const getContrastBackground = (hexColor) => {
  // Remove the hash if it's there
  const color = hexColor.replace("#", "");
  
  // Convert hex to RGB
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);

  // Calculate luminance (brightness)
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Return black background for light text colors, white for dark text colors
  return luminance > 186 ? "#333366" : "#FFFFFF";
};