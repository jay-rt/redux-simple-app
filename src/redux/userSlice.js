import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: { name: "anna", email: "anna@gmail.com" },
    pending: null,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = null;
    },
  },
});

export const username = (state) => state.user.userInfo.name;
export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
