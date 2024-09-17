import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ApiCaller from '../../../services/ApiCaller';
// import {initializeSocket} from '../CMS/ChatSlice';
import axios from 'axios';
// import {object} from 'yup';

// Initial state
const initialState = {
  user: {},
  token: null,
  loading: false,
  error: null,
  message: null,
  isAuthenticated: false,
};

// export const fetchUserData = createAsyncThunk(
//   'auth/fetchUserData',
//   async (_, {rejectWithValue}) => {
//     try {
//       const token = await AsyncStorage.getItem('accessToken');
//       if (!token) throw new Error('No token found');
//       const response = await ApiCaller.get('/user/profile/fetch', 'ums', token);
//       return response.data.data; // Return user data
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   },
// );


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = {};
      state.token = null;
      state.isAuthenticated = false;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder
   
      
  },
});

// Load token on startup
export const initializeAuth = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      await dispatch(setToken(token));
      // await dispatch(fetchUserData());
      // await dispatch(initializeSocket(token));
    } else {
      await dispatch(setAuthenticated(false));
    }
  } catch (error) {
    console.error('Failed to initialize auth:', error);
    await dispatch(setAuthenticated(false));
  }
};

export const {logout, setAuthenticated, setToken} = authSlice.actions;
export default authSlice.reducer;
