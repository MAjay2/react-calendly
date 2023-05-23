import React from 'react'
import Navbar from '../components/Navbar'

const Enterprise = () => {
  return (
    <div>
        <Navbar/>
      
        <section className="container ">
        <h1 className="fw-bold text-center my-5"><span style={{color: "rgb(64, 64, 237)"}}> Way more</span> than a <br/>
        scheduling link</h1>
        <p className="text-center">Standardize on the #1 scheduling platform and <br/>
            deliver the power of Calendly across your entire <br/>
            organization

        </p>
        <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-lg bg-dark rounded-pill ">Sign up for free</button>

        </div>

    </section>

    <section className="ent-banner mt-5">
        <div className="container banner-in py-5">
            <h4 className="text-center ">Trusted by more than 50,000 of the <br/>
            world's leading organizations</h4>
            <div className="row justify-content-center py-4">
                <div className="col-2  text-center">
                    <img width="50px" src="d1.png" alt="" style={{backgroundColor: "white"}}/>
                </div>
                <div className="col-2 text-center">
                    <img width="50px" src="d2.png" alt=""/>
                </div>
                <div className="col-2 text-center">
                    <img width="50px" src="d3.png" alt=""/>
                </div>
                <div className="col-2 text-center">
                    <img width="50px" src="d4.png" alt=""/>
                </div>
                <div className="col-2 text-center">
                    <img width="50px" src="d5.png" alt=""/>
                </div>

            </div>
        </div>
    </section>

    <section className="container py-5">
        <div className="row  work-width justify-content-center justify-content-around">
            <div className="col-3 ">
                <div className="work-card ">
                    <h2 className="p-4 text-primary">Sales</h2>
                    <img src="work1.png" alt=""/>
                    <p className="p-4">Conver more leads and prospects into meetings and revenue.Easliy book demos and customer calls without the back and forth</p>
    
                </div>
            </div>
            <div className="col-3 ">
                <div className="work-card">
                    <h2 className="p-4 text-primary">Sales</h2>
                    <img src="work2.png" alt=""/>
                    <p className="p-4">Conver more leads and prospects into meetings and revenue.Easliy book demos and customer calls without the back and forth</p>
    
                </div>
            </div>
            <div className="col-3 ">
                <div className="work-card">
                    <h2 className="p-4 text-primary">Sales</h2>
                    <img src="work3.png" alt=""/>
                    <p className="p-4">Conver more leads and prospects into meetings and revenue.Easliy book demos and customer calls without the back and forth</p>
    
                </div>
            </div>


        </div>
        <a href="" style={{backgroundColor: 'black', color:'white', padding: 1, borderRadius: '45px', textDecoration: 'none', display: 'flex', justifyContent: 'center', width: '10%', margin: '0 auto', marginTop: '3em'}}>Learn more</a>

    </section>



    <section className="footer pt-5">
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-3">
                    <h2 className="display-6 fw-bold">Easy <br/>
                        <span style={{color: "rgb(64, 64, 237)"}}> ahead</span> </h2>
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

export default Enterprise