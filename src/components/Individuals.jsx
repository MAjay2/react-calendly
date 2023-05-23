import React from "react";
import Navbar from "../components/Navbar";

const Individuals = () => {
  return (
    <div>
      <Navbar />
      <section className=" container mt-5" id="home">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-5 text-center text-md-start">
            <h1 className="fw-bold display-5">
              The genius way to <br /> work{" "}
              <span style={{ color: "rgb(64, 64, 237)" }}> better</span>
            </h1>
            <p className="text-secondary lh-lg mt-2 mb-5">
              Calendly makes it easy to work smarter when <br />
              you’re working solo. Meetings, sessions, and <br />
              appointments become more efficient ways to <br />
              achieve success and accomplish goals.
            </p>

            <button
              type="button"
              className="btn btn-primary btn-lg bg-dark rounded-pill"
            >
              Sign up for free
            </button>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="indiv1.webp" alt="hero image" />
          </div>
        </div>
      </section>

      <section className=" container mt-5" id="home">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-5">
            <img className="img-fluid" src="indivi2.webp" alt="hero image" />
          </div>

          <div className="col-md-5 text-center text-md-start">
            <p className="text-muted"> A curated calender</p>
            <h1 className="fw-bold mb-3">Book up efficiently</h1>

            <p>
              When invitees select a meeting slot from your schedule, they{" "}
              <br />
              only see the times you’re available, and only the length and{" "}
              <br />
              type of meeting you want to have. Your schedule fills up <br />
              efficiently, and everyone avoids excess email exchanges.
            </p>
          </div>
        </div>
      </section>

      <section className=" container mt-5" id="home">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-5 text-center text-md-start">
            <p className="text-muted"> AUTOMATED NOTIFICATIONS & FOLLOW-UPS</p>
            <h1 className="fw-bold mb-3">
              Work like you have a personal assistant
            </h1>

            <p>
              Because Calendly automates administrative tasks like <br />
              sending reminder emails and follow-ups, you can focus
              <br />
              on the work that builds your business and brings
              <br />
              customers back for more.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="indivi3.webp" alt="hero image" />
          </div>
        </div>
      </section>

      <section className="banner py-5">
        <div className="container">
          <h1 className="mb-5">
            Find just-right plans <br />
            for individuals and <br />
            small teams
          </h1>
          <a href="" className="banner-btn">
            see our plans
          </a>

          <div className="banner-item1"></div>
          <div className="banner-item2"></div>
        </div>
      </section>

      <section className="footer pt-5">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-3">
              <h2 className="display-6 fw-bold">
                Easy <br />
                <span style={{color: "rgb(64, 64, 237)"}}> ahead</span>{" "}
              </h2>
              <p className="text-muted mb-4">
                We take the work out of connecting with others so you can
                accomplish more
              </p>

              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option>English</option>
                <option defaultValue="1">English</option>
                <option defaultValue="2">twi</option>
                <option defaultValue="3">Ga</option>
              </select>
            </div>
            <div className="col-2">
              <h4>About</h4>
              <p className="text-muted">About Calendly</p>
              <p className="text-muted">Contact Sales</p>
              <p className="text-muted">Newsroom</p>
              <p className="text-muted">Careers</p>
              <p className="text-muted">Security</p>
            </div>
            <div className="col-2">
              <h4>Solutions</h4>
              <p className="text-muted">Customer Services</p>
              <p className="text-muted"> Sales</p>
              <p className="text-muted">Recruiting</p>
              <p className="text-muted">Education</p>
              <p className="text-muted">Marketing</p>
            </div>
            <div className="col-2">
              <h4>Popular Features</h4>
              <p className="text-muted">Embed Calendly</p>
              <p className="text-muted">Availability</p>
              <p className="text-muted">Sending Notifications</p>
              <p className="text-muted">Using Calendly Mobile</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Individuals;