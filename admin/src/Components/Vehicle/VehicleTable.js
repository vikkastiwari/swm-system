import React, { useEffect } from "react";
import Datatable from "../Table/Datatable";
import Feather from "../Icons/Feather";

const BinTable = (props) => {
  let tableBody = null;
  if (
    props.vehicles &&
    Array.isArray(props.vehicles) &&
    props.vehicles.length !== 0
  ) {
    tableBody = props.vehicles.map((a) => (
      <tr key={a._id}>
        <td className='text-center'>{a.name}</td>
        <td className='text-center'>{a.model}</td>
        <td className='text-center'>{a.capacity}</td>
        <td className='text-center'>{a.vehicleNo}</td>
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
    "Name",
    "Model",
    "Capacity",
    "Vehicle No.",
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
