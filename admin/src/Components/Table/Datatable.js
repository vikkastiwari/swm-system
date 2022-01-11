import React, { useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "datatables.net-bs4";

const Datatable = (props) => {
  useEffect(() => {
    setTimeout(() => {
      $(`#${props.id}`).DataTable({
        pagingType: "full_numbers",
        oLanguage: {
          oPaginate: {
            sFirst: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
            sPrevious: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
            sNext: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
            sLast: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
          },
          sInfo: "Showing page _PAGE_ of _PAGES_",
          sSearch: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
          sSearchPlaceholder: "Search...",
          sLengthMenu: "Results :  _MENU_",
        },
        stripeClasses: [],
        lengthMenu: [10, 25, 50],
        pageLength: 10,
      });
      $(".dataTables_empty").parent().hide();
    }, 20);
  }, []);

  let table = (
    <table
      id={props.id}
      className='table style-2 table-hover'
      style={{ width: "100%" }}>
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

export default Datatable;
