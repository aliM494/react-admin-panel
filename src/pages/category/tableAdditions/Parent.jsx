import React from "react";

const Parent = ({ id }) => {
  return (
    <>
      <span>
        {id ? id : "ندارد"}
      </span>
    </>
  );
};

export default Parent;
