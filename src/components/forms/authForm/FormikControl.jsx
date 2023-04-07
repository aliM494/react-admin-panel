import React from "react";
import Input from "./Input";
import Switch from "../shared/Switch";


const FormikControl = (props) => {
  switch (props.control) {
    case "input":
      return <Input {...props} />;
    case "switch":
      return <Switch {...props} />;
    default:
      return null;
  }
};

export default FormikControl;
