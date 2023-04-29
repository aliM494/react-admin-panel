import React from "react";
import SpinnerLoad from "../../SpinnerLoad";
import { FastField } from "formik";

const SubmitButton = () => {
  return (
    <>
      <FastField>
        {({ form }) => {
          return (
            <button
              type="submit"
              className="btn btn-primary"
              disabled={form.isSubmitting}
            >
              ذخیره
              {form.isSubmitting ? (
                <SpinnerLoad
                  colorClass={"text-white"}
                  isSmall={true}
                  inline={true}
                />
              ) : null}
            </button>
          );
        }}
      </FastField>
    </>
  );
};

export default SubmitButton;
