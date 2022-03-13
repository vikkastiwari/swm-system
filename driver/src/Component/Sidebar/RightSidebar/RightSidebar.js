import React, { Component } from 'react';

import { connect } from 'react-redux';

class RightSidebar extends Component {
  state = {};
  render() {
    return (
      <div className='sidebar sidebar-right'>
        <header className='row m-0 fixed-header'>
          <div className='left'>
            <a href='javascript:void(0)' className='menu-left-close'>
              <i className='material-icons'>keyboard_backspace</i>
            </a>
          </div>
          <div className='col center'>
            <a href='#' className='logo'>
              User Profile
            </a>
          </div>
        </header>
        <div className='page-content text-white'>
          <div className='row mx-0 mt-3'>
            <div className='col'>
              <div className='card bg-none border-0 shadow-none'>
                <div className='card-body userlist_large'>
                  <div className='media'>
                    <figure className='avatar avatar-120 rounded-circle my-2'>
                      <img src='img/user1.png' alt='user image' />
                    </figure>
                    <div className='media-body' style={{ margin: 'auto' }}>
                      <h4 className='mt-0 text-white'>
                        {this.props?.user?.name}
                      </h4>
                      {/* <p className='text-white'>India</p>
                      <h5 className='text-warning my-2'>
                        <i className='material-icons'>star</i>
                        <i className='material-icons'>star</i>
                        <i className='material-icons'>star</i>
                        <i className='material-icons'>star</i>
                      </h5> */}
                      <div className='mb-0'>
                        Mobile : {this.props?.user?.mobileNo}
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar);
