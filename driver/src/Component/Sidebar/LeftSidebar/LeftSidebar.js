import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import $ from "jquery";

const LeftSidebar = () => {
  useEffect(() => {
    $(".sidebar-close").on("click", function () {
      $("body").removeClass("menu-left-open");
      $(".backdrop").fadeOut().remove();
    });
  }, []);

  return (
    <div className='sidebar sidebar-left'>
      <div className='profile-link'>
        <a href='#' className='media'>
          <div className='w-auto h-100'>
            <figure className='avatar avatar-40'>
              <img src='img/user1.png' alt='' />{" "}
            </figure>
          </div>
          <div className='media-body'>
            <h5 className=' mb-0'>
              Durgesh Tiwari <span className='status-online bg-success'></span>
            </h5>
            <p>India</p>
          </div>
        </a>
      </div>
      <nav className='navbar'>
        <ul className='navbar-nav'>
          {[
            { link: "/dashboard", icon: "star", title: "Dashborad" },
            { link: "/map", icon: "add_location", title: "Map" },
            { link: "/activity", icon: "view_carousel", title: "Activity" },
            // { link: "/userprofile", icon: "person", title: "User Profile" },
          ].map((nav, index) => (
            <li className='nav-item' key={index}>
              <NavLink to={nav.link} className='sidebar-close'>
                <div className='item-title'>
                  <i className='material-icons'>{nav.icon}</i> {nav.title}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className='profile-link text-center'>
        <NavLink to='/logout' className='btn btn-link text-white btn-block'>
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSidebar;
