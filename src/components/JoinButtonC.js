import React from "react";
import "./css/pricingPage.css";

export const JoinButtonC = () => {
  return (
    <>
      <div className="heading-2 container pricing_joinFree">
        <strong>Join for free today.</strong>
        <p className="supporting-text">
          Supercharge your team with the best sales acceleration and linkedIn
          automation tools.
        </p>
        <form class="search-form price_form">
          <input placeholder="Work Email" type="text" />
          <button class="btn" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};
