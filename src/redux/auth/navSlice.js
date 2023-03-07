import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serURI } from "../../config/url";

const initialState = {
  logoURL: "",
  date_time: "",
  error: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setURL: (state, action) => {
      state.logoURL = action.payload.logo;
      localStorage.setItem("logoURL", state.logoURL);
      state.date_time = action.payload.date_time;
    },
    getError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setURL, getError } = navSlice.actions;

export default navSlice.reducer;

// Redux Thunk function

export const fetchLogoImage = () => (dispatch) => {
  axios
    .get(`${serURI}/app/settings`)
    .then((res) => dispatch(setURL(res.data)))
    .catch((err) => dispatch(getError(err.response.data)));
};
