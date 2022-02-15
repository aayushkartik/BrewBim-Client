import React from "react";
import Footer from "./Footer";

export const Prospect = () => {
  return (
    <>
      <div className="container mb-5 ">
        <h2>Welcome to Brewbim Prospector</h2>
        <br />

        <h5>Prospect Management</h5>
        <br />
        <div class="row pv-lg">
          <div class="col-lg-10">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-2 control-label" for="textinput">
                  List Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    placeholder="scan 1 12/02/2022 12:01:12 UTC"
                    class="form-control"
                  />
                </div>
              </div>

              <table class="table table-borderless">
                <tr>
                  <td>Number of Contacts</td>
                  <td class="text-end">430</td>
                </tr>
                <tr>
                  <td colspan="1">Approx. number of business email</td>
                  <td class="text-end">230</td>
                </tr>
                <tr>
                  <td colspan="1">Time to Scan</td>
                  <td class="text-end">15 min</td>
                </tr>
              </table>

              <div class="col-sm-offset-2 col-sm-10">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" checked /> Notify me via email once
                    completed
                  </label>
                </div>
              </div>
              <br />
              <h5>Credit Management</h5>
              <br />
              <table class="table table-borderless">
                <tr>
                  <td colspan="2">Approx/ credits usage</td>
                  <td class="text-end">230 to 430</td>
                </tr>
                <tr>
                  <td colspan="2">Your Credits</td>
                  <td class="text-end">120</td>
                </tr>
                <tr>
                  <td colspan="2">Additional cost per credit</td>
                  <td class="text-end">0.15$</td>
                </tr>
              </table>

              <div class="text-center">
                <button class="btn btn-info" type="submit">
                  Start Prospecting
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
