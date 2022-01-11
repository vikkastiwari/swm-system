import React, { useEffect } from "react";
import feather from "feather-icons";

const Feather = ({ name, ...otherProps }) => {
  useEffect(() => {
    feather.replace();
  }, []);

  return <i data-feather={name} {...otherProps}></i>;
};

export default Feather;

{
  /*  Add = plus <Feather name='plus' className="" />
      Close = x close <Feather name='x' className="" />
      Delete = trash-2  <Feather name='trash-2' className="text-danger" />
      Edit = edit-2 <Feather name='edit-2' className="text-success" />
      View = eye  <Feather name='eye' className="text-primary" />
  */
}
