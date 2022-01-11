import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/CRUD";
import VehicleTable from "./VehicleTable";
import VehicleView from "./VehicleView";
import VehicleDisplay from "./VehicleDisplay";
import Feather from "../Icons/Feather";
import { checkValidity } from "../../shared/utility";
import Notification from "../Notification/Notification";
import classes from "./Vehicle.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "datatables.net-bs4";
import flatpickr from "flatpickr";
import Swal from "sweetalert2";
import _ from "lodash";

class Vehicle extends Component {
  state = {
    updateId: null,
    isUpdate: false,
    formElements: {
      name: {
        elementType: "input",
        elementConfig: {
          label: "Name",
          id: "name",
          placeholder: "Vehicle name",
          type: "text",
          className: "form-control",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please enter a valid vehicle name.",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      model: {
        elementType: "input",
        elementConfig: {
          label: "Model",
          id: "model",
          placeholder: "Enter model...",
          type: "text",
          className: "form-control",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please enter a valid model.",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      vehicleNo: {
        elementType: "input",
        elementConfig: {
          label: "Vehicle No.",
          id: "vehicleNo",
          placeholder: "Enter Vehicle No...",
          type: "text",
          className: "form-control",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please enter a valid Vehicle No.",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      capacity: {
        elementType: "input",
        elementConfig: {
          label: "Capacity",
          id: "capacity",
          placeholder: "Enter capacity...",
          type: "text",
          className: "form-control",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please enter a valid capacity.",
        },
        value: "",
        validation: {
          required: true,
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

  componentDidMount() {
    this.props.getData({ type: "GET_VEHICLE" });
  }

  inputHandler = (event, identifier) => {
    const newState = _.cloneDeep(this.state);
    console.log(newState);
    newState.formElements[identifier].value = event.target.value;
    newState.formElements[identifier].touched = true;
    console.log(newState);
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

  vehicleButton = (event) => {
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

    if (newState.isUpdate) {
      this.props.updateVehicle({
        type: "UPDATE_VEHICLE",
        body: update,
        id: newState.updateId,
      });
    } else {
      this.props.createVehicle({
        type: "CREATE_VEHICLE",
        body: update,
      });
    }

    newState.updateId = null;
    newState.isUpdate = false;

    this.setState(newState, () => {
      $("#vehicleModal").modal("hide");
    });
  };

  launchUpdate = (activity) => {
    console.log(activity);
    const newState = _.cloneDeep(this.state);

    for (let key in newState.formElements) {
      newState.formElements[key].value = activity[key];
      let element = document.getElementById(
        newState.formElements[key].elementConfig.id
      );
      if (element) {
        element.className = "form-control";
        element.parentElement.childNodes[2].style.display = "none";
        element.parentElement.childNodes[3].style.display = "none";
      }
    }
    newState.isUpdate = true;
    newState.updateId = activity._id;

    this.setState(newState, () => {
      $("#vehicleModal").modal("show");
    });
  };

  addButton = (event) => {
    event.preventDefault();
    const newState = _.cloneDeep(this.state);

    for (let key in newState.formElements) {
      if (newState.formElements[key].elementType == "check") {
        newState.formElements[key].value = true;
      } else {
        newState.formElements[key].value = "";
      }
      let element = document.getElementById(
        newState.formElements[key].elementConfig.id
      );
      if (element) {
        element.className = "form-control";
        element.parentElement.childNodes[2].style.display = "none";
        element.parentElement.childNodes[3].style.display = "none";
      }
    }
    newState.isUpdate = false;
    newState.updateId = null;

    this.setState(newState, () => {
      $("#vehicleModal").modal("show");
    });
  };

  deleteVehicle = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      padding: "2em",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Vehicle has been deleted.", "success");
        this.props.deleteVehicle(data);
      }
    });
  };

  render() {
    return (
      <>
        {/*  <!--  BEGIN CONTENT AREA  --> */}
        <div id='content' className='main-content'>
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing'>
              <div className='col-xl-12 col-lg-12 col-sm-12  layout-spacing'>
                <div className='statbox widget box box-shadow'>
                  <div className='widget-header'>
                    <div className='row text-center'>
                      {/* text-center */}
                      <div className='col-xl-12 col-md-12 col-sm-12 col-12 '>
                        <h3>Vehicles</h3>
                        <div className='text-right'>
                          <button
                            className='btn btn-primary'
                            onClick={(e) => this.addButton(e)}>
                            <Feather name='plus' /> New Vehicle
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.props.vehicles && this.props.vehicles.length != 0 ? (
                    <VehicleTable
                      vehicles={this.props.vehicles}
                      onView={(a) => {
                        this.props.getSingle({
                          type: "SINGLE_VEHICLE",
                          id: a._id,
                        });
                        $("#viewDetails").modal("toggle");
                      }}
                      onEdit={(a) => this.launchUpdate(a)}
                      onDelete={(a) => {
                        this.deleteVehicle({
                          type: "DELETE_VEHICLE",
                          id: a._id,
                        });
                      }}
                    />
                  ) : (
                    <h5 className='text-center'>No vehicles found.</h5>
                  )}
                </div>
                <VehicleDisplay
                  props={this.props}
                  state={this.state}
                  vehicleButton={this.vehicleButton}
                  checkHandler={this.checkHandler}
                  inputHandler={this.inputHandler}
                />
                {this.props.vehicle ? <VehicleView props={this.props} /> : null}
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
    vehicles: state.CRUD.vehicles,
    vehicle: state.CRUD.vehicle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingle: (data) => dispatch(actions.getSingle(data)),
    getData: (data) => dispatch(actions.getData(data)),
    createVehicle: (data) => dispatch(actions.createData(data)),
    updateVehicle: (data) => dispatch(actions.updateData(data)),
    deleteVehicle: (data) => dispatch(actions.deleteData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
