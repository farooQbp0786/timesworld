import { createSlice } from "@reduxjs/toolkit";
import { getCountryList } from "../services/api";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, user: null },
  countryList: [],
  sliderImages: [],
  reducers: {
    loginValue: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountryList.fulfilled, (state, { payload }) => {
      state.countryList = payload
      state.sliderImages = payload?.map((item) => item?.flag)
    })
  }
});

export const { loginValue, logout } = authSlice.actions;
export default authSlice.reducer;
