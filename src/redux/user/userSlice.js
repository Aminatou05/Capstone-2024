import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

// Create a user slice with reducer functions
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Reducer for when sign-in operation starts
    signInStart: (state) => {
      state.loading = true;
    },
    // Reducer for successful sign-in
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    // Reducer for sign-in failure
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // Reducer for when update user operation starts
    updateUserStart: (state) => {
      state.loading = true;
    },
    // Reducer for successful user update
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    // Reducer for user update failure
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // Reducer for when delete user operation starts
    deleteUserStart: (state) => {
      state.loading = true;
    },
    // Reducer for successful user deletion
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    // Reducer for user deletion failure
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // Reducer for when sign-out operation starts
    signOutUserStart: (state) => {
      state.loading = true;
    },
    // Reducer for successful sign-out
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    // Reducer for sign-out failure
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Export the action creators and the reducer function
export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOutUserFailure,
  signOutUserSuccess,
  signOutUserStart,
} = userSlice.actions;

export default userSlice.reducer;

