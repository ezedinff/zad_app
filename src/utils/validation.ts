import { FormElement } from './forms';
import * as Yup from 'yup';

const petsFormValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
});

export default {
  petsFormValidationSchema,
};
