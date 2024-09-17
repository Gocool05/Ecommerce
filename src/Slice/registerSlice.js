// src/Slices/registerSlice.js

import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    isLoading: false,
    error: null,
    isOtpSent: false,
    isRegistered: false,
  },
  reducers: {
    registerRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess(state) {
      state.isLoading = false;
      state.isRegistered = true;
      state.isOtpSent = true; // Set to true after successful registration
    },
    registerFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    otpSent(state) {
      state.isOtpSent = true;
    },
    otpVerificationSuccess(state) {
      state.isOtpSent = false; // Clear OTP sent status after verification
    },
    otpVerificationFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  otpSent,
  otpVerificationSuccess,
  otpVerificationFailure,
} = registerSlice.actions;
export default registerSlice.reducer;
