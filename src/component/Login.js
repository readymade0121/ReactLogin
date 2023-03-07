import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFunc } from "../redux/auth/authSlice";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginFunc(userName, password));
  };

  return (
    <div className="login">
      <div className="header">Sign In</div>
      <div className="content d-flex justify-content-center align-items-center">
        <form className="login-form">
          <input
            type="text"
            value={userName}
            className="form-control form-control"
            placeholder="Email"
            onChange={handleUserNameChange}
          />
          <input
            type="password"
            value={password}
            className="form-control form-control"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className="btn btn-primary btn-submit"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
