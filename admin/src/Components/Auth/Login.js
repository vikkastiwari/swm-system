import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../Store/actions";
import Feather from "../Icons/Feather";

class Login extends Component {
  state = { email: "", password: "" };
  
  componentDidMount() {
    var togglePassword = document.getElementById("toggle-password");
    if (togglePassword) {
      togglePassword.addEventListener("click", function () {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      });
    }
  }

  inputHandler = (event, identifier) => {
    const newState = { ...this.state };
    newState[identifier] = event.target.value;
    this.setState(newState);
  };

  loginForm = (e) => {
    e.preventDefault();

    this.props.userLogin({
      email: this.state.email,
      password: this.state.password,
    });

    // this.setState({ email: "", password: "" });
    // this.props.history.replace("/");
  };

  render() {
   
    return (
      <div className="form-container">
        <div className="form-form">
          <div className="form-form-wrap">
            <div className="form-container">
              <div className="form-content">
                <h1 className="">
                  <span className="brand-name">
                    Smart Waste Management System
                  </span>
                </h1>
                <p className="signup-link">
                  {/* New Here? <a href='auth_register.html'>Create an account</a> */}
                </p>
                <form
                  className="text-left"
                  method="post"
                  onSubmit={this.loginForm}
                >
                  <div className="form">
                    <div id="username-field" className="field-wrapper input">
                      <Feather name="user" />
                      <input
                        id="email"
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Email ID"
                        value={this.state.email}
                        onChange={(e) => this.inputHandler(e, "email")}
                        required
                      />
                    </div>

                    <div
                      id="password-field"
                      className="field-wrapper input mb-2"
                    >
                      <Feather name="lock" />
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e) => this.inputHandler(e, "password")}
                        required
                      />
                    </div>
                    <div className="d-sm-flex justify-content-between">
                      <div className="field-wrapper toggle-pass">
                        <p className="d-inline-block">Show Password</p>
                        <label className="switch s-primary">
                          <input
                            type="checkbox"
                            id="toggle-password"
                            className="d-none"
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <div className="field-wrapper">
                        <button
                          id="loginButton"
                          type="submit"
                          className="btn btn-primary"
                          value=""
                        >
                          Log In
                        </button>
                      </div>
                    </div>

                    {/* <div className='field-wrapper text-center keep-logged-in'>
                    <div className='n-chk new-checkbox checkbox-outline-primary'>
                      <label className='new-control new-checkbox checkbox-outline-primary'>
                        <input type='checkbox' className='new-control-input' />
                        <span className='new-control-indicator'></span>Keep me
                        logged in
                      </label>
                    </div>
                  </div>

                  <div className='field-wrapper'>
                    <a
                      href='auth_pass_recovery.html'
                      className='forgot-pass-link'>
                      Forgot Password?
                    </a>
                  </div> */}
                  </div>
                </form>
                <p className="terms-conditions">© 2021 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-image">
          <div className="l-image"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(actions.userLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
