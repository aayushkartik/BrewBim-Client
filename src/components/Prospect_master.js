import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { TableProspectMaster } from "./TableProspectMaster";

export const Prospect_master = () => {
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
        <TableProspectMaster />

        {/* <div class="table-responsive">
        <table class="table colored-header datatable project-list">
          <thead>
            <tr>
              <th>List Name</th>
              <th>Full Name</th>
              <th>Company Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="label label-danger">
                  scan 1 12/02/2022 12:01:12 UTC{" "}
                </span>
              </td>
              <td>
                <span class="label label-danger">Navin Gurnani</span>
              </td>
              <td>
                <span class="label label-danger">BrowserStack</span>
              </td>
              <td>
                <span class="label label-danger">navin.g@browserstack.com</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="label label-danger">
                  {" "}
                  scan 1 12/02/2022 12:01:12 UTC{" "}
                </span>
              </td>
              <td>
                <span class="label label-danger">Deepak Mehta</span>
              </td>
              <td>
                <span class="label label-danger">Wingify </span>
              </td>
              <td>
                <span class="label label-danger">deepak@wingify.com</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
      </div>
      <Footer />
    </>
  );
};
