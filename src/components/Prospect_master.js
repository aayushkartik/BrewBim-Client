import React from "react";
import { Link } from "react-router-dom";

export const Prospect_master = () => {
  return (
    <div className="container">
      <div className="lm_nav mb-5">
        <div className="lm_tabs">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="list-master">Prospect List</Link>
          </span>
          <span>
            {" "}
            <Link to="prospect-master">Prospects</Link>
          </span>
          <span>Checked on Linkedin</span>
        </div>
        <div className="credits">
          Credits : <span>231</span>
        </div>
      </div>

      <div class="table-responsive">
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
      </div>
    </div>
  );
};
