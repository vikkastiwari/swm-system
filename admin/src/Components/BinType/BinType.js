import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/CRUD";
import Feather from "../Icons/Feather";
import Modal from "../Modal/Modal";
import SimpleTable from "../Table/SimpleTable";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { checkValidity } from "../../shared/utility";
import Notification from "../Notification/Notification";
import Swal from "sweetalert2";
import Loader from '../Loader/Loader';

class BinType extends Component {
  state = {
    name: "",
    updateId: null,
    isUpdate: false,
    oldName: "",
  };

  componentDidMount() {
    this.props.getBinType({ type: "GET_BINTYPE" });
  }

  inputHandler = (event, identifier) => {
    const newState = { ...this.state };
    newState[identifier] = event.target.value;
    this.setState(newState);
  };

  binTypeButton = () => {
    if (this.state.name == "") {
      Notification("Please enter a valid name.", "danger");
      return;
    }

    console.log("BinType Button" + this.state.isUpdate);
    if (this.state.isUpdate) {
      this.props.updateBinType({
        type: "UPDATE_BINTYPE",
        body: { name: this.state.name },
        id: this.state.updateId,
      });
    } else {
      console.log("BinType Create");
      this.props.createBinType({
        type: "CREATE_BINTYPE",
        body: { name: this.state.name },
      });
    }

    this.setState({
      name: "",
      updateId: null,
      isUpdate: false,
    });
    $("#binTypeModal").modal("hide");
  };

  launchUpdate = (b) => {
    console.log("Launch Update");
    this.setState({
      isUpdate: true,
      updateId: b._id,
      oldName: b.name,
      name: "",
    });
    $("#binTypeModal").modal("show");
  };

  addBinType = () => {
    this.setState({
      isUpdate: false,
      name: "",
      updateId: null,
    });
    $("#binTypeModal").modal("show");
  };

  deleteBinType = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      padding: "2em",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Bin Type has been deleted.", "success");
        this.props.deleteBinType(data);
      }
    });
  };

  render() {
    let table = null;
    const header = ["#", "Name", "Action"];
    if (this.props.binTypes && this.props.binTypes.length !== 0) {
      let tableBody = this.props.binTypes.map((b, i) => (
        <tr key={b._id}>
          <td className='text-center'>{i + 1}</td>
          <td className='text-center'>{b.name}</td>
          <td className='text-center'>
            <ul className='table-controls'>
              <li>
                <span
                  onClick={() => this.launchUpdate(b)}
                  style={{ cursor: "pointer" }}
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Edit'>
                  <div>
                    <Feather name='edit-2' className='text-success' />
                  </div>
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    this.deleteBinType({
                      type: "DELETE_BINTYPE",
                      id: b._id,
                    });
                  }}
                  style={{ cursor: "pointer" }}
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Delete'>
                  <div>
                    <Feather name='trash-2' className='text-danger' />
                  </div>
                </span>
              </li>
            </ul>
          </td>
        </tr>
      ));

      table = <SimpleTable header={header}>{tableBody}</SimpleTable>;
    } else {
      table = this.props.loading ? (
        <Loader />
      ) : (
        <div className='text-center font-weight-bold'>No Bin Type Found.</div>
      );
    }

    return (
      <>
        {/*  <!--  BEGIN CONTENT AREA  --> */}
        <div id='content' className='main-content'>
          <div className='container' style={{ margin: "auto" }}>
            <div className='container'>
              <div className='row layout-top-spacing'>
                <div
                  id='tableCheckbox'
                  className='col-lg-12 col-12 layout-spacing'>
                  <div className='statbox widget box box-shadow'>
                    <div className='widget-header'>
                      <div className='row'>
                        <div className='col-xl-12 col-md-12 col-sm-12 col-12 text-center'>
                          <h3>Bin Type</h3>
                          <div className='text-right'>
                            <button
                              className='btn btn-primary'
                              onClick={this.addBinType}>
                              <Feather name='plus' /> New Bin Type
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='widget-content widget-content-area'>
                      {table}
                    </div>
                  </div>

                  {/* Start Modal */}
                  <Modal
                    id='binTypeModal'
                    isUpdate={this.state.isUpdate}
                    updateName={["Update Bin Type", "Add Bin Type"]}
                    submit={this.binTypeButton}>
                    <h5 className=''>
                      {this.state.isUpdate ? "Update Bin Type" : "Add Bin Type"}
                    </h5>
                    <form>
                      <div className='row'>
                        {this.state.isUpdate ? (
                          <div className='col-md-12'>
                            <label htmlFor='oldName' className=''>
                              Old Name
                            </label>
                            <div className='d-flex event-title'>
                              <input
                                id='oldName'
                                type='text'
                                placeholder='Enter Bin Type Name'
                                className='form-control'
                                name='task'
                                value={this.state.oldName}
                                disabled
                              />
                            </div>
                          </div>
                        ) : null}

                        <div className='col-md-12'>
                          <label htmlFor='newName' className=''>
                            {this.state.isUpdate ? "New Name" : "Name:"}
                          </label>
                          <div className='d-flex event-title'>
                            <input
                              id='newName'
                              type='text'
                              placeholder='Enter Bin Type Name'
                              className='form-control'
                              name='task'
                              onChange={(event) =>
                                this.inputHandler(event, "name")
                              }
                              value={this.state.name}
                            />
                          </div>
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
    binTypes: state.CRUD.binTypes,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBinType: (data) => dispatch(actions.getData(data)),
    createBinType: (data) => dispatch(actions.createData(data)),
    updateBinType: (data) => dispatch(actions.updateData(data)),
    deleteBinType: (data) => dispatch(actions.deleteData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BinType);
