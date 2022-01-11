import React from 'react'

const FullMap =()=>{
    return (
        <div className="wrapper">
        <div className="sidebar sidebar-left">
            <div className="profile-link">
                <a href="#" className="media">
                    <div className="w-auto h-100">
                        <figure className="avatar avatar-40"><img src="img/user1.png" alt=""/> </figure>
                    </div>
                    <div className="media-body">
                        <h5 className=" mb-0">John Doe <span className="status-online bg-success"></span></h5>
                        <p>India</p>
                    </div>
                </a>
            </div>
            <nav className="navbar">
                <ul className="navbar-nav">                    
                    <li className="nav-item">
                        <a href="index.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">star</i> Welcome
                            </div>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="javascript:void(0)" className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">menu</i> Menu
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a href="javascript:void(0)" className="sidebar-close  dropdown-item">
                             Menu Overlay (This)
                            </a>
                            <a href="#" className="sidebar-close dropdown-item menu-right">
                             Push Content
                            </a>
                            <a href="javascript:void(0)" className="sidebar-close dropdown-item popup-open" data-toggle="modal" data-target="#fullscreenmenu">
                             Full Screen
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="javascript:void(0)" className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">poll</i> Project
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a href="dashboard.html" className="sidebar-close dropdown-item">Dashbaord</a>
                            <a href="projects.html" className="sidebar-close dropdown-item">Projects</a>
                            <a href="project-detail.html" className="sidebar-close dropdown-item">Project Details</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="javascript:void(0)" className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">library_books</i> Pages
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a href="chat.html" className="sidebar-close dropdown-item">Chat</a>
                            <a href="comingsoon.html" className="sidebar-close dropdown-item">Coming Soon</a>
                            <a href="login.html" className="sidebar-close dropdown-item">Sign in</a>
                            <a href="register.html" className="sidebar-close dropdown-item">Sign Up</a>
                            <a href="forgot-password.html" className="sidebar-close dropdown-item">Forgot Password</a>
                            <a href="error.html" className="sidebar-close dropdown-item">Error</a>
                            <a href="404.html" className="sidebar-close dropdown-item">Error 404</a>
                            <a href="map.html" className="sidebar-close dropdown-item">Map</a>
                            <a href="fullmap.html" className="sidebar-close dropdown-item">Full Map</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="javascript:void(0)" className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">collections</i> Images
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a href="rounded-thumbnails.html" className="sidebar-close dropdown-item">Rounded Thumbnails</a>
                            <a href="circular-thumbnails.html" className="sidebar-close dropdown-item">Circular Thumbnails</a>
                            <a href="wide-images.html" className="sidebar-close dropdown-item">Wide Images</a>
                            <a href="wide-categories.html" className="sidebar-close dropdown-item">Wide Catogory</a>
                            <a href="gallery.html" className="sidebar-close dropdown-item">Gallery</a>
                            <a href="viwer.html" className="sidebar-close dropdown-item">Viewer</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="javascript:void(0)" className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">view_carousel</i> Introduction
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a href="carousel-intro.html" className="sidebar-close dropdown-item">Carousel Intro</a>
                            <a href="splash-intro.html" className="sidebar-close dropdown-item">Splash Carosuel</a>
                            <a href="small-intro.html" className="sidebar-close dropdown-item">Small Intro</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="user-profile.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">person</i> User Profile
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="aboutus.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">domain</i> About
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="colorscheme.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">format_color_fill</i> Color Scheme
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="component.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">pages</i> Component
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="contactus.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">add_location</i> Contact Us
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="profile-link text-center">
                <a href="login.html" className="btn btn-link text-white btn-block">Logout</a>
            </div>
        </div>
        
        <div className="sidebar sidebar-right">
            <header className="row m-0 fixed-header">
                <div className="left">
                    <a href="javascript:void(0)" className="menu-left-close"><i className="material-icons">keyboard_backspace</i></a>
                </div>
                <div className="col center">
                    <a href="#" className="logo">Best Rated</a>
                </div>
            </header>
            <div className="page-content text-white">
                <div className="row mx-0 mt-3">
                    <div className="col">
                        <div className="card bg-none border-0 shadow-none">
                            <div className="card-body userlist_large">
                                <div className="media">
                                    <figure className="avatar avatar-120 rounded-circle my-2">
                                        <img src="img/user1.png" alt="user image"/>
                                    </figure>
                                    <div className="media-body">
                                        <h4 className="mt-0 text-white">Max Johnsons</h4>
                                        <p className="text-white">VP, Maxartkiller Co. Ltd., India</p>
                                        <h5 className="text-warning my-2">
											<i className="material-icons">star</i>
											<i className="material-icons">star</i>
											<i className="material-icons">star</i>
											<i className="material-icons">star</i>
											
										</h5>
                                        <div className="mb-0">Overux is HTML template based on Bootstrap 4.1 framework. This html template can be used in various business domains like Manufacturing, inventory, IT, administration etc.</div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade popup-fullmenu" id="fullscreenmenu" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content fullscreen-menu">
                    <div className="modal-header">
                        <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <a href="https://maxartkiller.com/profile/" className="block user-fullmenu popup-close">
                            <figure>
                                <img src="img/user1.png" alt=""/>
                            </figure>
                            <div className="media-content">
                                <h6>John Doe<br/><small>India</small></h6>
                            </div>
                        </a>
                        <br/>
                        <div className="row mx-0">
                            <div className="col">
                                <div className="menulist">
                                    <ul>
                                        <li>
                                            <a href="index.html" className="popup-close">
                                                <div className="item-title">
                                                    <i className="icon material-icons md-only">poll</i> Dashboard
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="projects.html" className="popup-close">
                                                <div className="item-title">
                                                    <i className="icon material-icons md-only">add_shopping_cart</i> Projects
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="project-detail.html" className="popup-close">
                                                <div className="item-title">
                                                    <i className="icon material-icons md-only">filter_none</i> Details
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="user-profile.html" className="popup-close">
                                                <div className="item-title">
                                                    <i className="icon material-icons md-only">person</i> Profile
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="aboutus.html" className="popup-close">
                                                <div className="item-title">
                                                    <i className="icon material-icons md-only">domain</i> About
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="component.html" className="popup-close">
                                                <div className="item-title">
                                                    <i className="icon material-icons md-only">pages</i> Component
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row mx-0">
                            <div className="col">
                                <a href="login.html" className="rounded btn btn-outline-white text-white popup-close">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="page">
            <form className="searchcontrol">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" className="input-group-text close-search"><i className="material-icons">keyboard_backspace</i></button>
                    </div>
                    <input type="email" className="form-control border-0" placeholder="Search..." aria-label="Username"/>
                </div>
            </form>
            <header className="row m-0 fixed-header">
                <div className="left">
                    <a href="javascript:void(0)" className="menu-left"><i className="material-icons">menu</i></a>
                </div>
                <div className="col center">
                    <a href="#" className="logo">
                        <figure><img src="img/logo-w.png" alt=""/></figure> Full Map</a>
                </div>
                <div className="right">
                    <a href="javascript:void(0)" className="searchbtn"><i className="material-icons">search</i></a>
                    <a href="javascript:void(0)" className="menu-right"><i className="material-icons">person</i></a>
                </div>
            </header>
            <div className="page-content">
                <div className="content-sticky-footer h-100 py-0">
               
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20615.506367939415!2d-83.96219662766346!3d43.515522716314265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8821dadbfe408d7d%3A0x7f126d5922d01036!2sSunrise+Convenience+Store+-+Harrison+North+Marathon!5e0!3m2!1sen!2sin!4v1544874002344"  className=" h-100 w-100 " allowfullscreen></iframe>
                  
                </div>
                <div className="footer-wrapper shadow-15">
                    <div className="footer">
                        <div className="row mx-0">
                            <div className="col">
                                Overux
                            </div>
                            <div className="col-7 text-right">
                                <a href="#" className="social"><img src="img/facebook.png" alt=""/></a>
                                <a href="#" className="social"><img src="img/googleplus.png" alt=""/></a>
                                <a href="#" className="social"><img src="img/linkedin.png" alt=""/></a>
                                <a href="#" className="social"><img src="img/twitter.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer dark">
                        <div className="row mx-0">
                            <div className="col  text-center">
                                Copyright @2018, Maxartkiller
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default FullMap;