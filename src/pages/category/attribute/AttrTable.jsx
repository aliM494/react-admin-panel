import React, { useEffect, useState } from "react";
import PaginatedTable from "../../../components/PaginatedTable";
import ShowInFilter from "./tableAdditions/ShowInFilter";
import AttrActions from "./tableAdditions/AttrActions";
import PrevPageButton from "../../../components/PreventPageButton";
import { getCategoryAttrsService } from "../../../services/categoryAttr";

const AttrTable = ({ dataState, categoryId }) => {
  const [loading, setLoading] = useState(false);

  const { data, setData } = dataState;

  const handleGetCategoryAttrs = async () => {
    setLoading(true);
    try {
      const res = await getCategoryAttrsService(categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCategoryAttrs();
  }, []);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "نام ویژگی" },
    { field: "unit", title: "واحد" },
  ];

  const additionField = [
    {
      title: "قابل نمایش در فیلتر",
      elements: (rowData) => <ShowInFilter rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <AttrActions rowData={rowData} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOnPage={8}
        searchParams={searchParams}
        loading={loading}
      >
        <PrevPageButton />
      </PaginatedTable>
    </>
  );
};

export default AttrTable;
