import React from "react";

const SimpleTable = (props) => {
  let table = (
    <table className='table style-2 table-hover' style={{ width: "100%" }}>
      <thead>
        <tr>
          {props.header.map((head, index) => (
            <th className='text-center' key={index}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );

  return <div className='table-responsive mb-4 mt-4'>{table}</div>;
};

export default SimpleTable;
