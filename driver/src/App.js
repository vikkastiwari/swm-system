import React, { Component } from "react";
import Loader from "./Component/Loader";
import LeftSidebar from "./Component/Sidebar/LeftSidebar/LeftSidebar";
import RightSidebar from "./Component/Sidebar/RightSidebar/RightSidebar";
import FullScreenMenu from "./Component/FullScreenMenu/FullScreenMenu";
import Home from "./Component/Home/Home";
import Activity from "./Component/Activity/Activity";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Map from "./Component/Map/Map";
import ScrollToTop from "./Component/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  useLocation,
} from "react-router-dom";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      $(".loader").remove();
    }, 1000);
  }

  render() {
    return (
      <>
        {/* <ScrollToTop /> */}
        <div className='wrapper'>
          <Loader />
          <LeftSidebar />

          <RightSidebar />

          <FullScreenMenu />
          <div className='page'>
            <Header />
            <div className='page-content'>
              <Switch>
                <Route path='/dashboard' component={Home} />
                <Route path='/activity' component={Activity} />
                {/* <Route path="profile" component={} /> */}
                <Route path='/map' component={Map} />
                <Redirect to='/dashboard' />
              </Switch>
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
