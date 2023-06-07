import React, { useEffect, useState } from "react";
import { getSingleCategoryService } from "../../../services/category";

const Parent = ({ rowData }) => {
  const [parentName, setParentName] = useState("");

  const { parent_id } = rowData;

  const handleGetParentName = async (id) => {
    try {
      const res = await getSingleCategoryService(id);

      if (res.status === 200) {
        setParentName(res.data.data.title);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (parent_id) {
      handleGetParentName(parent_id);
    }
  }, []);

  return (
    <>
      <span>{parent_id ? parentName : "ندارد"}</span>
    </>
  );
};

export default Parent;
