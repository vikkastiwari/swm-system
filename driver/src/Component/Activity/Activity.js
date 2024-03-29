import React, { useEffect } from "react";
import $ from "jquery";
import Swiper from "swiper/dist/js/swiper";
import "jquery-circle-progress/dist/circle-progress";
import Footer from "../Footer/Footer";

const Activity = () => {
  useEffect(() => {
    /*Swiper carousel */
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      <div className='content-sticky-footer'>
        {/* <div className="col-12 mb-1">
          <div className="card">
            <div className="card-body text-center">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2 text-right pr-4">
                  <div className="w-100">
                    <p className="text-uppercase font-weight-bold text-right text-primary">
                      Today
                    </p>
                    <div className="dynamicsparkline my-3"></div>
                    <h2 className="font-weight-light mb-0">$1560</h2>
                    <div className="text-success text-right mt-3">
                      {" "}
                      2hrs <i className="material-icons vm">arrow_drop_up</i>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 border-left text-left pl-4">
                  <div className="w-100">
                    <p className="text-uppercase font-weight-bold text-primary">
                      Yesterday
                    </p>
                    <div className="dynamicsparkline my-3"></div>
                    <h2 className="font-weight-light mb-0">$2150</h2>
                    <div className="text-danger text-left mt-3">
                      {" "}
                      2hrs <i className="material-icons vm">arrow_drop_down</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <h2 className='block-title'>Summary</h2>
        <div className='w-100'>
          <ul className='list-group mb-4 media-list'>
            <li className='list-group-item'>
              <a href='#' className='media shadow-15'>
                <div className='w-auto h-100 mr-2'>
                  <div className='avatar avatar-80 gradient-success text-center'>
                    <i className='material-icons icon-3x'>mail</i>
                  </div>
                </div>
                <div className='media-body'>
                  <p className='text-uppercase text-primary small mb-0'>
                    Completed
                  </p>
                  <h3>5</h3>
                  {/* <p>My view is to create greate things </p> */}
                </div>
              </a>
            </li>
          </ul>
          <ul className='list-group mb-4 media-list'>
            <li className='list-group-item'>
              <a href='#' className='media shadow-15'>
                <div className='w-auto h-100 mr-2'>
                  <div className='avatar avatar-80 gradient-primary text-center'>
                    <i className='material-icons icon-3x'>notifications</i>
                  </div>
                </div>
                <div className='media-body'>
                  <p className='text-uppercase text-primary small mb-0'>
                    Pending
                  </p>
                  <h3>7</h3>
                  {/* <p>My view is to create greate things </p> */}
                </div>
              </a>
            </li>
          </ul>
          <ul className='list-group mb-4 media-list'>
            <li className='list-group-item'>
              <a href='#' className='media shadow-15'>
                <div className='w-auto h-100 mr-2'>
                  <div className='avatar avatar-80 gradient-danger text-center'>
                    <i className='material-icons icon-3x'>favorite</i>
                  </div>
                </div>
                <div className='media-body'>
                  <p className='text-uppercase text-primary small mb-0'>
                    Assigned
                  </p>
                  <h3>12</h3>
                  {/* <p>My view is to create greate things </p> */}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Activity;
