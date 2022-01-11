import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Feather from "../Icons/Feather";
import $ from "jquery";

import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Header = () => {
  return (
    <>
      {/* <!-- BEGIN NAVBAR  --> */}
      <div className='header-container fixed-top'>
        <header className='header navbar navbar-expand-sm'>
          <ul className='navbar-item theme-brand flex-row  text-center'>
            {/* <li className='nav-item theme-logo'>
              <a href='index-2.html'>
                <img
                  src='assets/img/logo.svg'
                  className='navbar-logo'
                  alt='logo'
                />
              </a>
            </li> */}
            <li className='nav-item theme-text'>
              <Link to='/' className='nav-link'>
                {" "}
                Smart Garbage Management System{" "}
              </Link>
            </li>
          </ul>

          <ul className='navbar-item flex-row ml-md-auto'>
            <li className='nav-item dropdown user-profile-dropdown'>
              <span
                style={{ cursor: "pointer" }}
                className='nav-link dropdown-toggle user'
                id='userProfileDropdown'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='true'>
                <img src='assets/img/dummy.png' alt='avatar' />
              </span>
              <div
                className='dropdown-menu position-absolute'
                aria-labelledby='userProfileDropdown'>
                <div className=''>
                  <div className='dropdown-item'>
                    <Link className='' to='/profile'>
                      <Feather name='user' />
                      My Profile
                    </Link>
                  </div>

                  <div className='dropdown-item'>
                    <Link className='' to='/change-password'>
                      <Feather name='lock' />
                      Password
                    </Link>
                  </div>
                  <div className='dropdown-item'>
                    <Link className='' to='/logout'>
                      <Feather name='log-out' />
                      Sign Out
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
      {/* <!-- END NAVBAR  --> */}

      {/* <!-- BEGIN NAVBAR  --> */}
      <div className='sub-header-container'>
        <header className='header navbar navbar-expand-sm'>
          <span
            style={{ cursor: "pointer" }}
            className='sidebarCollapse'
            data-placement='bottom'>
            <Feather name='menu' />
          </span>
        </header>
      </div>
      {/* <!-- END NAVBAR  --> */}
    </>
  );
};

export default Header;
