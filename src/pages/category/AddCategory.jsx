import React, { useState, useEffect } from "react";
import ModalsContainer from "../../components/ModalsContainer";
import { Formik, Form } from "formik";
import FormikControl from "../../components/forms/normalForm/FormikControl";
import {
  getCategoriesService,
  getSingleCategoryService,
} from "../../services/category";
import { Alert } from "../../utils/alerts";
import SubmitButton from "../../components/forms/normalForm/SubmitButton";
import { useParams } from "react-router-dom";
import { initialValues, onSubmit, validationSchema } from "./core";
import { CategoryContext } from "../../context/categoryContext";
import { useContext } from "react";

const AddCategory = ({ setForceReset }) => {
  const [parents, setParents] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);
  const [editCategory, setEditCategory] = useState(null);
  const { editId, setEditId } = useContext(CategoryContext);
  const params = useParams();

  const handleGetParentsCategories = async () => {
    try {
      const res = await getCategoriesService();

      const allParents = res.data.data;
      if (res.status == 200) {
        setParents(
          allParents.map((p) => {
            return { id: p.id, value: p.title };
          })
        );
      }
    } catch (error) {
      Alert("مشکل..!", "متاسفانه دسته های والد یافت نشدند", "error");
    }
  };

  const handleGetSingleCategory = async () => {
    try {
      const res = await getSingleCategoryService(editId);
      if (res.status == 200) {
        const oldCategory = res.data.data;
        setEditCategory(oldCategory);
      }
    } catch (error) {
      Alert("مشکل..!", "متاسفانه دسته مورد نظر یافت نشد", "error");
    }
  };

  useEffect(() => {
    if (editId) handleGetSingleCategory();
    else setEditCategory(null);
  }, [editId]);

  useEffect(() => {
    handleGetParentsCategories();
  }, []);

  useEffect(() => {
    if (editCategory) {
      setReInitialValues({
        parent_id: editCategory.parent_id || "",
        title: editCategory.title,
        description: editCategory.description,
        image: null,
        is_active: editCategory.is_active ? true : false,
        show_in_menu: editCategory.show_in_menu ? true : false,
      });
    } else if (params.categoryId) {
      setReInitialValues({
        ...initialValues,
        parent_id: params.categoryId,
      });
    } else {
      setReInitialValues(null);
    }
  }, [params.categoryId, editCategory]);

  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_modal"
        onClick={() => setEditId(null)}
      >
        <i className="fas fa-plus text-light"></i>
      </button>

      <ModalsContainer
        fullScreen={true}
        id="add_product_category_modal"
        title={
          editId
            ? editCategory
              ? `ویرایش دسته : ${editCategory.title}`
              : ""
            : "افزودن دسته محصولات"
        }
      >
        <Formik
          initialValues={reInitialValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, setForceReset, editId)
          }
          enableReinitialize
        >
          <Form>
            <div className="container">
              <div className="row justify-content-center">
                {parents.length > 0 ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="select"
                    options={parents}
                    name="parent_id"
                    label="دسته والد"
                  />
                ) : null}

                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان دسته"
                  placeholder="عنوان دسته"
                />

                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="description"
                  label="توضیحات"
                  placeholder="توضیحات"
                />
                {!editId ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="file"
                    name="image"
                    label="تصویر"
                    placeholder="تصویر"
                  />
                ) : null}

                <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="is_active"
                      label="وضعیت فعال"
                    />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="show_in_menu"
                      label="نمایش در منو"
                    />
                  </div>
                </div>
                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                  <SubmitButton />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </ModalsContainer>
    </>
  );
};

export default AddCategory;
