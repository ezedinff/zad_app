import { useFormik } from 'formik';
import * as yup from 'yup';
const useForm = (initialValues, validationSchema, onSubmit) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return formik;
};

export default useForm;
