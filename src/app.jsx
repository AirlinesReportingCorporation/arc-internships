import React, { Component } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
} from "arccorp-vars";

export default function Internships() {
  return (
    <div className="internship-page">
      <Stickynav title="ARC Internships" />
      <ProductJumbo
        cta="View Internships"
        backgroundImage="https://www2.arccorp.com/globalassets/imagemaker/hr/imagemaker-hr-26.jpg"
        title="Internships for Students"
        subtitle={
          <>
            Are you a student who wants to make a difference in the travel
            industry? Each summer, ARC looks for undergraduate and graduate
            students to join us for paid, hands-on intern roles.{" "}
            <span>Get ready for an exciting journey!</span>
          </>
        }
      />
      <ProductText
        title="Summer Internship Details"
        className="bg-color-tarmac"
        subtitle="Our summer internships are full-time opportunities with a commitment of 30-40 hours a week."
        titleClass="white"
        body={
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row flex-column">
                <div className="inner-column">
                  <div className="internship-details-title">Dates</div>
                  <div className="internship-details-copy">
                    <span className="intern-dates">
                      June 5 – August 11, 2023
                    </span>
                  </div>
                </div>
                <div className="inner-column">
                  <div
                    className="internship-details-title"
                    style={{ paddingTop: "60px" }}
                  >
                    Location
                  </div>
                  <p className="internship-details-copy">
                    Preference for applicants in the Arlington, Virginia;
                    Louisville, Kentucky or Tampa, Florida areas based on ARC’s
                    headquarters. However, roles are open to any applicants in
                    the U.S. The internship will be mostly virtual and remote,
                    with potential opportunities to come into the office.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="row flex-column"
                style={{ marginLeft: "auto", marginRight: "0px" }}
              >
                <div className="inner-column">
                  <div className="internship-details-title">Salary</div>
                  <div className="row">
                    <div className="pay-copy internship-details-copy">
                      <span className="copy-focus-pay">$20</span>
                      <span className="copy-focus-text">/hour</span>
                      <div className="copy-uppercase">
                        For Undergraduate Internships
                      </div>
                    </div>
                    <div className="pay-copy internship-details-copy">
                      <span className="copy-focus-pay">$25</span>
                      <span className="copy-focus-text">/hour</span>
                      <div className="copy-uppercase">
                        For Undergraduate Internships
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner-column">
                  <div className="internship-details-title">Requirements</div>
                  <p className="internship-details-copy">
                    You must be a current student and will need to submit an
                    unofficial transcript. ARC requires all employees, including
                    interns, to be vaccinated against COVID-19. We will consider
                    medical and religious accommodations as required by law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <ProductText
        title="Internship Benefits"
        body={
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row flex-column">
                <div className="inner-column">
                  <div className="internship-benefits-title">
                    Meaningful work
                  </div>
                  <div className="internship-benefits-copy">
                    You will be an essential part of your ARC team and gain
                    hands-on experience.
                  </div>
                </div>
                <div className="inner-column">
                  <div className="internship-benefits-title">
                    Exposure to cutting-edge technology
                  </div>
                  <p className="internship-benefits-copy">
                    ARC leads innovation in the travel industry, working closely
                    with airlines, travel advisors and more on the next big
                    technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="row flex-column"
                style={{ marginLeft: "auto", marginRight: "0px" }}
              >
                <div className="inner-column">
                  <div className="internship-benefits-title">
                    Robust mentorship opportunities
                  </div>
                  <div className="internship-benefits-copy">
                    You’ll work closely alongside your manager and connect with
                    executives and other leaders.
                  </div>
                </div>
                <div className="inner-column">
                  <div className="internship-benefits-title">
                    Career development training and workshops
                  </div>
                </div>
                <div className="inner-column">
                  <div className="internship-benefits-title">
                    Social activities
                  </div>
                  <p className="internship-benefits-copy">
                    Past activities have included sporting events, coffee
                    meetups and more. Due to COVID-19, we are still determining
                    this summer’s activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <ProductText
      title="Available Internships"
      className="bg-color-altitudegray"
      />
    </div>
  );
}
