import { configureStore, combineReducers } from "@reduxjs/toolkit";

//Reducers
import userReducer from "./slices/userSlice";
import createProposalsReducer from "./slices/createProposalsSlice";
import createProposalsStylingReducer from "./slices/customizedSectionSlices/createProposalsStylingSlice";
import customizeContainerReducer from "./slices/customizedSectionSlices/customizeContainersSlice";

const rootReducer = combineReducers({
  user: userReducer,
  createProposals: createProposalsReducer,
  createProposalsStyling: createProposalsStylingReducer,
  customizeContainer: customizeContainerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
