import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import logo from '../../assets/img/logo-background-center.jpg';
import './navigation.style.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>تسوق</Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/contactUs'>تواصل معنا</Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/signIn'>تسجيل الدخول</Link>
                </div>
                <Link className="nav-logo-container logo-space" to='/'>
                    <img className="nav-logo" alt='logo' src={logo} height='80px'/>
                </Link>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation