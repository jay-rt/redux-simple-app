import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("user/update", async (user) => {
  const res = await axios.post(
    "http://localhost:8000/api/users/7/update",
    user
  );
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: { name: "anna", email: "anna@gmail.com" },
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser2.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(updateUser2.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.pending = false;
      })
      .addCase(updateUser2.rejected, (state) => {
        state.pending = null;
        state.error = true;
      });
  },
});

export const username = (state) => state.user.userInfo.name;
// export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
