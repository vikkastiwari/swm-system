import React from "react";
import Feather from "../Icons/Feather";

const Modal = (props) => {
  return (
    <div
      className='modal fade'
      id={props.id}
      tab-index='-1'
      role='dialog'
      aria-labelledby={props.id + "Title"}
      aria-hidden='true'>
      <div
        className={`modal-dialog ${props.class} modal-dialog-centered`}
        role='document'>
        <div className='modal-content'>
          <div className='modal-body'>
            <div data-dismiss='modal'>
              <Feather name='x' className='close' />
            </div>
            <div className='compose-box'>
              <div className='compose-content' id={props.id + "Title"}>
                {props.children}
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button className='btn' data-dismiss='modal'>
              <i className='flaticon-cancel-12'></i> Discard
            </button>
            {!props.onlyView ? (
              <button className='btn btn-primary' onClick={props.submit}>
                {props.isUpdate ? props.updateName[0] : props.updateName[1]}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

{
  /* <Modal
    id='branchModal'
    isUpdate={this.state.isUpdate}
    updateName={["Update Category", "Add Category"]}
    submit={this.categoryButton}></Modal> */
}
