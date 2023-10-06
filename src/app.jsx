import React, { Component } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
  ProductLinks,
} from "arccorp-vars";

export default function Internships() {
  return (
    <div className="internship-page">
      <Stickynav
        title="ARC Internships"
        links={[
          {
            title: "Benefits",
            url: "#benefits",
          },
          // {
          //   title: "Positions",
          //   url: "#internships",
          //},
        ]}
      />
      <ProductJumbo
        className="intern-jumbo"
        backgroundImage="https://www2.arccorp.com/globalassets/homepage/redesign/internship/jumbo.png"
        title="Internships for Students"
        subtitle={
          <>
            Are you a student who wants to make a difference in the travel
            industry? Each summer, ARC looks for undergraduate and graduate
            students to join us for paid, hands-on intern roles.{" "}
            <span>Get ready for an exciting journey!</span>
          </>
        }
        ctaLink="#benefits"
      />
      {/* Internship Details */}
      <ProductText
        title="Summer Internship Details"
        className="bg-color-tarmac intern-title"
        subtitle="Our summer internships are full-time opportunities with a commitment of 30-40 hours a week."
        titleClass="white"
        body={
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="inner-column">
                  <div className="internship-details-title">DATES</div>
                  <div className="internship-details-copy">
                    <span className="intern-dates">June – August 2024</span>
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
                    with opportunities to come into the office
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="inner-column right-details-col">
                  <div className="internship-details-title">Compensation</div>
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
                        For Graduate STUDENT Internships
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner-column right-details-col">
                  <div className="internship-details-title">Requirements</div>
                  <p className="internship-details-copy">
                    You must be a current student and will need to submit an
                    unofficial transcript. We will consider medical and
                    religious accommodations as required by law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />
      {/* Benefits */}
      <ProductText
        title="Internship Benefits"
        id="benefits"
        titleClass="intern-title"
        body={
          <>
            <div className="row">
              <div className="col-lg-6">
                <div className="benefit-title">Meaningful work</div>
                <p className="benefit-copy">
                  You will be an essential part of your ARC team and gain
                  hands-on experience.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="benefit-title">
                  Career development training and workshops
                </div>
                <p className="benefit-copy">
                  Weekly workshops and professional development training
                  opportunities scheduled throughout the summer.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="benefit-title">
                  Exposure to cutting-edge technology
                </div>
                <p className="benefit-copy">
                  ARC leads innovation in the travel industry, working closely
                  with airlines, travel advisors and more on the next big
                  technology.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="benefit-title">Social activities</div>
                <p className="benefit-copy">
                  While interns will primarily work remotely, there will be
                  opportunities to travel into our corporate office for
                  in-person meetings and events including lunch with our leaders
                  and after work social gatherings.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="benefit-title">
                  Robust mentorship opportunities
                </div>
                <p className="benefit-copy">
                  You’ll work closely alongside your manager and connect with
                  executives and other leaders.
                </p>
              </div>
            </div>
          </>
        }
      />

      {/* Available Internships */}
      <ProductText
        id="internships"
        subtitle="Available interships will be posted Spring 2024, here are a list of departments that will have internships:"
        className="available-internships intern-title"
        body={
          <div className="row">
            <div className="col-lg-3">
              <div className="position-inner">
                <div className="position-title">Business Technology</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="position-inner">
                <div className="position-title">Marketing</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="position-inner">
                <div className="position-title">Finance and Accounting</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="position-inner">
                <div className="position-title">Business Operations</div>
              </div>
            </div>
          </div>
        }
      />
      {/* Info */}
      <ProductText
        className="internship-info"
        body={
          <>
            <div className="row ">
              <div className="col-lg-6">
                <div className="info-about-title">Interview Process</div>
                <div className="info-copy">
                  The interview process will include:
                </div>
                <ul>
                  <li className="info-copy">
                    A telephone screening with a recruiter from ARC
                  </li>
                  <li className="info-copy">
                    Interviews with your hiring manager and other ARC colleagues
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="info-about-title">For More Information</div>
                <div className="info-copy">
                  <a href="mailto:jobs@arccorp.com">Contact</a> our Talent
                  Acquisition team
                </div>
                <div className="info-about-title secondary-title">
                  Resources
                </div>
                <a
                  className="info-copy info-link"
                  href="https://careers-arccorp.icims.com/jobs/search?hashed=-435595431&mobile=false&width=960&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240"
                >
                  Explore full-time opportunities
                </a>
                <br />
                <a
                  className="info-copy info-link"
                  href="https://www2.arccorp.com/about-us/careers/our-culture/?utm_source=internship"
                >
                  Learn more about our culture
                </a>
              </div>
            </div>
          </>
        }
      />

      {/* About ARC */}
      <ProductCallout
        className="internships-about"
        title="About ARC"
        subtitle="ARC accelerates the growth of global air travel by delivering forward-looking travel data, flexible distribution services and innovative industry solutions. We are a leading travel intelligence company that possesses the world’s largest, most comprehensive global airline ticket data, including more than 15 billion passenger flights representing 490 airlines
and 230 countries and territories. Our technology, products and expertise strengthen economies and enrich lives by connecting stakeholders across the travel ecosystem."
      />
    </div>
  );
}
