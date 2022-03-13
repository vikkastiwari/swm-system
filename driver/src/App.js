import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Component/Loader';
import LeftSidebar from './Component/Sidebar/LeftSidebar/LeftSidebar';
import RightSidebar from './Component/Sidebar/RightSidebar/RightSidebar';
import FullScreenMenu from './Component/FullScreenMenu/FullScreenMenu';
import Home from './Component/Home/Home';
import Activity from './Component/Activity/Activity';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Login from './Component/Login/index';
import Map from './Component/Map/Map';
import ScrollToTop from './Component/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {connect} from 'react-redux'
import * as actions from './Store/actions/index';
import PrivateRoute from './Component/PrivateRoute';
// import PrivateRoute from './Component/';

import { Route, Routes, useLocation, Outlet } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000';

let authToken = null;
axios.interceptors.request.use(
  function (request) {
    if (authToken) {
      request.headers['x-auth-token'] = authToken;
    }
    console.log(request);
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);


class App extends Component {
  componentDidMount() {
    this.props.userAutoLogin();
  }

  render() {
    return (
      <>
        <ScrollToTop>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <MainContent />
                </PrivateRoute>
              }>
              <Route index element={<Home />} />
              <Route path='activity' element={<Activity />} />
              <Route path='map' element={<Map />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </>
    );
  }
}

const MainContent = (props) => (
  <>
    <div className='wrapper'>
      {/* <Loader /> */}
      <LeftSidebar />

      <RightSidebar />

      <FullScreenMenu />
      <div className='page'>
        <Header />
        <div className='page-content'>
          {/* <Routes>

          <Route index element={<Home />} />
          <Route path='activity' element={<Activity />} />
          <Route path='map' element={<Map />} /> */}
          {/* <Route path="" element={} /> */}
          {/* <Footer /> */}
          {/* </Routes> */}
          <Outlet/>
        </div>
      </div>
    </div>
  </>
);

const mapStateToProps = (state) => {
   authToken = state.auth.token;
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAutoLogin : () => dispatch(actions.userAutoLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);