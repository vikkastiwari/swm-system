import React, { Component } from 'react';
import * as actions from "../../Store/actions/index";
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';

class Home extends Component {
  state = {};
  componentDidMount() {
    const id = this.props?.user?._id;
    if(id){
      this.props.getData(id);
    }
  }
  render() {
    return (
      <>
        <div className='content-sticky-footer'>
          <div className='col-12 mb-4'>
            <div className='card'>
              <div className='card-body'>
                <i className='material-icons text-warning icon-weather icon-4x'>
                  wb_sunny
                </i>
                <p className='text-uppercase font-weight-bold text-primary'>
                  INDIA
                </p>
                <h1 className='display-4 mt-4'>
                  26
                  <sup>
                    <small>o</small>
                  </sup>
                  C
                </h1>
                <p className='mb-4'>Thursday, 8:00 AM</p>
                <h1>
                  <span className='font-weight-light small'>Welcome</span>
                  <br />
                  <b>{this.props?.user?.name}</b>
                </h1>
              </div>
            </div>
          </div>
          <div className='col-12 mb-4'>
            <div className='card'>
              <div className='card-body'>
                <p className='text-uppercase font-weight-bold text-primary'>
                  Activity
                </p>
                <div className='text-center justify-content-between d-flex'>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'centre',
                    }}>
                    <button className='btn btn-primary rounded sq-btn text-white'>
                      <i className='material-icons w-25px'>mail_outline</i>
                    </button>
                    <span>Assigned</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'centre',
                    }}>
                    <button className='btn btn-warning rounded sq-btn text-white'>
                      <i className='material-icons w-25px'>chat_outline</i>
                    </button>
                    <span>Pending</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'centre',
                    }}>
                    <button className='btn btn-success rounded sq-btn text-white'>
                      <i className='material-icons w-25px'>
                        notifications_outline
                      </i>
                    </button>
                    <span>Done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className='block-title'>Live Pickups</h2>
          <ul className='list-group mb-4 media-list '>
            <li className='list-group-item'>
              <a href='#' className='media shadow-15'>
                <div className='media-body'>
                  <h5>Dustbin 1</h5>
                  {/* <p className="mb-0">Start Date: 28, July 2018</p> */}
                  <h2 className='title-number-carousel color-primary'>
                    <span className='text-primary'>85</span>
                    <small>/100 %</small>
                  </h2>
                </div>
                <div className='w-auto'>
                  <small className='text-danger effort-time'>
                    {' '}
                    2hrs <i className='material-icons'>arrow_drop_down</i>
                  </small>
                  <div className='dynamicsparkline'></div>
                </div>
              </a>
            </li>
            <li className='list-group-item'>
              <a href='#' className='media shadow-15'>
                <div className='media-body'>
                  <h5>Dustbin 2</h5>
                  {/* <p className="mb-0">Start Date: 28, July 2018</p> */}
                  <h2 className='title-number-carousel color-primary'>
                    <span className='text-primary'>74</span>
                    <small>/100 %</small>
                  </h2>
                </div>
                <div className='w-auto'>
                  <small className='text-danger effort-time'>
                    {' '}
                    2hrs <i className='material-icons'>arrow_drop_down</i>
                  </small>
                  <div className='dynamicsparkline'></div>
                </div>
              </a>
            </li>
            <li className='list-group-item'>
              <a href='#' className='media shadow-15'>
                <div className='media-body'>
                  <h5>Dustbin 3</h5>
                  {/* <p className="mb-0">Start Date: 28, July 2018</p> */}
                  <h2 className='title-number-carousel color-primary'>
                    <span className='text-primary'>91</span>
                    <small>/100 %</small>
                  </h2>
                </div>
                <div className='w-auto'>
                  <small className='text-success effort-time'>
                    {' '}
                    2hrs <i className='material-icons'>arrow_drop_up</i>
                  </small>
                  <div className='dynamicsparkline'></div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData : (id)=>dispatch(actions.getSingleUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
