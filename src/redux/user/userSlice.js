import { createSlice } from '@reduxjs/toolkit';


// Define the initial state for the user slice
const initialState = {
    currentUser: null, // Current user data
    error: null,   // Error message
    loading: false,   // Loading state indicator
};
// Create a slice for the user state
const userSlice = createSlice({
    name: 'user',     // Name of the slice
    initialState,      // Initial state
    reducers: {
        // Reducer for starting a sign-in action
        signInStart: (state) => {
            state.loading = true;  // Set loading to true
        },
            // Reducer for successful sign-in
    signInSuccess: (state, action) => {
        state.currentUser = action.payload;  // Update current user data
        state.loading = false;  // Set loading to false
        state.error = null;  // Reset error
    },
      // Reducer for sign-in failure
      signInFailure: (state, action) => {
        state.error = action.payload; // Set error message
        state.loading = false;   // Set loading to false

      }

    }
});
// Export the slice's actions and reducer
export const {signInStart, signInSuccess, signInFailure} = userSlice.actions;


export default userSlice.reducer;
