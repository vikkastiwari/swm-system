import React from "react";
import Feather from "../Icons/Feather";
import Modal from "../Modal/Modal";
import classes from "./Bin.css";
import SimpleTable from "../Table/SimpleTable";

const BinView = (props) => {
  console.log(props.props.bin);
  return (
    <>
      {/* Start Modal */}
      <Modal class='modal-lg' id='viewDetails' onlyView>
        <h5 className=''>Activity Detail</h5>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Bin :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.bin.bin}
          </div>
        </div>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Latitude :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.bin.latitude}
          </div>
        </div>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Longitude :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.bin.longitude}
          </div>
        </div>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Capacity :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.bin.capacity}
          </div>
        </div>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Location :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.bin.location}
          </div>
        </div>

        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Threshold :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.bin.threshold}
          </div>
        </div>
        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Bin Type :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.bin.binType ? props.props.bin.binType.name : ""}
          </div>
        </div>

        <div className={"row " + classes.Activity}>
          <div className={"col-4 " + classes.colLabel}>Active :</div>
          <div className={"col-8 " + classes.colValue}>
            {props.props.bin.active ? "Yes" : "No"}
          </div>
        </div>
      </Modal>
      {/* End Modal */}
    </>
  );
};

export default BinView;
