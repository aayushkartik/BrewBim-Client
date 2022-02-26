import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import Footer from "./Footer";
import check from "./extentt";
// /* global chrome */

export const BrewBimApp = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    // var id = "pjmlkdacmaejhkdcflncbpcpidkggoio";
    // if (check()) {
    //   setState(true);
    // } else {
    //   setState(false);
    // }
    setState(true);
    // const EXTENSION_ID = "pjmlkdacmaejhkdcflncbpcpidkggoio";

    // chrome.runtime.sendMessage(EXTENSION_ID, "0.1.20", (response) => {
    //   if (!response) {
    //     console.log("No extension");
    //     return;
    //   }
    //   console.log("Extension version: ", response.version);
    // });
    // chrome.runtime.sendMessage(id, { message: "0.1.20" }, function (reply) {
    //   if (reply) {
    //     if (reply.version) {
    //       if (reply.version >= "0.1.20") {
    //         setState(true);
    //       }
    //     }
    //   } else {
    //     setState(false);
    //   }
    // });
  }, []);
  return (
    <>
      <div className="container">
        <div className="lm_nav mb-5">
          <div className="lm_tabs">
            <span>
              <Link className="nav-link" to="/app">
                Home
              </Link>
            </span>
            <span>
              <Link className="nav-link" to="list-master">
                Prospect List
              </Link>
            </span>
            <span>
              <Link className="nav-link" to="prospect-master">
                Prospects
              </Link>
            </span>
            <span>
              <Link className="nav-link" to="checked-on-linkedin">
                Checked on Linkedin
              </Link>
            </span>
          </div>
          <div className="credits">
            Credits : <span>231</span>
          </div>
        </div>
        <div className="upper-block">
          <Flip left>
            <div className="heading container-fluid">
              <b>Welcome to BrewBim</b>
              <p className="supporting-text">
                Get email address of your prospects from LinkedIn
              </p>
            </div>
            <br />
            {state ? (
              <div className=" align-center extension_c">
                <h5>Install Chrome Extension</h5>
                <a
                  type="button"
                  className="btonn"
                  href="https://chrome.google.com/webstore/search/brewbim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install
                </a>
              </div>
            ) : (
              <div className=" align-center extension_c">
                <h5>Go to LinkedIn Sales Search</h5>
                <a
                  type="button"
                  className="btonn"
                  href="https://www.linkedin.com/sales/search/people"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open
                </a>
              </div>
            )}
          </Flip>
        </div>
        {/* <div className="heading-2 container ">
          <form class="search-form price_form">
            Install Chrome Extension
            <button class="btn" type="submit">
              Install
            </button>
          </form>
        </div>
      {/* <h1 class="lts-md fs-300 fs-300-xs no-mg align-center bold">
        <strong>Welcome to BrewBim</strong>
      </h1>
      <br />
      <h2 className="supporting-text align-center">
        Get email address of your prospects from LinkedIn
      </h2>
      <div className="heading-2 container ">
        {/* <strong>Welcome to BrewBim</strong> 
        <form class="search-form price_form">
          <input placeholder="Work Email" type="text" />
          <button class="btn" type="submit">
            Create Account
          </button>
        </form>
      </div> */}
      </div>
      <Footer />
    </>
  );
};
