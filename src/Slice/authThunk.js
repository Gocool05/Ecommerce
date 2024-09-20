// src/Slice/authThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../Utils/api';
import { loginSuccess, } from './authSlice';
import { setCartItems } from './cartSlice';
import { registerSuccess } from './registerSlice';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginData, { dispatch, rejectWithValue }) => {
    try {
      const res = await api.post('/api/auth/local', loginData);
      const { jwt, user } = res.data;
      console.log(jwt,user,'USER DETAILS');
      localStorage.setItem('LoginJWT', jwt);
      localStorage.setItem('UserName', user.username);
      localStorage.setItem('UserEmail', user.email);
      localStorage.setItem('UserNumber', user.PhoneNumber);
      localStorage.setItem('LoginUserId', user.id);
      dispatch(loginSuccess({ token: jwt, user }));
      // Fetch user cart
      const cartRes = await api.get(`/api/users/${user.id}?populate=cart`);
      dispatch(setCartItems(cartRes.data?.cart || []));
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (registerData, { dispatch, rejectWithValue }) => {
    try {
      const res = await api.post('/api/auth/local/register', registerData);
      dispatch(registerSuccess(res.data));
      console.log(res.data,'user Details')
      const isConfirmed = res.data?.user?.confirmed ;
        localStorage.setItem('RegUserId',res.data?.user?.id);
        localStorage.setItem('RegJWT',res.data?.jwt);
        localStorage.setItem('RegConfirmed',isConfirmed);
        localStorage.setItem('RegEmail',res.data?.user?.email);
        localStorage.setItem('RegName',res.data?.user?.username);
        localStorage.setItem('RegNumber',res.data?.user?.PhoneNumber);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (otpData, { rejectWithValue }) => {
    try {
      const res = await api.post('/api/auth/verifyOTP', otpData);
      console.log(res.error,'Verify Otp')
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const resendOtp = createAsyncThunk(
  'auth/resendOtp',
  async (otpData, { rejectWithValue }) => {
    try {
      const res = await api.post('/api/auth/resendOtp', otpData);
      console.log(res,'Resnd OTP Response');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
