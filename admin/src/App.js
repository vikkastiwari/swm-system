import React, { Component, useEffect } from "react";

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  useLocation,
} from "react-router-dom";
import * as actions from "./Store/actions";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import BinType from "./Components/BinType/BinType";
import Bin from "./Components/Bin/Bin";
import Vehicle from "./Components/Vehicle/Vehicle";
import AssignBin from "./Components/AssignBin/AssignBin";
import CreateUser from "./Components/User/CreateUser";
import FetchUser from "./Components/User/FetchUser";
import SAdminDashboard from "./Components/Dashboard/SAdmin";
import Notification from "./Components/Notification/Notification";
import $ from "jquery";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle.min";
import myApp from "./Initial";
import Login from "./Components/Auth/Login";
import Logout from "./Components/Auth/Logout";
import axios from "axios";
import { connect } from "react-redux";
import Profile from "./Components/Profile/Profile";
import ErrorPage from "./Components/Error/ErrorPage";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Task from "./Pages/Task";

axios.defaults.baseURL = "http://localhost:5000";

// console.log(axios.defaults.headers);
let authToken = null;
axios.interceptors.request.use(
  function (request) {
    if (authToken) {
      request.headers["x-auth-token"] = authToken;
    }
    console.log(request);
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if(response && response.data && response.data.alerts){
      response.data.alerts.forEach(alert => {
        Notification(alert.message, alert.type);
      });
    }
    return response;
  },
  function (error) {
    // console.log(error)
    return Promise.reject(error);
  }
);

class App extends Component {
  loadScript = () => {};

  componentDidMount() {
    console.log(this.props.location.pathname);
    this.props.userAutoLogin();
  }

  componentDidUpdate() {
    console.log(this.props.location.pathname);
  }

  render() {
    return (
      <>
        {!this.props.token ? (
          <>
            <Loader />
            <Switch>
              {/* <Route
                path='/404'
                render={() => (
                  <ErrorPage
                    code='404'
                    message='The page you requested was not found!'
                  />
                )}
              /> */}
              <Route path="/login" component={Login} />

              {/* <Redirect from='/' exact to='/login' />
              <Redirect to='/404' /> */}
              <Redirect to="/login" />
            </Switch>
          </>
        ) : (
          <>
            <Loader />
            <Header />

            <div className="main-container" id="container">
              <div className="overlay"></div>
              <div className="search-overlay"></div>

              <Sidebar />

              <Switch>
                <Route path="/" exact component={SAdminDashboard} />
                <Route path="/bin" component={Bin} />
                <Route path="/vehicle" component={Vehicle} />
                <Route path="/binType" component={BinType} />
                <Route path="/create-user" component={CreateUser} />
                <Route path="/fetch-user" component={FetchUser} />
                <Route path="/assign-bin" component={AssignBin} />
                <Route path="/profile" component={Profile} />
                <Route path="/logout" component={Logout} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/task" component={Task} />
                {/* <Route path="/login" component={Login} /> */}

                <Redirect to="/" />
              </Switch>
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  authToken = state.auth.token;
  return {
    // token: true,
    token: state.auth.token,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAutoLogin: () => dispatch(actions.userAutoLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
