import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AttrTable from "./AttrTable";
import AddAttr from "./AddAttr";

const Attributes = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  return (
    <>
      <h4 className="text-center my-3">مدیریت ویژگی های دسته بندی</h4>
      <h5 className="text-center my-3">
        ویژگی های :
        <span className="text-primary">
          {location.state.categoryData.title}
        </span>
      </h5>
      <div className="modal-body">
        <div className="container">
          <div className="row justify-content-center">
            <AddAttr
              setData={setData}
              categoryId={location.state.categoryData.id}
            />

            <hr />

            <AttrTable
              dataState={{
                data,
                setData,
              }}
              categoryId={location.state.categoryData.id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Attributes;
