import React, { useState, useEffect } from "react";
import $ from "jquery";
const Header = () => {
  useEffect(() => {
    /* url  navigation active */
    let url = window.location;

    $(".sidebar .navbar .nav-item a")
      .filter(function () {
        return this.href == url;
        console.log(url);
      })
      .addClass("active")
      .closest(".dropdown-menu")
      .addClass("show")
      .closest("li.dropdown")
      .addClass("show");

    /* sidebar left  expand collapase */
    $(".menu-left").on("click", function () {
      $("body").addClass("menu-left-open");
      $("body .wrapper").append('<div class="backdrop"></div>');
      $(".backdrop").on("click", function () {
        $("body").removeClass("menu-left-open");
        $(".backdrop").fadeOut().remove();
      });
    });

    /* sideabr right expand collapase */
    $(".menu-right").on("click", function () {
      $("body").addClass("menu-right-open");
      $("body .wrapper").append('<div class="backdrop-right"></div>');
      $(".backdrop-right, .menu-left-close").on("click", function () {
        $("body").removeClass("menu-right-open");
        $(".backdrop-right").fadeOut().remove();
      });
    });

    /* search control visible slide hide slide */
    // $(".searchbtn").on("click", function () {
    //   $(".searchcontrol").addClass("active");
    // });

    $(".close-search").on("click", function () {
      $(".searchcontrol").removeClass("active");
    });
  }, []);
  return (
    <>
      <form className='searchcontrol'>
        {/* <div className='input-group'>
          <div className='input-group-prepend'>
            <button type='button' className='input-group-text close-search'>
              <i className='material-icons'>close</i>
            </button>
          </div>
          <input
            type='email'
            className='form-control border-0'
            placeholder='Search...'
            aria-label='Username'
          />
        </div> */}
      </form>
      <header className='row m-0 fixed-header'>
        <div className='left'>
          <a href='#' className='menu-left'>
            {/* <div className='menu-left'> */}
            <i className='material-icons'>menu</i>
            {/* </div> */}
          </a>
        </div>
        <div className='col center'>
          <a href='#' className='logo'>
            <figure>
              <img src='img/logo-w.png' alt='' />
            </figure>{" "}
            Dashboard
          </a>
        </div>
        <div className='right'>
          {/* <a href='#' className='searchbtn'>
            <i className='material-icons'>search</i>
          </a> */}
          <a href='#' className='menu-right'>
            <i className='material-icons'>person</i>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
