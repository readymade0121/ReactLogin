import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogoImage } from "../redux/auth/navSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  // const logoURL = localStorage.getItem("logoURL");


  const isLogin = !!localStorage.getItem("user");

  useEffect(() => {
    const logoURL = useSelector((nav)=>{
      nav.logoURL.value
    });
    dispatch(fetchLogoImage());
  }, []);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white justify-content-between">
      <div className="logoImg">
        <a className="navbar-brand" href="#">
          <img src={`${logoURL}`} alt={"Logo Image"} height="50vh" />
        </a>
      </div>
      <div className="btnMenu">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-0">
          {isLogin === true ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/report">
                  Report
                </a>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        <button className="btn my-2 my-sm-0" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
