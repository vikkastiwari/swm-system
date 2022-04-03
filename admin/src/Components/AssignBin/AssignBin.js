import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/index";
import Feather from "../Icons/Feather";
import Modal from "../Modal/Modal";
import SingleDropdown from "../Dropdown/SingleDropdown";
import MultipleDropdown from "../Dropdown/MultipleDropdown";
import Datatable from "../Table/Datatable";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Swal from "sweetalert2";
import Notification from "../Notification/Notification";

class ActivityFaculty extends Component {
  state = {
    userId: "",
    vehicleId: [],
    binIds: [],
  };

  componentDidMount() {
    this.props.getData({ type: "GET_BIN" });
    this.props.getData({ type: "GET_VEHICLE" });
    this.props.getUserByType("driver");
  }

  dropdownHandler = (values, identity) => {
    const data = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] && values[i] != "") {
        data.push(values[i]);
      }
    }
    let newState = { ...this.state };
    newState[identity] = data;
    console.log(data);
    this.setState(newState);
  };

  assignBinButton = () => {
    this.props.assignBin({
      userId: this.state.userId,
      vehicleId: [...this.state.vehicleId],
      binIds: [...this.state.binIds],
    });

    this.setState(
      {
        vehicleId: [],
        binIds: [],
      },
      () => {
        $("#user-vehicle-select").trigger("change");
        $("#user-bin-select").trigger("change");
      }
    );
    $("#userAssignModal").modal("hide");
  };

  launchEdit = (user) => {
    this.setState(
      {
        userId: user._id,
        vehicleId: user.vehicleId,
        binIds: user.binIds,
      },
      () => {
        $("#user-vehicle-select").trigger("change");
        $("#user-bin-select").trigger("change");
        $("#userAssignModal").modal("show");
      }
    );
  };

  render() {
    let vehicles = <option value=''>No Vehicle Present.</option>;
    if (this.props.vehicles && this.props.vehicles.length !== 0) {
      vehicles = this.props.vehicles.map((vehicle) => (
        <option key={vehicle._id} value={vehicle._id}>
          {vehicle.name + " ( " + vehicle.model + " )"}
        </option>
      ));
    }

    let bins = <option value=''>No Bins Present.</option>;
    if (this.props.bins && this.props.bins.length !== 0) {
      bins = this.props.bins.map((bin) => (
        <option key={bin._id} value={bin._id}>
          {bin.bin + " ( " + bin.location + " )"}
        </option>
      ));
    }

    let table = null;
    let tableBody = null;
    const header = ["#", "Name", "Email", "Contact", "Action"];

    if (this.props.users && this.props.users.length !== 0) {
      tableBody = this.props.users.map((user, index) => (
        <tr key={user._id}>
          <td className='text-center'>{index + 1}</td>
          <td className='text-center'>{user.name}</td>

          <td className='text-center'>{user.email}</td>
          <td className='text-center'>{user.mobileNo}</td>
          <td className='text-center'>
            <ul className='table-controls'>
              <li>
                <span
                  onClick={() => this.launchEdit(user)}
                  style={{ cursor: "pointer" }}
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Edit'>
                  <div>
                    <Feather name='edit-2' className='text-success' />
                  </div>
                </span>
              </li>
            </ul>
          </td>
        </tr>
      ));

      table = (
        <Datatable id='fetch-faculty' header={header}>
          {tableBody}
        </Datatable>
      );
    } else {
      if (this.props.users && this.props.users.length === 0) {
        table = (
          <div className='row justify-content-center'>
            <h5>No users found!</h5>
          </div>
        );
      }
    }

    return (
      <>
        {/*  <!--  BEGIN CONTENT AREA  --> */}
        <div id='content' className='main-content'>
          <div className='' style={{ margin: 'auto' }}>
            <div className='container'>
              <div className='row layout-top-spacing'>
                <div
                  id='tableCheckbox'
                  className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                  <div className='statbox widget box box-shadow'>
                    <div className='widget-header'>
                      <div className='row '>
                        <div className='col-xl-12 col-md-12 col-sm-12 col-12 text-center'>
                          <h3>Assign Bins</h3>
                        </div>
                      </div>
                    </div>
                    <div className='widget-content widget-content-area'>
                      {table}
                    </div>
                  </div>
                  {/* Start Modal */}
                  <Modal
                    id='userAssignModal'
                    isUpdate={false}
                    updateName={['', 'Assign']}
                    submit={this.assignBinButton}>
                    <h5 className=''>Assign Bins</h5>
                    <form>
                      <div className='form-group row mb-4  '>
                        <label
                          htmlFor='colFormLabelLg'
                          className='col-sm-2 col-form-label col-form-label-lg font-weight-bold'>
                          Vehicle
                        </label>
                        <div className='col-sm-10 text-center'>
                          <MultipleDropdown
                            placeholder='Select Vehicle...'
                            id='user-vehicle-select'
                            change={(values) =>
                              this.dropdownHandler(values, 'vehicleId')
                            }
                            value={this.state.vehicleId}>
                            {vehicles}
                          </MultipleDropdown>
                        </div>
                      </div>

                      <div
                        className='form-group row'
                        style={{ marginTop: '50px' }}>
                        <label
                          htmlFor='colFormLabelLg'
                          className='col-sm-2 col-form-label col-form-label-lg font-weight-bold'>
                          Bins
                        </label>
                        <div className='col-sm-10 text-center'>
                          <MultipleDropdown
                            placeholder='Select Bin...'
                            id='user-bin-select'
                            change={(values) =>
                              this.dropdownHandler(values, 'binIds')
                            }
                            value={this.state.binIds}>
                            {bins}
                          </MultipleDropdown>
                        </div>
                      </div>
                    </form>
                  </Modal>
                  {/* End Modal */}
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
  return {
    user: state.user.user,
    users: state.user.users,
    vehicles: state.CRUD.vehicles,
    bins: state.CRUD.bins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(actions.getData(data)),
    getUserByType: (data) => dispatch(actions.getUserByType(data)),
    getSingleUser: (data) => dispatch(actions.getSingleUser(data)),
    assignBin: (data) => dispatch(actions.assignBin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFaculty);
