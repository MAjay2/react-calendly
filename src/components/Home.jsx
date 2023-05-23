import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Navbar/>

      <section className="hero container" id="home">
        <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
                <h1 className="fw-bold display-1">
                    Easy <br/> scheduling <br/> <span style={{color: 'rgb(64, 64, 237)'}}> ahead</span>
                </h1>
                <p>Calendly is your hub for scheduling meetings <br/>
                    professionally and efficiently,eliminating the hassle of <br/>
                    back-and-forth emails so you can get back to work
                </p>

                <input className="signup-input" type="email" placeholder="Enter your email"/>
                <Button variant='primary' className="signup-btn" href="">Sign Up</Button>
                <p className="text-secondary">Create your free account.No credit card required.</p>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src="public/hero-image.webp" alt="hero image" />
            </div>

        </div>
    </section>

    <section className="users py-5">
        <div className="container">
            <h1 className="text-center py-3">Simplified scheduling for more than <br/>
                <span style={{color: 'rgb(64, 64, 237)'}}>10,000,000</span> users worldwide
            </h1>
            <div className="row  ">
                <div className="col text-center"><img  width="100px" src="/public/user1.svg" alt="compass"/></div>
                <div className="col text-center"><img width="100px" src="/public/user2.svg" alt="ebay"/></div>
                <div className="col text-center"><img width="100px" src="/public/user3.svg" alt="zenfits"/></div>
                <div className="col text-center"><img width="100px" src="/public/user4.svg" alt="twilio"/></div>
                <div className="col  text-center"><img width="100px" src="/public/user5.svg" alt="drop box"/></div>

            </div>

        </div>
    </section>

    <div className="container">
        <div className="row    justify-content-md-around mt-5 py-5">
            <div className="col-md-3 d-flex justify-content-center">
                <div className="card-i">
                    <h1 className="fw-bold">create <br/>
                        simple rules</h1>

                    <p className="lh-lg">let Calendly know your <br/>
                        availability preferences and <br/>
                        it'll do the work for you.</p>
                    <span className="badge">1.</span>
                </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center my-5 my-md-0">
                <div className="card-i  ">
                    <h1 className="fw-bold">Share your <br/>
                        link</h1>

                    <p className="lh-lg">Send guests your Calendly <br/>
                        link or embed it on your <br/>
                        website.</p>
                    <span className="badge">2.</span>
                </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center">
                <div className="card-i  ">
                    <h1 className="fw-bold">Get booked </h1>

                    <p className="lh-lg">They pick a time and the <br/>
                        event is added to your <br/>
                        calender.</p>
                    <span className="badge">3.</span>
                </div>
            </div>


        </div>
    </div>

    </div>
  )
}

export default Home