import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coverSectionCustomStyles: {
    customCoverContainer: {
      background: "linear-gradient(135deg, #003366 50%, #f0f4f8 50%)",
      backgroundPrimary: "#003366",
      backgroundSecondary: "#f0f4f8",
      borderColor: "#003366",
    },
    customSectionTitle: {
      color: "#ffffff",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "40px",
      fontStyle: "normal",
    },
    customSubtitle: {
      color: "#1abc9c",
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "32px",
      fontStyle: "normal",
    },
    customInfoTitle: {
      color: "#1abc9c",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "32px",
      fontStyle: "normal",
    },
    customInfoText: {
      color: "#2c3e50",
      fontSize: "18px",
      lineHeight: "30px",
      fontWeight: "400",
      fontStyle: "normal",
    },
    customHexagonOuterWrapper: {
      backgroundColor: "#3498db",
    },
    customHexagonImageContainer: {
      backgroundColor: "#f0f4f8",
    },
  },
};

const createProposalsStylingSlice = createSlice({
  name: "createProposalsStyling",
  initialState,
  reducers: {
    updateCoverSectionCustomStyles: (state, action) => {
      const { updatedField } = action.payload;
  
      state.coverSectionCustomStyles = {
        ...state.coverSectionCustomStyles,
        ...updatedField,
      };
    },
  },
});

export const { updateCoverSectionCustomStyles } =
  createProposalsStylingSlice.actions;

export default createProposalsStylingSlice.reducer;
