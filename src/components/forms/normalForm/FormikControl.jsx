import React from "react";
import Input from "./Input";
import Switch from "../shared/Switch";
import Select from "./Select";
import TextArea from "./TextArea";
import File from "./File";


const FormikControl = (props) => {
  switch (props.control) {
    case "input":
      return <Input {...props} />;
    case "switch":
      return <Switch {...props} />;
    case "select":
      return <Select {...props} />;
    case "textarea":
      return <TextArea {...props} />;
    case "file":
      return <File {...props} />;
    default:
      return null;
  }
};

export default FormikControl;
