import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import PaginatedTable from "../../components/PaginatedTable";
import {
  deleteCategoryService,
  getCategoriesService,
} from "../../services/category";
import { convertDateToJalali } from "../../utils/convertToJalali";
import AddCategory from "./AddCategory";
import Actions from "./tableAdditions/Actions";
import ShowInMenu from "./tableAdditions/ShowInMenu";
import Parent from "./tableAdditions/Parent";
import { Alert, Confirm } from "../../utils/alerts";

const CategoryTable = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const [forceReset, setForceReset] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleGetCategories = async () => {
    setLoading(true);
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategories = async (category) => {
    if (
      await Confirm(
        "حذف دسته بندی",
        `آیا از حذف دسته بندی ${category.title} اطمینان دارید ؟`
      )
    ) {
      try {
        const res = await deleteCategoryService(category.id);
        if (res.status === 200) {
          setData(data.filter((d) => d.id != category.id));
          Alert("انجام شد", res.data.message, "success");
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, [params, forceReset]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
  ];

  const additionField = [
    {
      title: "والد",
      elements: (rowData) => <Parent rowData={rowData} />,
    },
    {
      title: "تاریخ",
      elements: (rowData) => convertDateToJalali(rowData.created_at),
    },
    {
      title: "قابل نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          handleDeleteCategories={handleDeleteCategories}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  return (
    <>
      <Outlet />
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOnPage={8}
        searchParams={searchParams}
        loading={loading}
      >
        <AddCategory setForceReset={setForceReset} />
      </PaginatedTable>
    </>
  );
};

export default CategoryTable;
