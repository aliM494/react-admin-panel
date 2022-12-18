import React from "react";
import PaginatedTable from "../../components/PaginatedTable";

const CategoryTable = () => {
  const data = [
    {
      id: "1",
      category: "aaa",
      title: "bbb",
      stock: "5",
      price: "1111",
    },
    {
      id: "2",
      category: "aaa",
      title: "bbb",
      stock: "5",
      price: "1111",
    },
    {
      id: "3",
      category: "aaa",
      title: "bbb",
      stock: "5",
      price: "1111",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
  ];

  const additionalElements = (itemId) => {
    return (
      <>
        <i
          className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
          title="زیرمجموعه"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش دسته"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
        <i
          className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
          title="افزودن ویژگی"
          data-bs-placement="top"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_attr_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف دسته"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
      </>
    );
  };

  const additionField = {
    title: "عملیات",
    elemens: (id) => additionalElements(id),
  };

  return (
    <>
      <PaginatedTable data={data} dataInfo={dataInfo} additionField={additionField} />
    </>
  );
};

export default CategoryTable;