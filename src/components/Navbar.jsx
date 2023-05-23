import { Link } from "react-router-dom"

// import React from 'react'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container">
        <Link to='/'>
        <a className="navbar-brand " style={{marginRight: 4}} href="home.html"><img src="/public/logo.png" alt="logo"
                width="100px" /></a>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to='/individuals'>
                    <a className="nav-link text-dark" aria-current="page" href="">Individuals</a>
</Link>
                </li>
                <li className="nav-item">
                    <Link to="/teams">
                    <a className="nav-link text-dark" href="">Teams</a>

                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/enterprise'>
                    <a className="nav-link text-dark" href="">Enterprise</a>

                    </Link>
                </li>

            </ul>
        </div>
    </div>

</nav>
  )
}

export default Navbar