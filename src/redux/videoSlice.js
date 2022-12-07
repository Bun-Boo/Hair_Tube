import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  isFetching: false,
  error: false,
};
export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = true;
      state.currentVideo = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentVideo = null;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  videoSlice.actions;

export default videoSlice.reducer;
