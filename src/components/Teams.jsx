import React from 'react'
import Navbar from '../components/Navbar'

const Teams = () => {
  return (
    <div>
        <Navbar/>
      <section className=" container mt-5" id="home">
        <div className="row align-items-center justify-content-around">
            <div className="col-md-5 text-center text-md-start">
                <h1 className="fw-bold display-5">
                     <span style={{color: 'rgb(64, 64, 237)'}}> Power up</span> your <br/>
                     teams

                </h1>
                <p className="text-secondary lh-lg mt-2 mb-5">Calendly makes it easy to work smarter when <br/>
                    Scheduling automation eliminates time-consuming admin tasks so your team can focus on higher priorities. With actionable insights into your team’s scheduling activities and integrations with your team’s favorite tools, you can identify potential process improvements and empower your team to work more efficiently.
                </p>

                <button type="button" className="btn btn-primary rounded-pill btn-lg">Start for free</button>
                <button type="button" className="btn btn-outline-dark rounded-pill btn-lg">Contact Sales</button>

            </div>
            <div className="col-md-5">
                <img className="img-fluid" src="/public/teams1.webp" alt="hero image"/>
            </div>

        </div>
    </section>
    <div className="container ">
        <h1 className="text-center py-5 fw-bold ">Streamline tasks, extend team <br/> reach</h1>
    </div>

    <section className=" container mt-5" id="home">
        <div className="row align-items-center justify-content-around">

            <div className="col-md-5">
                <img className="img-fluid" src="/public/team2.webp" alt="hero image"/>
            </div>

            <div className="col-md-5 text-center text-md-start">
                <p className=" text-primary">AUTOMATED ASSIGNMENT</p>
                <h1 className="fw-bold mb-3">
                   Control how your team gets <br/>
                   booked
                </h1>

                <p>Whether your team’s performance is measured by sales revenue, recruiting pipeline, or customer retention, scheduling automation enables your team to hit goals faster</p>
            </div>

        </div>
    </section>

    <section className="solutions container py-4">
        <p className="text-center text-primary">Solutions</p>
        <h1 className="fw-bold text-center mb-5">The right Calendly for the work you do</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col-3">
              <div className="card h-100">
                <img src="card1.webp" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Sales</h5>
                  <p className="card-text mb-5">Get to your Best leads faster.</p>
                  <a href="" className="text-decoration-none "> Learn more    </a>

                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card h-100">
                <img src="/public/card2.webp" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Recruiting</h5>
                  <p className="card-text mb-5">Less emailing, more closing</p>
                  <a href="" className="text-decoration-none"> Learn more </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card h-100">
                <img src="card3.webp" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Customer Success</h5>
                  <p className="card-text mb-5">Connect with customers when it matters</p>
                  <a href="" className="text-decoration-none"> Learn more </a>

                </div>
              </div>
            </div>
            <div className="col-3">
                <div className="card h-100">
                  <img src="card4.webp" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Education</h5>
                    <p className="card-text mb-5">Boost student success</p>
                    <a href="" className="text-decoration-none"> Learn more </a>

                  </div>
                </div>
              </div>

          </div>
    </section>



    <section className="footer pt-5">
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-3">
                    <h2 className="display-6 fw-bold">Easy <br/>
                        <span style={{color: 'rgb(64, 64, 237)'}}> ahead</span> </h2>
                    <p className="text-muted mb-4">We take the work out of connecting with others 
                    so you can accomplish more</p>

                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>English</option>
                        <option value="1">English</option>
                        <option value="2">twi</option>
                        <option value="3">Ga</option>
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
  )
}

export default Teams