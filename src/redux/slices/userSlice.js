import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "PPC ROY",
    loggedInUser: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userName = action.payload;
            state.loggedInUser = true;
          },
          logout: (state) => {
            state.userName = null;
            state.loggedInUser = false;
          },
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer