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
        ctaLink="#benefits"
      />
      {/* Internship Details */}
      <ProductText
        title="Summer Internship Details"
        className="bg-color-tarmac"
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
      <ProductText
        id="benefits"
        title="Internship Benefits"
        body={
          <div className="row">
            <div className="col-lg-6">
              <div className="inner-benefits">
                <div className="internship-benefits-title">Meaningful work</div>
                <div className="internship-benefits-copy" style={{marginBottom: "20px"}}>
                  You will be an essential part of your ARC team and gain
                  hands-on experience.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner-benefits left-position">
                <div className="internship-benefits-title">
                  Career development training and workshops
                </div>
                <div className="internship-benefits-copy">
                  Weekly workshops and professional development training
                  opportunities scheduled throughout the summer.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner-benefits">
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
            <div className="col-lg-6">
              <div className="inner-benefits left-position">
                <div className="internship-benefits-title">
                  Social activities
                </div>
                <p className="internship-benefits-copy">
                  While interns will primarily work remotely, there will be
                  opportunities to travel into our corporate office for
                  in-person meetings and events, including lunch with our leaders
                  and after work social gatherings.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner-benefits">
                <div className="internship-benefits-title">
                  Robust mentorship opportunities
                </div>
                <div className="internship-benefits-copy">
                  You’ll work closely alongside your manager and connect with
                  executives and other leaders.
                </div>
              </div>
            </div>
          </div>
        }
      />
      {/* Available Internships */}
      <ProductText
        id="internships"
        title="Available Internships"
        className="available-internships"
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
      <ProductText
        title="Resources"
        body={
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
                Interviews with your hiring manager and other ARC colleagues
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
                <a href="mailto:jobs@arccorp.com">jobs@arccorp.com</a>).
              </p>
            </div>
          </div>
        }
      />
      <ProductLinks
        prodLink={[
          {
            alt: "Learn more about our culture",
            cta: "Learn More",
            copy: "At ARC, we believe work should be rewarding and meaningful. We collaborate, think big and connect around shared experiences.",
            header: "Learn more about our culture",
            icon: "https://www2.arccorp.com/globalassets/development-resources/demo-images/users-icon.png",
            link: "https://www2.arccorp.com/about-us/careers/our-culture/",
          },
          {
            alt: "Explore full-time opportunities",
            header: "Explore full-time opportunities",
            copy: "With career development opportunities, comprehensive benefits and flexible programs, we help our employees thrive — both at work and at home.",
            cta: "Learn More",
            icon: "https://www2.arccorp.com/globalassets/icons/money-icon-139x102.png",
            link: "https://careers-arccorp.icims.com/jobs/search",
          },
        ]}
      />
    </div>
  );
}
