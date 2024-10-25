import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customizeActiveSection: "Cover",
  customizeActiveSubSection: null,
  customizeActiveElement: null,
  createProposalsSectionIds: {
    COVER: "Cover",
    INTRODUCTION: "Introduction",
    WORKSCOPE: "WorkScope",
    INVESTMENTPLAN: "InvestmentPlan",
    AGREEMENT: "Agreement",
    NEXTSTEPS: "NextSteps",
    THANKYOUANDSERVICES: "ThankYouAndServices",
  },
  coverSectionContainers: {
    coverSectionSubContainers: {
      COVERBACKGROUNDCONTAINER: "Cover Background Container",
      COVERHEADERCONTAINER: "Cover Header Container",
      COVERINFOCONTAINER: "Cover Info Container",
      COVERHEXIMAGESCONTAINER: "Cover Hex Images Container",
    },
    coverSectionsElementContainers: {
      COVERTITLE: "Cover Title",
      COVERSUBTITLE: "Cover Sub Title",
      COVERINFOTITLE: "Cover Info Title",
      COVERINFOTEXT: "Cover Info Text",
      COVERHEXIMAGE: "Cover Hexagon Container",
    },
  },
};

const customizeContainerSlice = createSlice({
  name: "customizeContainer",
  initialState,
  reducers: {
    updateCustomizeActiveSection: (state, action) => {
      state.customizeActiveSection = action.payload;
    },
    updateCustomizeActiveSubSection: (state, action) => {
      const { activeSubSection } = action.payload;
      const coverSectionIds = Object.values(
        state.coverSectionContainers.coverSectionSubContainers
      );
      if (coverSectionIds.includes(activeSubSection)) {
        state.customizeActiveSection = "Cover";
        state.customizeActiveSubSection = activeSubSection;
      }
    },
    updateCustomizeActiveElement: (state, action) => {
      const { activeElement } = action.payload;
      if (["Cover Title", "Cover Sub Title"].includes(activeElement)) {
        state.customizeActiveSection = "Cover";
        state.customizeActiveSubSection = "Cover Header Container";
        state.customizeActiveElement = activeElement;
      }
      if (["Cover Info Title", "Cover Info Text"].includes(activeElement)) {
        state.customizeActiveSection = "Cover";
        state.customizeActiveSubSection = "Cover Info Container";
        state.customizeActiveElement = activeElement;
      }
      if (["Cover Hexagon Container"].includes(activeElement)) {
        state.customizeActiveSection = "Cover";
        state.customizeActiveSubSection = "Cover Hex Images Container";
        state.customizeActiveElement = activeElement;
      }
    },
  },
});

export const {
  updateCustomizeActiveSection,
  updateCustomizeActiveSubSection,
  updateCustomizeActiveElement,
} = customizeContainerSlice.actions;

export default customizeContainerSlice.reducer;
