import { Formik, Form } from "formik";
import React from "react";
import { validationSchema, initialValues, onSubmit } from "./core";
import FormikControl from "../../../components/forms/normalForm/FormikControl";
import SubmitButton from "../../../components/forms/normalForm/SubmitButton";

const AddAttr = ({ categoryId, setData }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) =>
        onSubmit(values, actions, categoryId, setData)
      }
      validationSchema={validationSchema}
    >
      <Form>
        <div className="row my-3">
          <FormikControl
            control={"input"}
            type={"text"}
            name={"title"}
            label={"عنوان"}
            className={"col-md-6 col-lg-4 my-1"}
            placeholder={"عنوان ویژگی"}
          />
          <FormikControl
            control={"input"}
            type={"text"}
            name={"unit"}
            label={"واحد"}
            className={"col-md-6 col-lg-4 my-1"}
            placeholder={"واحد ویژگی"}
          />

          <div className="col-8 col-lg-2 my-1">
            <FormikControl
              control={"switch"}
              name={"in_filter"}
              label={"نمایش در فیلتر"}
            />
          </div>

          <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start my-1">
            <SubmitButton />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AddAttr;
