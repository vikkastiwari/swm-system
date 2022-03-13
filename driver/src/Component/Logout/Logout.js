import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions';
import withNavigation from '../../hoc/withNavigation';

class Logout extends Component {
  state = {};
  componentDidMount() {
    this.props.userLogout();
  }

  componentDidUpdate() {
    // if (!this.props.token) {
      this.props.navigate('/login', { replace: true });
      // }
    }
    
    render() {
      console.log(this.props)
      return <>Redirect to Login</>;
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
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
)(withNavigation(Logout));
