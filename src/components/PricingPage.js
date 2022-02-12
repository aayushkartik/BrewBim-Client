import React from "react";
import Footer from "./Footer";
import "./css/pricingPage.css";

export const PricingPage = () => {
  return (
    <>
      <section id="pricing" class="pricing-content section-padding">
        <div class="container">
          <div class="section-title text-center">
            <h1>Flexible Pricing</h1>
            <p>Only pay when we find verified contact information</p>
          </div>
          <br />
          <div class="text-center">
            <h4>Go yearly for the best savings</h4>
            <div class="nav price-tabs" role="tablist">
              <a
                class="nav-link active"
                href="#yearly"
                role="tab"
                data-toggle="tab"
              >
                Yearly
              </a>
              <a class="nav-link" href="#monthly" role="tab" data-toggle="tab">
                Monthly
              </a>
            </div>
          </div>
          <div class="row text-center">
            <div
              class="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div class="single-pricing">
                <div class="price-head">
                  <h2>Starter</h2>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h5>Great for occasional prospecting</h5>
                <br />
                <h1 class="price">$30</h1>
                <h5>Monthly</h5>
                <br />
                <a href="#">Start for free</a>
                <ul>
                  <li>100 credits</li>
                  <li>1 credit = 1 valid email</li>
                  <li>Risky emails are always free</li>
                  <li>0.15$ per extra email</li>
                  <li>credits rollover</li>
                  <li>Single Email Finder</li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset="0"
            >
              <div class="single-pricing single-pricing-white">
                <div class="price-head">
                  <h2>Enterprise</h2>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h5>Have a custom requirement</h5>
                <br />
                <span class="price-label">Best</span>
                <h1 class="price">Custom </h1>
                <h5>Pricing</h5>
                <br />
                <a href="#">Get start</a>
                <ul>
                  <li>Custom credits</li>
                  <li>1 credit = 1 valid email</li>
                  <li>Risky emails are always free</li>
                  <li>Custom requirement handling</li>
                </ul>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>

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

          <div className="heading-2 container pricing_joinFree">
            <strong>Join for free today.</strong>
            <p className="supporting-text">
              Supercharge your team with the best sales acceleration and
              linkedIn automation tools.
            </p>
            <form class="search-form price_form">
              <input placeholder="Work Email" type="text" />
              <button class="btn" type="submit">
                Create Account
              </button>
            </form>
          </div>
        </div>

        {/* reviews */}
        <div class="container">
          <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
            <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg">
              You're in good company.
            </h1>
            <h4 class="font-cond-l fg-accent lts-md mgb-10">
              You don't have to trust our word
            </h4>
          </div>
          <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
            <li>
              <p class="fs-110 font-cond-l">
                BrewBim allows us to export a search into a usable CSV which
                saves us a lot of time when setting up a new Sales email
                campaign.
              </p>
              <h5 class="font-cond mgb-5 fg-text-d fs-130">Brendan McDonald</h5>
              <small class="font-cond case-u lts-sm fs-80 fg-text-l">
                Data Operations, PartnerStack
              </small>
            </li>
            <li>
              <p class="fs-110 font-cond-l">
                BrewBim helped our team scale 1:1 outreach for our ABM programs
                by providing an easy way to enrich contact data at target
                accounts in a few clicks.
              </p>
              <h5 class="font-cond mgb-5 fg-text-d fs-130">Amber Stone</h5>
              <small class="font-cond case-u lts-sm fs-80 fg-text-l">
                Head of Enterprise ABM, UserTesting
              </small>
            </li>
            <li>
              <p class="fs-110 font-cond-l">
                BrewBim changed the prospecting game for my company. At this
                point Wiza has paid for itself 100x over, and there’s really
                nothing more that I could ask for.
              </p>
              <h5 class="font-cond mgb-5 fg-text-d fs-130">Drew White</h5>
              <small class="font-cond case-u lts-sm fs-80 fg-text-l">
                Digital Sourcing Specialist, Aerotek
              </small>
            </li>
          </ul>
          <br />
          <br />
        </div>
      </section>

      <Footer />
    </>
  );
};
