
//use this for my redux set up https://redux-toolkit.js.org/tutorials/quick-start
//going to add redux so i  can have access to user data and differrent  places within my application
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice';

// This function creates a Redux store with an empty root reducer and customizes the default middleware
// to disable the serializability check for actions and state.
export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
