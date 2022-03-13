import React, { Component } from 'react';
import { connect } from 'react-redux';
import withRouter from '../../hoc/withRouter';

import * as actions from '../../Store/actions';

class Login extends Component {
  state = { email: '', password: '' };

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
  };
  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate(){
    if(this.props.token){
      const from = this.props.location?.state?.from?.pathname || '/';
      this.props.navigate(from, { replace: true });
    }
  }

  render() {
    
    return (
      <div className='wrapper'>
        <div className='page'>
          <div className='page-content h-100'>
            <div className='background theme-header'>
              <img src='img/city2.jpg' alt='' />
            </div>
            <div className='row mx-0 h-100 justify-content-center'>
              <div className='col-10 col-md-6 col-lg-4 my-3 mx-auto text-center align-self-center'>
                <img src='img/logo-w.png' alt='' className='login-logo' />
                <h1 className='login-title'>
                  <small>Welcome to,</small>
                  <br />
                  SWMS
                </h1>
                <br />
                <h5 className='text-white mb-4'>Login in</h5>
                <div className='login-input-content '>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control rounded text-center'
                      placeholder='Username'
                      value={this.state.email}
                      onChange={(e) => this.inputHandler(e, 'email')}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control rounded text-center'
                      placeholder='Password'
                      value={this.state.password}
                      onChange={(e) => this.inputHandler(e, 'password')}
                    />
                  </div>

                  <button
                    onClick={this.loginForm}
                    className='btn btn-block btn-success rounded border-0 z-3'>
                    Login
                  </button>
                </div>
                <br />
                <br />
                <div className='row no-gutters'>
                  <div className='col-6 text-left'>
                    <a href='forgot-password.html' className='text-white mt-3'>
                      Forget Password?
                    </a>
                  </div>
                  <div className='col-6 text-right'>
                    <a
                      href='register.html'
                      className='text-white text-center mt-3'>
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(actions.userLogin(data)),
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
