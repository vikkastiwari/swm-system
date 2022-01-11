import React from "react";
import Modal from "../Modal/Modal";

const MyInput = ({
  label,
  validFeedback,
  invalidFeedback,
  change,
  ...otherProps
}) => (
  <>
    <label htmlFor={otherProps.id}>{label}</label>
    <input {...otherProps} onChange={change} />
    <div className='valid-feedback'>{validFeedback}</div>
    <div className='invalid-feedback'>{invalidFeedback}</div>
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
    <div className='valid-feedback'>{validFeedback}</div>
    <div className='invalid-feedback'>{invalidFeedback}</div>
  </>
);

const VehicleDisplay = (props) => {
  return (
    <>
      {/* Start Modal */}
      <Modal
        class='modal-lg'
        id='vehicleModal'
        isUpdate={props.state.isUpdate}
        updateName={["Update Vehicle", "Add Vehicle"]}
        submit={props.vehicleButton}>
        <h5 className=''>
          {props.state.isUpdate ? "Update Vehicle" : "Add Vehicle"}
        </h5>
        <form>
          <div className='form-row mb-4'>
            {[
              { name: "name", class: "form-group col-md-6" },
              { name: "model", class: "form-group col-md-6" },
            ].map((item, index) => (
              <div className={item.class} key={index}>
                <MyInput
                  {...props.state.formElements[item.name].elementConfig}
                  value={props.state.formElements[item.name].value}
                  change={(event) => props.inputHandler(event, item.name)}
                />
              </div>
            ))}
          </div>
          <div className='form-row mb-4'>
            {[
              { name: "capacity", class: "form-group col-md-4" },
              { name: "vehicleNo", class: "form-group col-md-8" },
            ].map((item, index) => (
              <div className={item.class} key={index}>
                <MyInput
                  {...props.state.formElements[item.name].elementConfig}
                  value={props.state.formElements[item.name].value}
                  change={(event) => props.inputHandler(event, item.name)}
                />
              </div>
            ))}
          </div>

          <div className='form-row mb-4'>
            <div className='form-group col-md-6'>
              <div className='form-check pl-0'>
                <div className='custom-control custom-checkbox checkbox-info text-center'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='isActive'
                    checked={props.state.formElements["active"].value}
                    onChange={(e) => props.checkHandler(e, "active")}
                  />
                  <label className='custom-control-label' htmlFor='isActive'>
                    Active
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
      {/* End Modal */}
    </>
  );
};

export default VehicleDisplay;
