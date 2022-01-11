import React, { useState, useEffect } from "react";
import $ from "jquery";

const Footer = (props) => {
  useEffect(() => {
    /* page content height for sticky footer */
    $(".content-sticky-footer").css({
      "padding-bottom": $(".footer-wrapper").height() + 35,
    });
    $(".footer-wrapper").css(
      "margin-top",
      -($(".footer-wrapper").height() + 20)
    );
  }, []);
  return (
    <div className="footer-wrapper shadow-15">
      <div className="footer">
        <div className="row mx-0">
          <div className="col">Pickup Portal</div>
          <div className="col-7 text-right">
            <a href="#" className="social">
              <img src="img/facebook.png" alt="" />
            </a>
            <a href="#" className="social">
              <img src="img/googleplus.png" alt="" />
            </a>
            <a href="#" className="social">
              <img src="img/linkedin.png" alt="" />
            </a>
            <a href="#" className="social">
              <img src="img/twitter.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer dark">
        <div className="row mx-0">
          <div className="col  text-center">Copyright @2021, Pickup Portal</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
