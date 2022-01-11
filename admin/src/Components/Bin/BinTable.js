import React, { useEffect } from "react";
import Datatable from "../Table/Datatable";
import Feather from "../Icons/Feather";

const BinTable = (props) => {
  let tableBody = null;
  if (props.bins && Array.isArray(props.bins) && props.bins.length !== 0) {
    tableBody = props.bins.map((a) => (
      <tr key={a._id}>
        <td className='text-center'>{a.bin}</td>
        <td className='text-center'>{a.latitude}</td>
        <td className='text-center'>{a.longitude}</td>
        <td className='text-center'>{a.capacity}</td>
        <td className='text-center'>{a.location}</td>
        <td className='text-center'>{a.threshold}</td>
        <td className='text-center'>{a.binType ? a.binType.name : null}</td>
        <td className='text-center'>{a.active ? "Yes" : "No"}</td>
        <td className='text-center'>
          <ul className='table-controls'>
            <li>
              <span
                style={{ cursor: "pointer" }}
                data-toggle='tooltip'
                data-placement='top'
                title='View'
                onClick={() => props.onView(a)}>
                <div>
                  <Feather name='eye' className='text-primary' />
                </div>
              </span>
            </li>
            <li>
              <span
                onClick={() => props.onEdit(a)}
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
                onClick={() => props.onDelete(a)}
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
  }

  const header = [
    "Bin",
    "Latitude",
    "Longitude",
    "Capacity",
    "Location",
    "Threshold",
    "Bin Type",
    "Active",
    "Action",
  ];

  return (
    <Datatable header={header} id='bin-table'>
      {tableBody}
    </Datatable>
  );
};

export default BinTable;
