import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Slices/authSlice";
import postReducer from "./Slices/postSlice";
import userReducer from "./Slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
  },
});
