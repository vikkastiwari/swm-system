import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/index";
import SingleDropdown from "../Dropdown/SingleDropdown";
import Datatable from "../Table/Datatable";
import Modal from "../Modal/Modal";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import flatpickr from "flatpickr";
import UserView from "./UserView";
import Feather from "../Icons/Feather";
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
      <input {...otherProps} onInput={change} />
    ) : (
      <input {...otherProps} onChange={change} />
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

class FetchUser extends Component {
  state = {
    userType: "",
    buttonClicked: false,
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
    formValidated: false,
    updateUserId: "",
    viewUserId: "",
  };

  componentDidMount() {}

  changeHandler = (event, identifier) => {
    const newState = _.cloneDeep(this.state);
    newState[identifier] = event.target.value;
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

  checkHandler = (event, identifier) => {
    const newState = _.cloneDeep(this.state);
    newState.formElements[identifier].value = event.target.checked;
    this.setState(newState);
  };

  fetchUsers = () => {
    console.log("inside called");

    if (this.state.userType == "") {
      Notification("Please select user type.", "danger");
      return;
    }
    if (this.state.userType !== "") {
      console.log("inside called condition");
      this.props.getUserByType(this.state.userType);
      this.setState({ buttonClicked: true });
    }
  };

  deleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      padding: "2em",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "User has been deleted.", "success");
        this.props.deleteUser({
          type: this.state.userType,
          userId: userId,
        });
      }
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    let update = {};
    let valid = true;
    const newState = _.cloneDeep(this.state);

    for (let key in newState.formElements) {
      update[key] = newState.formElements[key].value;
      if (newState.formElements[key].elementType == "check") {
        newState.formElements[key].value = true;
      } else {
        newState.formElements[key].value = "";
      }
      let element = document.getElementById(
        newState.formElements[key].elementConfig.id
      );
      let validity = checkValidity(
        update[key],
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
      console.log(this.state);
      return;
    }

    this.props.updateUser({
      type: this.state.userType,
      userId: this.state.updateUserId,
      update: update,
    });

    $("#updateUserModal").modal("hide");
  };

  launchEdit = (user) => {
    console.log(user);
    const newState = _.cloneDeep(this.state);

    for (let key in newState.formElements) {
      newState.formElements[key].value = user[key];
      let element = document.getElementById(
        newState.formElements[key].elementConfig.id
      );
      if (element) {
        element.className = "form-control";
        element.parentElement.childNodes[2].style.display = "none";
        element.parentElement.childNodes[3].style.display = "none";
      }
    }
    newState.updateUserId = user._id;

    this.setState(newState, () => {
      $("#updateUserModal").modal("show");
    });
  };

  viewStudent = (userId) => {
    this.setState({ viewUserId: userId });
    console.log(userId);
    this.props.getDailyLog(userId);
    this.props.getSingleUser(userId);
    $("#userDetail").modal("show");
  };

  render() {
    let table = null;
    let tableBody = null;
    const header = ["#", "Name", "Email", "Contact", "Action"];

    if (
      this.state.userType !== "" &&
      this.props.users &&
      this.props.users.length !== 0 &&
      this.state.buttonClicked
    ) {
      tableBody = this.props.users.map((user, index) => (
        <tr key={user._id}>
          <td className="text-center">{index + 1}</td>
          <td className="text-center">{user.name}</td>

          <td className="text-center">{user.email}</td>
          <td className="text-center">{user.mobileNo}</td>
          <td className="text-center">
            <ul className="table-controls">
              <li>
                <span
                  style={{ cursor: "pointer" }}
                  data-toggle="tooltip"
                  onClick={() => this.viewStudent(user._id)}
                  data-placement="top"
                  title="View"
                >
                  <div>
                    <Feather name="eye" className="text-primary" />
                  </div>
                </span>
              </li>
              <li>
                <span
                  onClick={() => this.launchEdit(user)}
                  style={{ cursor: "pointer" }}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Edit"
                >
                  <div>
                    <Feather name="edit-2" className="text-success" />
                  </div>
                </span>
              </li>
              <li>
                <span
                  onClick={() => this.deleteUser(user._id)}
                  style={{ cursor: "pointer" }}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete"
                >
                  <div>
                    <Feather name="trash-2" className="text-danger" />
                  </div>
                </span>
              </li>
            </ul>
          </td>
        </tr>
      ));

      table = (
        <Datatable id="fetch-faculty" header={header}>
          {tableBody}
        </Datatable>
      );
    } else {
      if (
        this.state.userType !== "" &&
        this.props.users &&
        this.props.users.length === 0 &&
        this.state.buttonClicked
      ) {
        table = (
          <div className="row justify-content-center">
            <h5>No users found!</h5>
          </div>
        );
      }
    }

    let userDropdown = (
      <div className='col-xl-6 col-lg-8 col-md-8 col-sm-12 col-12 text-center'>
        <div className='form-group row mb-4'>
          <label
            htmlFor='colFormLabelLg'
            className='col-md-3 col-sm-12 col-form-label col-form-label-lg font-weight-bold'>
            User Type
          </label>
          <div className='col-md-9 col-sm-12'>
            <SingleDropdown
              placeholder='Select User Type...'
              id='user-type'
              change={(e) => this.changeHandler(e, 'userType')}
              value={this.state.userType}>
              <option value='driver'>Drive</option>
              <option value='admin'>Admin</option>
            </SingleDropdown>
          </div>
        </div>
      </div>
    );

    return (
      <>
        {/*  <!--  BEGIN CONTENT AREA  --> */}
        <div id="content" className="main-content">
          <div className="layout-px-spacing">
            <div className="row layout-top-spacing">
              <div className="col-xl-12 col-lg-12 col-sm-12  layout-spacing">
                <div className="statbox widget box box-shadow">
                  <div className="widget-header">
                    <div className="row ">
                      <div className="col-xl-12 col-md-12 col-sm-12 col-12 text-center">
                        <h3>Fetch Users</h3>

                        <div
                          className="row justify-content-center"
                          style={{ marginTop: "50px" }}
                        >
                          {userDropdown}
                        </div>
                        <div className="row justify-content-center">
                          <button
                            onClick={this.fetchUsers}
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content widget-content-area br-6">
                    {table}
                  </div>
                </div>
                {/* <!-- Modal --> */}
                <Modal
                  id="updateUserModal"
                  isUpdate={true}
                  class="modal-lg"
                  updateName={["Update User", ""]}
                  submit={this.onFormSubmit}
                >
                  <h5 className="">Update User</h5>
                  <form
                    id="updateUserForm"
                    className="needs-validation"
                    // onSubmit={this.onFormSubmit}
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
                        <MySelect
                          {...this.state.formElements["userType"].elementConfig}
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
                                onChange={(e) => this.checkHandler(e, "active")}
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
                  </form>
                </Modal>

                {/* <!-- Modal --> */}
                <UserView user={this.props.user} dailyLog={this.props.dailyLog}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    users: state.user.users,
    dailyLog: state.other.dailyLog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserByType: (data) => dispatch(actions.getUserByType(data)),
    getUser: (data) => dispatch(actions.getUser(data)),
    deleteUser: (data) => dispatch(actions.deleteUser(data)),
    getSingleUser: (data) => dispatch(actions.getSingleUser(data)),
    updateUser: (data) => dispatch(actions.updateUser(data)),
    getDailyLog: (id) => dispatch(actions.getDailyLog(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchUser);
