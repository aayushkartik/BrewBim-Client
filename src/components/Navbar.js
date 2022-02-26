import React, { useContext, useState } from "react";
import LoginPage from "./LoginPage.js";
import { Link } from "react-router-dom";
import "./css/navbar.css";

import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
    console.log("clicked");
  }
  // const register = (item) => {
  //   setShow(item);
  // };
  const RenderMenu = () => {
    if (!state) {
      return (
        <>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto ">
              <Link className="nav-item nav-link active" to="/pricing">
                Pricing
              </Link>
              <Link className="nav-item nav-link active" to="/">
                Contact Sales
              </Link>
              <Link className="nav-item nav-link active" to="/register">
                Register
              </Link>
              <Link className="nav-item nav-link active" onClick={toggle}>
                Login
              </Link>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto ">
              <Link className="nav-item nav-link active" to="/pricing">
                Pricing
              </Link>
              <Link className="nav-item nav-link active" to="/">
                Contact Sales
              </Link>
              <Link
                className="nav-item nav-link active"
                to="/logout"
                // onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bgwhite fixed-top">
        <Link className="navbar-brand" to="/">
          <img
            src="./brebim.jpeg"
            width="40"
            height="40"
            class="d-inline-block align-bottom brewbim"
            alt=""
          />
          Brewbim
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <RenderMenu />
        <LoginPage display={show} modalClose={toggle}></LoginPage>
      </nav>
    </>
  );
};

export default Navbar;
