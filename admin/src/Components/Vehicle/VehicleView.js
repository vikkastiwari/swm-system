import React from "react";
import Feather from "../Icons/Feather";
import Modal from "../Modal/Modal";
import classes from "./Vehicle.css";
import SimpleTable from "../Table/SimpleTable";

const VehicleView = (props) => {
  return (
    <>
      {/* Start Modal */}
      <Modal class='modal-lg' id='viewDetails' onlyView>
        <h5 className=''>Vehicle Details</h5>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Name :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.vehicle.name}
          </div>
        </div>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Model :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.vehicle.model}
          </div>
        </div>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Capacity :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.vehicle.capacity}
          </div>
        </div>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Vehicle No. :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.vehicle.vehicleNo}
          </div>
        </div>

        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Active :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.vehicle.active ? "Yes" : "No"}
          </div>
        </div>
      </Modal>
      {/* End Modal */}
    </>
  );
};

export default VehicleView;
