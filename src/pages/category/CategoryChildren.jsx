import React from "react";
import { useLocation } from "react-router-dom";
import PreventPageButton from "../../components/PreventPageButton";

const CategoryChildren = () => {
  const location = useLocation();

  return (
    <div className="py-3 d-flex justify-content-between">
      <h5 className="text-center">
        <span>زیر گروه :</span>
        <span className="text-info">{location.state.title}</span>
      </h5>
      <PreventPageButton/>
    </div>
  );
};

export default CategoryChildren;
