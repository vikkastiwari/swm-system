import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import select2 from "select2";

const SingleDropdown = (props) => {
  useEffect(() => {
    $(`#${props.id}`).select2({
      placeholder: `${props.placeholder ? props.placeholder : "Select..."}`,
      allowClear: true,
      tags: true,
      tokenSeparators: [",", " "],
    });

    $(`#${props.id}`).on("select2:select", function (e) {
      document
        .querySelector(`#${props.id}`)
        .dispatchEvent(new Event("change", { bubbles: true }));
    });

    $(`#${props.id}`).on("select2:unselect", function (e) {
      document
        .querySelector(`#${props.id}`)
        .dispatchEvent(new Event("change", { bubbles: true }));
    });
  }, []);

  return (
    <select
      id={props.id}
      multiple
      className='js-states form-control'
      // onChange={props.change}
      onChange={(e) => {
        const values = Array.from(
          e.target.selectedOptions,
          (option) => option.value
        );
        props.change(values);
      }}
      value={props.value}>
      <option value='' disabled>
        Choose...
      </option>
      {props.children}
    </select>
  );
};

export default SingleDropdown;
