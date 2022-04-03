import React from "react";
import classes from "./User.css";
import Datatable from "../Table/Datatable";
import Modal from "../Modal/Modal";
import Feather from "../Icons/Feather";

const StudentView = (props) => {
  let binTable = null;
  if (
    props.user &&
    props.user.binIds &&
    props.user.binIds.length &&
    props.user.binIds.length !== 0 &&
    props.dailyLog &&
    props.dailyLog.binIds &&
    props.dailyLog.binIds.length > 0
  ) {
    let tableBody = props.user.binIds.map((bin, i) => {
      console.log(bin);
      console.log(props.dailyLog.binIds);
      let gotBin = props.dailyLog.binIds.find((b) => b._id === bin._id);
      return (
        <tr key={bin._id}>
          <td className='text-center'>{i + 1}</td>
          <td className='text-center'>{bin.bin}</td>
          <td className='text-center'>{bin.location}</td>
          <td className='text-center'>{bin.latitude}</td>
          <td className='text-center'>{bin.longitude}</td>
          <td className='text-center'>
            {gotBin?.collected ? 'Collected' : 'Pending'}
          </td>
        </tr>
      );
    });
    console.log(props.user.binIds);

    const header = ['#', 'Bin', 'Location', 'Latitude', 'Longitude', 'Status'];
    binTable = (
      <Datatable id='user-detail-table' header={header}>
        {tableBody}
      </Datatable>
    );
  } else {
    binTable = (
      <div className='text-center font-weight-bold'>Not assigned any bins.</div>
    );
  }

  return (
    <>
      {/* <!-- Modal --> */}
      <Modal id='userDetail' class='modal-lg' onlyView={true}>
        <h5 className=''>User Detail</h5>
        {props.user ? (
          <>
            <div className={"row " + classes.Faculty}>
              <div className={"col-4 " + classes.colLabel}>Name :</div>
              <div className={"col-8 " + classes.colValue}>
                {props.user.name}
              </div>
            </div>
            <div className={"row " + classes.Faculty}>
              <div className={"col-4 " + classes.colLabel}>Email :</div>
              <div className={"col-8 " + classes.colValue}>
                {props.user.email}
              </div>
            </div>
            <div className={"row " + classes.Faculty}>
              <div className={"col-4 " + classes.colLabel}>Mobile No. :</div>
              <div className={"col-8 " + classes.colValue}>
                {props.user.mobileNo}
              </div>
            </div>
            <div className={"row " + classes.Faculty}>
              <div className={"col-4 " + classes.colLabel}>User Type :</div>
              <div className={"col-8 " + classes.colValue}>
                {props.user.userType == "admin" ? "Admin" : "Driver"}
              </div>
            </div>
            <div className={"row " + classes.Faculty}>
              <div className={"col-4 " + classes.colLabel}>Active :</div>
              <div className={"col-8 " + classes.colValue}>
                {props.user.active ? "Yes" : "No"}
              </div>
            </div>
            {props.user.userType == "driver" ? (
              <>
                <div className={"row " + classes.Faculty}>
                  <div
                    className='col-4'
                    style={{
                      fontSize: "16px",
                      // textAlign: "right",
                      fontWeight: "bold",
                    }}>
                    Assigned Bins :
                  </div>
                  <div className={"col-8 " + classes.colValue}></div>
                </div>
                <div
                  className='row justify-content-center'
                  style={{ margin: "15px 15px 0 15px" }}>
                  {binTable}
                </div>
              </>
            ) : null}
          </>
        ) : null}
      </Modal>

      {/* End Modal */}
    </>
  );
};

export default StudentView;
