import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serURI } from "../../config/url";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("User");
      state.isAuthenticated = true;
      state.user = action.payload.user;
      localStorage.setItem("user", state.user);
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    getError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, getError } = authSlice.actions;

export default authSlice.reducer;

// Redux Thunk function
export const loginFunc = (username, password) => (dispatch) => {
  console.log(username);
  console.log(password);
  debugger;
  axios
    .post(`${serURI}/users/login?username=${username}&password=${password}`)
    .then((res) => dispatch(login(res.data)))
    .catch((err) => dispatch(getError(err.response.data)));
};


export const checkSession = ()=>(dispatch) => {
  
  axios
    .get(`${serURI}/users/session`)
    .then((res) => dispatch(login(res.data)))
    .catch((err) => dispatch(logout(err.response.data)));
};


export const logoutFunc = () => (dispatch) => {
  axios
    .get(`${serURI}/users/logout`)
    .then((res) => dispatch(logout(res.data)))
    .catch((err) => dispatch(getError(err.response.data)));
};
