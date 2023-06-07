import * as Yup from "yup";
import { addCategoryAttrService } from "../../../services/categoryAttr";
import { Alert } from "../../../utils/alerts";

export const initialValues = {
  title: "",
  unit: "",
  in_filter: true,
};

export const onSubmit = async (values, actions, categoryId, setData) => {
  try {
    values = {
      ...values,
      in_filter: values.in_filter ? 1 : 0,
    };

    const res = await addCategoryAttrService(categoryId, values);

    if (res.status === 201) {
      Alert("عملیات با موفقیت انجام شد", res.data.message, "success");
      setData((oldData) => [...oldData, res.data.data]);
    }
  } catch (error) {}
};

export const validationSchema = Yup.object({
  parent_id: Yup.number(),

  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),

  unit: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),

  in_filter: Yup.boolean(),
});
