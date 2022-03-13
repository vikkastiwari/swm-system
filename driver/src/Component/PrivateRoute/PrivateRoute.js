import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import withLocation from '../../hoc/withLocation';

class PrivateRoute extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    if(!this.props.token){
      return <Navigate to='/login' state={{ from: this.props.location }} />;
    } else {
      return <>{this.props.children}</>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLocation(PrivateRoute));
