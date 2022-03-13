import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions';
import withNavigation from '../../../hoc/withNavigation';

class LeftSidebar extends Component {
  state = {};
  componentDidMount() {
    $('.sidebar-close').on('click', function () {
      $('body').removeClass('menu-left-open');
      $('.backdrop').fadeOut().remove();
    });
  }

  logoutHandler = () => {
    this.props.userLogout();
    this.props.navigate('/login', { replace: true });
  };

  render() {
    return (
      <div className='sidebar sidebar-left'>
        <div className='profile-link'>
          <a href='#' className='media'>
            <div className='w-auto h-100'>
              <figure className='avatar avatar-40'>
                <img src='img/user1.png' alt='' />{' '}
              </figure>
            </div>
            <div className='media-body'>
              <h5 className=' mb-0'>
                {this.props?.user?.name}
                <span className='status-online bg-success'></span>
              </h5>
              <p>India</p>
            </div>
          </a>
        </div>
        <nav className='navbar'>
          <ul className='navbar-nav'>
            {[
              { link: '/', icon: 'star', title: 'Dashborad' },
              { link: '/map', icon: 'add_location', title: 'Map' },
              { link: '/activity', icon: 'view_carousel', title: 'Activity' },
              // { link: "/userprofile", icon: "person", title: "User Profile" },
            ].map((nav, index) => (
              <li className='nav-item' key={index}>
                <NavLink to={nav.link} className='sidebar-close'>
                  <div className='item-title'>
                    <i className='material-icons'>{nav.icon}</i> {nav.title}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='profile-link text-center'>
          <button
            onClick={this.logoutHandler}
            className='btn btn-link text-white btn-block'>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user:state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(actions.userLogout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(LeftSidebar));
