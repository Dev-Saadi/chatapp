import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.userInfo = action.payload;
    },
    userLoggedOut: (state) => {
      state.userInfo = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
