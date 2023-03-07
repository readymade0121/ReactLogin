import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import navReducer from "./auth/navSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
  },
});
