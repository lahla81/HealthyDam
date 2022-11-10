import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import logo from '../../assets/img/logo-background-center.jpg';
import './navigation.style.scss';

const Navigation = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg mt-4">
                <div className="container-fluid navigation my-2">
                    <Link className="navbar-brand d-none d-sm-none d-md-none d-lg-block" to='/'>Healthy Damanhour</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/shop'>SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contactUs'>Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/auth'>Sign In</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="navbar-brand position-absolute top-0 end-0" to='/'>
                        <img className="nav-logo" alt='logo' src={logo} height='100px'/>
                    </Link>
                </div>
            </nav>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation