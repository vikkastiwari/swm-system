import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions";
import $ from "jquery";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "datatables.net-bs4";
import flatpickr from "flatpickr";
import { checkValidity } from "../../shared/utility";
import Notification from "../Notification/Notification";
import Swal from "sweetalert2";
import classes from "./User.css";
import _ from "lodash";

const MyInput = ({
  label,
  validFeedback,
  invalidFeedback,
  change,
  ...otherProps
}) => (
  <>
    <label htmlFor={otherProps.id}>{label}</label>
    {label === "DOB" ? (
      <input {...otherProps} onInput={change} autoComplete="off" />
    ) : (
      <input {...otherProps} onChange={change} autoComplete="off" />
    )}
    <div className="valid-feedback">{validFeedback}</div>
    <div className="invalid-feedback">{invalidFeedback}</div>
  </>
);

const MySelect = ({
  label,
  validFeedback,
  invalidFeedback,
  children,
  change,
  ...otherProps
}) => (
  <>
    <label htmlFor={otherProps.id}>{label}</label>
    <select {...otherProps} onChange={change}>
      {children}
    </select>
    <div className="valid-feedback">{validFeedback}</div>
    <div className="invalid-feedback">{invalidFeedback}</div>
  </>
);

class CreateUser extends Component {
  state = {
    formElements: {
      name: {
        elementType: "input",
        elementConfig: {
          label: "Name",
          type: "text",
          className: "form-control",
          id: "name",
          placeholder: "Enter name...",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "invalid name.",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },

      password: {
        elementType: "input",
        elementConfig: {
          label: "New Password",
          type: "text",
          className: "form-control",
          id: "password",
          placeholder: "New password...",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "invalid password.",
        },
        value: "",
        validation: {
          required: true,
          isPass: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          label: "Email",
          type: "text",
          className: "form-control",
          id: "email",
          placeholder: "Your email...",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "invalid email.",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      mobileNo: {
        elementType: "input",
        elementConfig: {
          label: "Mobile No.",
          type: "text",
          className: "form-control",
          id: "mobileNo",
          placeholder: "Mobile number...",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "invalid mobile number.",
        },
        value: "",
        validation: {
          required: true,
          isMobile: true,
        },
        valid: false,
        touched: false,
      },

      userType: {
        elementType: "select",
        elementConfig: {
          label: "User Type",
          className: "form-control",
          id: "userType",
          placeholder: "Select User Type...",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please select a user type.",
        },
        value: "true",
        validation: {
          required: true,
          isId: true,
        },
        valid: false,
        touched: false,
      },
      active: {
        elementType: "check",
        elementConfig: {},
        value: true,
        validation: {
          required: true,
          isBoolean: true,
        },
        valid: true,
        touched: true,
      },
    },
  };

  componentDidMount() {}

  checkHandler = (event, identifier) => {
    const newState = _.cloneDeep(this.state);
    newState.formElements[identifier].value = event.target.checked;
    this.setState(newState);
  };

  inputHandler = (event, identifier) => {
    const newState = _.cloneDeep(this.state);
    console.log(newState);
    newState.formElements[identifier].value = event.target.value;
    newState.formElements[identifier].touched = true;

    if (newState.formElements[identifier].touched) {
      let element = document.getElementById(event.target.id);

      if (
        !checkValidity(
          event.target.value,
          newState.formElements[identifier].validation
        )
      ) {
        element.className = "form-control " + classes.invalidForm;
        element.parentElement.childNodes[2].style.display = "none";
        element.parentElement.childNodes[3].style.display = "block";
      } else {
        element.className = "form-control " + classes.validForm;
        element.parentElement.childNodes[2].style.display = "block";
        element.parentElement.childNodes[3].style.display = "none";
        newState.formElements[identifier].valid = true;
      }
    }
    this.setState(newState);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    let newState = _.cloneDeep(this.state);
    let data = {};
    let valid = true;

    for (let key in newState.formElements) {
      data[key] = newState.formElements[key].value;
      if (newState.formElements[key].elementType == "check") {
        newState.formElements[key].value = true;
      } else {
        newState.formElements[key].value = "";
      }
      let element = document.getElementById(
        newState.formElements[key].elementConfig.id
      );
      let validity = checkValidity(
        data[key],
        newState.formElements[key].validation
      );
      if (element) {
        if (!validity) {
          element.className = "form-control " + classes.invalidForm;
          element.parentElement.childNodes[2].style.display = "none";
          element.parentElement.childNodes[3].style.display = "block";
        } else {
          element.className = "form-control " + classes.validForm;
          element.parentElement.childNodes[2].style.display = "block";
          element.parentElement.childNodes[3].style.display = "none";
          // newState.formElements[key].valid = true;
        }
      }
      valid = valid && validity;
    }

    if (!valid) {
      Notification("Something went wrong. Please check form data.", "danger");
      // console.log(this.state);
      return;
    }
    // console.log(this.state);
    this.props.createUser({
      type: "CREATE_USER",
      body: data,
    });
    this.setState(newState);
    for (let key in newState.formElements) {
      let element = document.getElementById(
        newState.formElements[key].elementConfig.id
      );

      if (element) {
        element.className = "form-control ";
        element.parentElement.childNodes[2].style.display = "none";
        element.parentElement.childNodes[3].style.display = "none";
      }
    }
  };

  render() {
    return (
      <>
        {/*  <!--  BEGIN CONTENT AREA  --> */}
        <div id="content" className="main-content">
          <div className="layout-px-spacing">
            <div className="row layout-top-spacing">
              <div className="col-xl-12 col-lg-12 col-sm-12  layout-spacing">
                <div className="statbox widget box box-shadow">
                  <div className="widget-header">
                    <div className="row text-center">
                      <div className="col-xl-12 col-md-12 col-sm-12 col-12 ">
                        <h3>Create User</h3>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content widget-content-area br-6">
                    <form
                      className="needs-validation"
                      autoComplete="off"
                      onSubmit={this.onFormSubmit}
                    >
                      <div className="form-row">
                        {["name", "email", "mobileNo"].map((item, index) => (
                          <div className="col-md-4 mb-4" key={index}>
                            <MyInput
                              {...this.state.formElements[item].elementConfig}
                              value={this.state.formElements[item].value}
                              change={(event) => this.inputHandler(event, item)}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="form-row">
                        <div className="col-md-4 mb-4">
                          <MyInput
                            {...this.state.formElements["password"]
                              .elementConfig}
                            value={this.state.formElements["password"].value}
                            change={(event) =>
                              this.inputHandler(event, "password")
                            }
                          />
                        </div>
                        <div className="col-md-4 mb-4">
                          <MySelect
                            {...this.state.formElements["userType"]
                              .elementConfig}
                            value={this.state.formElements["userType"].value}
                            change={(event) =>
                              this.inputHandler(event, "userType")
                            }
                          >
                            <option value="">Select...</option>
                            <option value="driver">Driver</option>
                            <option value="admin">Admin</option>
                          </MySelect>
                        </div>
                        <div className="col-md-4 m-auto">
                          <div className="form-group col-md-6">
                            <div className="form-check pl-0">
                              <div className="custom-control custom-checkbox checkbox-info text-center">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="isActive"
                                  checked={
                                    this.state.formElements["active"].value
                                  }
                                  onChange={(e) =>
                                    this.checkHandler(e, "active")
                                  }
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="isActive"
                                >
                                  Active
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-row justify-content-center">
                        <button className="btn btn-primary mt-3" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (data) => dispatch(actions.createData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
