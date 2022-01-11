import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions";

class Logout extends Component {
  state = {};
  componentDidMount() {
    this.props.userLogout();
  }
  render() {
    return <>Redirect to Login</>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(actions.userLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
