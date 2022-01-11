import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/CRUD";
import BinTable from "./BinTable";
import BinView from "./BinView";
import BinDisplay from "./BinDisplay";
import Feather from "../Icons/Feather";
import { checkValidity } from "../../shared/utility";
import Notification from "../Notification/Notification";
import classes from "./Bin.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "datatables.net-bs4";
import flatpickr from "flatpickr";
import Swal from "sweetalert2";
import _ from "lodash";

class Bin extends Component {
  state = {
    updateId: null,
    isUpdate: false,
    formElements: {
      bin: {
        elementType: "input",
        elementConfig: {
          label: "Bin",
          id: "bin",
          placeholder: "Bin unique id",
          type: "text",
          className: "form-control",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please enter a valid bin id.",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      latitude: {
        elementType: "input",
        elementConfig: {
          label: "Latitude",
          id: "latitude",
          placeholder: "Enter latitude...",
          type: "text",
          className: "form-control",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please enter a valid latitude.",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      longitude: {
        elementType: "input",
        elementConfig: {
          label: "Longitude",
          id: "longitude",
          placeholder: "Enter longitude...",
          type: "text",
          className: "form-control",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please enter a valid longitude.",
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
      location: {
        elementType: "input",
        elementConfig: {
          label: "Location",
          id: "location",
          placeholder: "Enter location...",
          type: "text",
          className: "form-control",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please enter a valid location.",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      threshold: {
        elementType: "input",
        elementConfig: {
          label: "Threshold",
          id: "threshold",
          placeholder: "Enter threshold in %",
          type: "text",
          className: "form-control",
          required: true,
          validFeedback: "looks good.",
          invalidFeedback: "please enter a valid threshold.",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      binType: {
        elementType: "select",
        elementConfig: {
          label: "Bin Type",
          className: "form-control",
          id: "binType",
          placeholder: "Select bin type",
          required: "",
          validFeedback: "looks good.",
          invalidFeedback: "please select a bin type.",
        },
        value: "",
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

  componentDidMount() {
    this.props.getData({ type: "GET_BIN" });
    this.props.getData({ type: "GET_BINTYPE" });
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

  binButton = (event) => {
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
      this.props.updateBin({
        type: "UPDATE_BIN",
        body: update,
        id: newState.updateId,
      });
    } else {
      this.props.createBin({
        type: "CREATE_BIN",
        body: update,
      });
    }

    newState.updateId = null;
    newState.isUpdate = false;

    this.setState(newState, () => {
      $("#binModal").modal("hide");
    });
  };

  launchUpdate = (bin) => {
    console.log(bin);
    const newState = _.cloneDeep(this.state);

    for (let key in newState.formElements) {
      if (typeof bin[key] == "object") {
        newState.formElements[key].value = bin[key]._id;
      } else {
        newState.formElements[key].value = bin[key];
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
    newState.isUpdate = true;
    newState.updateId = bin._id;
    console.log(newState);
    this.setState(newState, () => {
      $("#binModal").modal("show");
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
      $("#binModal").modal("show");
    });
  };

  deleteBin = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      padding: "2em",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Bin has been deleted.", "success");
        this.props.deleteBin(data);
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
                        <h3>Bins</h3>
                        <div className='text-right'>
                          <button
                            className='btn btn-primary'
                            onClick={(e) => this.addButton(e)}>
                            <Feather name='plus' /> New Bin
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.props.bins && this.props.bins.length != 0 ? (
                    <BinTable
                      bins={this.props.bins}
                      onView={(a) => {
                        this.props.getSingle({
                          type: "SINGLE_BIN",
                          id: a._id,
                        });
                        $("#viewDetails").modal("toggle");
                      }}
                      onEdit={(a) => this.launchUpdate(a)}
                      onDelete={(a) => {
                        this.deleteBin({
                          type: "DELETE_BIN",
                          id: a._id,
                        });
                      }}
                    />
                  ) : (
                    <h5 className='text-center'>No bins found.</h5>
                  )}
                </div>
                <BinDisplay
                  props={this.props}
                  state={this.state}
                  binButton={this.binButton}
                  checkHandler={this.checkHandler}
                  inputHandler={this.inputHandler}
                />
                {this.props.bin ? <BinView props={this.props} /> : null}
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
    binTypes: state.CRUD.binTypes,
    bins: state.CRUD.bins,
    bin: state.CRUD.bin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingle: (data) => dispatch(actions.getSingle(data)),
    getData: (data) => dispatch(actions.getData(data)),
    createBin: (data) => dispatch(actions.createData(data)),
    updateBin: (data) => dispatch(actions.updateData(data)),
    deleteBin: (data) => dispatch(actions.deleteData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bin);
