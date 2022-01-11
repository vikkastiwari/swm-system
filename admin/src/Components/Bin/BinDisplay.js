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

const BinDisplay = (props) => {
  return (
    <>
      {/* Start Modal */}
      <Modal
        class='modal-lg'
        id='binModal'
        isUpdate={props.state.isUpdate}
        updateName={["Update Bin", "Add Bin"]}
        submit={props.binButton}>
        <h5 className=''>{props.state.isUpdate ? "Update Bin" : "Add Bin"}</h5>
        <form>
          <div className='form-row mb-4'>
            {[
              { name: "bin", class: "form-group col-md-4" },
              { name: "latitude", class: "form-group col-md-4" },
              { name: "longitude", class: "form-group col-md-4" },
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
              { name: "location", class: "form-group col-md-8" },
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
            <div className='form-group col-md-4'>
              <MyInput
                {...props.state.formElements["threshold"].elementConfig}
                value={props.state.formElements["threshold"].value}
                change={(event) => props.inputHandler(event, "threshold")}
              />
            </div>

            <div className='form-group col-md-8'>
              <MySelect
                {...props.state.formElements["binType"].elementConfig}
                value={props.state.formElements["binType"].value}
                change={(event) => props.inputHandler(event, "binType")}>
                <option value=''>Please Select....</option>
                {props.props.binTypes && props.props.binTypes.length != 0 ? (
                  <>
                    {props.props.binTypes.map((bin) => (
                      <option value={bin._id} key={bin._id}>
                        {bin.name}
                      </option>
                    ))}{" "}
                  </>
                ) : null}
              </MySelect>
            </div>
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

export default BinDisplay;
