import React, { Component } from "react";
import { connect } from "react-redux";
import feather from "feather-icons";
import CustomIcon from "../Icons/Custom";
import moment from "moment";

class Profile extends Component {
  state = {};

  componentDidMount() {
    feather.replace();
  }

  render() {
    let user = null;
    let degree = null;
    let semester = null;
    if (this.props.user) {
      if (this.props.user.accessCode == "Student") {
        user = (
          <>
            {CustomIcon.student}
            {this.props.user.accessCode}
          </>
        );

        semester = (
          <li className='contacts-block__item'>
            <i data-feather='layers'></i>
            {this.props.user.Semester
              ? "Semester " + this.props.user.Semester.semester
              : " - "}
          </li>
        );

        degree = (
          <li className='contacts-block__item'>
            {CustomIcon.diploma}
            {this.props.user.Degree ? this.props.user.Degree.degreeName : " - "}
          </li>
        );
      } else {
        user = (
          <>
            {CustomIcon.teacher}
            {this.props.user.accessCode}
          </>
        );
      }
    }
    return (
      <>
        {/*  <!--  BEGIN CONTENT AREA  --> */}
        <div id='content' className='main-content'>
          <div className='container' style={{ margin: "auto" }}>
            <div className='container'>
              <div className='row layout-top-spacing justify-content-center'>
                <div
                  id='tableCheckbox'
                  className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing'>
                  <div className='statbox widget box box-shadow'>
                    <div className='widget-header'>
                      <div className='row '>
                        <div className='col-xl-12 col-md-12 col-sm-12 col-12'>
                          <div className='user-profile layout-spacing'>
                            <div className='widget-content widget-content-area'>
                              <div className='d-flex justify-content-center'>
                                <h3 className=''>Profile</h3>
                              </div>
                              <div className='text-center user-info'>
                                <img
                                  src='assets/img/dummy.png'
                                  alt='avatar'
                                  width='90px'
                                  height='90px'
                                />
                                <p className=''>
                                  {this.props.user
                                    ? this.props.user.firstName +
                                      " " +
                                      this.props.user.middleName +
                                      " " +
                                      this.props.user.lastName
                                    : null}
                                </p>
                                <h6>
                                  {this.props.user
                                    ? "( " + this.props.user.erpId + " )"
                                    : null}
                                </h6>
                              </div>
                              <div className='user-info-list'>
                                <div className=''>
                                  <ul className='contacts-block list-unstyled'>
                                    <li className='contacts-block__item'>
                                      {user}
                                    </li>
                                    <li className='contacts-block__item'>
                                      <i data-feather='calendar'></i>
                                      {this.props.user
                                        ? moment(
                                            this.props.user.DOB.split("/")
                                              .reverse()
                                              .join("-")
                                          ).format("Do MMMM, YYYY")
                                        : " - "}
                                    </li>
                                    <li className='contacts-block__item'>
                                      <i data-feather='mail'></i>
                                      {this.props.user
                                        ? this.props.user.email
                                        : " - "}
                                    </li>
                                    <li className='contacts-block__item'>
                                      <i data-feather='phone'></i>
                                      {this.props.user
                                        ? this.props.user.mobileNo
                                        : " - "}
                                    </li>
                                    {degree}
                                    <li className='contacts-block__item'>
                                      {CustomIcon.branch}
                                      {this.props.user && this.props.user.Branch
                                        ? this.props.user.Branch.branchName
                                        : " - "}
                                    </li>
                                    {semester}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
