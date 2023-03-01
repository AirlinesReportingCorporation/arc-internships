import React, { Component } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
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
          {
            title: "Positions",
            url: "#internships",
          },
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
                        For Graduate Internships
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner-column right-details-col">
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
      {/* Benefits */}
      <div
        id="benefits"
        class="bg-img-container lazy intern-title"
        data-bg="https://www2.arccorp.com/globalassets/homepage/redesign/internship/benefits.png"
      >
        <div class="callout-container callout-container-mt2">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="product-header white intern-title">Internship Benefits</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          class="sub-callout-container"
          style={{
            paddingTop: "0",
            paddingLeft: "0",
            paddingRight: "0",
            borderTop: "none",
          }}
        >
          <div style={{ maxWidth: "815px" }}>
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="subcallout-card" style={{ height: "207px" }}>
                  <div class="d-flex align-items-center">
                    <img
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/internship/meaningfulwork.png"
                      style={{ paddingTop: "5px", paddingBottom: "6px" }}
                      alt="Flexible credit card billing options"
                    />
                    <div class="subcallout-card-copy">
                      <div style={{ color: "#189bb0" }}>Meaningful work</div>
                      <div style={{ fontSize: "14px" }}>
                        You will be an essential part of your ARC team and gain
                        hands-on experience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="subcallout-card" style={{ height: "207px" }}>
                  <div class="d-flex align-items-center">
                    <img
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/internship/training.png"
                      alt="Customizable transaction modifications"
                    />
                    <div class="subcallout-card-copy">
                      <div style={{ color: "#189bb0" }}>
                        Career development training and workshops
                      </div>
                      <div style={{ fontSize: "14px" }}>
                        Weekly workshops and professional development training
                        opportunities scheduled throughout the summer.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="subcallout-card" style={{ height: "207px" }}>
                  <div class="d-flex align-items-center">
                    <img
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/internship/technology.png"
                      alt="Acceptance of SPRF (ARC) or RET (BSP) file formats"
                    />
                    <div class="subcallout-card-copy">
                      <div style={{ color: "#189bb0" }}>
                        Exposure to cutting-edge technology
                      </div>
                      <div style={{ fontSize: "14px" }}>
                        ARC leads innovation in the travel industry, working
                        closely with airlines, travel advisors and more on the
                        next big technology.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="subcallout-card" style={{ height: "207px" }}>
                  <div class="d-flex align-items-center">
                    <img
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/internship/social.png"
                      alt="Ability to identify direct connect transactions in IAR and on airline outputs"
                    />
                    <div class="subcallout-card-copy">
                      <div style={{ color: "#189bb0" }}>Social activities</div>
                      <div style={{ fontSize: "14px" }}>
                        While interns will primarily work remotely, there will
                        be opportunities to travel into our corporate office for
                        in-person meetings and events, including lunch with our
                        leaders and after work social gatherings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="subcallout-card" style={{ height: "207px" }}>
                  <div class="d-flex align-items-center">
                    <img
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/internship/mentorship.png"
                      alt="Flexible messaging schema options (NDC or proprietary)"
                    />
                    <div class="subcallout-card-copy">
                      <div style={{ color: "#189bb0" }}>
                        Robust mentorship opportunities
                      </div>
                      <div style={{ fontSize: "14px" }}>
                        You’ll work closely alongside your manager and connect
                        with executives and other leaders.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Internships */}
      <ProductText
        id="internships"
        title="Available Internships"
        className="available-internships intern-title"
        body={
          <div className="row">
            <div className="col-lg-6">
              <div className="position-inner">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2264/data-engineering-intern---summer-2023/job"
                >
                  <div className="position-title">
                    Data Engineering Intern (2)
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner left-position">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2257/software-engineering-intern---summer-2023/job"
                >
                  <div className="position-title">
                    Software Engineering Intern (2)
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2263/information-security-intern--summer-2023/job"
                >
                  <div className="position-title">
                    Information Security Intern (1)
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner left-position">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2256/multimedia-and-graphic-design-intern--summer-2023/job"
                >
                  <div className="position-title">
                    Multimedia and Graphic Design Intern (1)
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2262/enterprise-risk-intern--summer-2023/job"
                >
                  <div className="position-title">
                    Enterprise Risk Intern (1)
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner left-position">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2255/platform-engineering-intern---summer-2023/job"
                >
                  <div className="position-title">
                    Platform Engineering Intern (1)
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2261/product-analyst-intern--summer-2023/job"
                >
                  <div className="position-title">
                    Product Analyst Intern (1)
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner left-position">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2254/accounting-intern--summer-2023/job"
                >
                  <div className="position-title">Accounting Intern (1)</div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2260/software-quality-engineer-intern---summer-2023/job"
                >
                  <div className="position-title">
                    Software Quality Engineer Intern (2)
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner left-position">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2253/financial-planning-%26-analysis-%28fp%26a%29-intern--summer-2023/job"
                >
                  <div className="position-title">FP&A Intern (1)</div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2259/data-analyst-intern--summer-2023/job"
                >
                  <div className="position-title">Data Analyst Intern (1)</div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-inner left-position">
                <a
                  className="position-link"
                  href="https://careers-arccorp.icims.com/jobs/2252/salesforce-intern--summer-2023/job"
                >
                  <div className="position-title">Salesforce Intern (1)</div>
                </a>
              </div>
            </div>
          </div>
        }
      />
      {/* Resources */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="arc-homepage-card lazy"
              data-bg={
                "https://www2.arccorp.com/globalassets/homepage/redesign/internship/resources.png"
              }
              style={{ marginTop: "90px" }}
            >
              <div className="row align-items-center no-gutters">
                <div
                  className="col-lg-12"
                  style={{ minHeight: "auto", height: "auto" }}
                >
                  <div className="arc-homepage-data d-flex flex-column">
                    <div className="arc-homepage-data-title">Resources</div>
                    <div>
                      <div>
                        <p>
                          <strong className="interview-title">
                            The interview process will include:
                          </strong>
                        </p>
                        <li className="interview-step">
                          A telephone screening with a recruiter from ARC
                        </li>
                        <li className="interview-step">
                          Interviews with your hiring manager and other ARC
                          colleagues
                        </li>
                      </div>
                      <div style={{ paddingTop: "30px" }}>
                        <p>
                          <strong className="interview-title">
                            For More Information
                          </strong>
                        </p>
                        <p className="interview-step">
                          Contact our Talent Acquisition team (
                          <a href="mailto:jobs@arccorp.com">jobs@arccorp.com</a>
                          ).
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductLinks
        prodLink={[
          {
            alt: "Learn more about our culture",
            cta: "Learn More",
            copy: "At ARC, we believe work should be rewarding and meaningful. We collaborate, think big and connect around shared experiences.",
            header: "Learn more about our culture",
            icon: "https://www2.arccorp.com/globalassets/homepage/redesign/internship/culture.png",
            link: "https://www2.arccorp.com/about-us/careers/our-culture/",
          },
          {
            alt: "Explore full-time opportunities",
            header: "Explore full-time opportunities",
            copy: "With career development opportunities and comprehensive benefits, we help our employees thrive — at home and at work.",
            cta: "Learn More",
            icon: "https://www2.arccorp.com/globalassets/homepage/redesign/internship/opportunities.png",
            link: "https://careers-arccorp.icims.com/jobs/search",
          },
        ]}
      />
    </div>
  );
}
