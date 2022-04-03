import React, { Component } from 'react';
import * as actions from "../../Store/actions/index";
import {format} from 'date-fns'
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import withRouter from '../../hoc/withRouter';

class Home extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
    const id = this.props?.user?._id;
    if(id){
      this.props.getData(id);
    }
  }

  changeActivity =  () => {
    this.props.navigate("/activity")
  }
  render() {
    let myBins = null;
    if (
      this.props.userData &&
      this.props.userData.binIds &&
      this.props.userData.binIds.length > 0
    ) {
      myBins = this.props.userData.binIds.map((bin) => (
        <li className='list-group-item' key={bin._id}>
          <a href='#' className='media shadow-15'>
            <div className='media-body'>
              <h5>{bin.bin}</h5>
              {/* <p className='mb-0'>Start Date: 28, July 2018</p> */}
              {/* <h2 className='title-number-carousel color-primary'>
                <span className='text-primary'>75</span>
                <small>/100 %</small>
              </h2> */}
            </div>
            <div className='w-auto'>
              {/* <small className='text-success effort-time'>
                {' '}
                2hrs <i className='material-icons'>arrow_drop_up</i>
              </small>
              <div className='dynamicsparkline'></div> */}
            </div>
          </a>
        </li>
      ));
    }
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
                {/* <h1 className='display-4 mt-4'>
                  26
                  <sup>
                    <small>o</small>
                  </sup>
                  C
                </h1>
                <p className='mb-4'>Thursday, 8:00 AM</p> */}
                <h1 className='display-4 mt-4'>
                  {format(new Date(), 'h:mm aa')}
                </h1>
                <p className='mb-4'>{format(new Date(), 'eeee, PPP')}</p>
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
              <div className='card-body' onClick={this.changeActivity}>
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
          <ul className='list-group mb-4 media-list '>{myBins}</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
