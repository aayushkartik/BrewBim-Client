import React from "react";
import { Link } from "react-router-dom";
import "./css/list_master.css";

export const List_master = () => {
  return (
    <>
      <div className="container">
        {/* nav */}
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

        {/* prospect list table  */}
        <div class="table-responsive">
          <table class="table colored-header datatable project-list">
            <thead>
              <tr>
                <th>List Name</th>
                <th>Scan Status</th>
                <th>Number of emails</th>
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
                  <span class="label label-danger">In progress</span>
                </td>
                <td>
                  <span class="label label-danger">230 emails approx.</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span class="label label-danger">Zoom Company</span>
                </td>
                <td>
                  <span class="label label-danger">Completed</span>
                </td>
                <td>
                  <span class="label label-danger">56 emails </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
