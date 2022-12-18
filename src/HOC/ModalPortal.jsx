import React from "react";
import { createPortal } from "react-dom";

const ModalPortal = (Modal) => {
  const NewComponent = () => {
    return createPortal(<Modal />, document.getElementById("modals-root"));
  };

  return NewComponent;
};

export default ModalPortal;
