import React from "react";
import "./css/pricingPage.css";

export const TrustedByC = () => {
  return (
    <>
      {" "}
      <div className="heading-2 container pricing_box">
        <strong>Trusted by 30,000+ business</strong>
        <p className="supporting-text">
          Thousands of startups and organization use BrewBim to improve the
          productivity of their sales team and create more opportunities.
        </p>
        {/* <div className="icons">
    <i class="fa-brands fa-slack"></i>
  </div> */}

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <i class="fa fa-windows"></i>{" "}
              </li>
              <li class="list-inline-item">
                <i class="fa fa-google"></i>
              </li>
              <li class="list-inline-item">
                <i class="fa fa-slack"></i>
              </li>
              <li class="list-inline-item">
                {/* <i class="fa fa-salesforce"></i> */}
              </li>
              <li class="list-inline-item">
                <i class="fa fa-envelope"></i>
              </li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
