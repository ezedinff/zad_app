import React, { FC } from 'react';
import { FormElement } from 'utils/forms';
import FormItem from './FormElement';
import SubmitButton from './SubmitButton';
import TextInput from './TextInput';
import { useFormik } from 'formik';
import validation from 'utils/validation';
import { Checkbox, FormControlLabel, Grid, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import MultiSelector from './MultiSelector';
import { MultiSelectorOptionType } from './MultiSelector/types';
import PasswordInput from './PasswordInput';
import { useEffect } from 'react';
import Selector from './Selector';
interface Props {
  data?: any;
  submitForm: (value) => void;
  elements: FormElement[];
  loading: boolean;
  submitButtonTitle: string;
}
const defaultOptions: MultiSelectorOptionType[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];
export const FormInput = ({
  element,
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  switch (element.type) {
    case 'text':
      return (
        <div key={element.name} style={{ width: '100%', margin: '12px 0' }}>
          <FormItem label={element.placeholder}>
            <TextInput
              name={element.name}
              label={element.placeholder}
              error={Boolean(errors[element.name] && touched[element.name])}
              helperText={errors[element.name]}
              value={values[element.name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
        </div>
      );
    case 'password':
      return (
        <div key={element.name} style={{ width: '100%', margin: '12px 0' }}>
          <FormItem label={element.placeholder}>
            <PasswordInput
              fullWidth
              type={element.type}
              name={element.name}
              label={element.placeholder}
              error={Boolean(errors[element.name] && touched[element.name])}
              helperText={errors[element.name]}
              value={values[element.name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
        </div>
      );
    case 'login-checkbox':
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <FormControlLabel
              control={<Checkbox color="primary" name={element.name} />}
              label={element.placeholder}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="textPrimary"
              component={RouterLink}
              to="/forgot-password"
              children={'Forgot Password?'}
            />
          </div>
        </div>
      );
    case 'select':
      return (
        <div key={element.name} style={{ width: '100%', margin: '12px 0' }}>
          <FormItem label={element.placeholder}>
            <Selector
              name={element.name}
              label={element.placeholder}
              error={Boolean(errors[element.name] && touched[element.name])}
              helperText={errors[element.name]}
              value={values[element.name] ? values[element.name] : ''}
              onChange={handleChange}
              onBlur={handleBlur}
              from={element.data.from}
              options={element.data.options}
              url={element.data.url}
            />
          </FormItem>
        </div>
      );
    case 'date':
      return (
        <div key={element.name} style={{ width: '100%', margin: '12px 0' }}>
          <FormItem label={element.placeholder}>
            <TextInput
              type={element.type}
              name={element.name}
              label={element.placeholder}
              error={Boolean(errors[element.name] && touched[element.name])}
              helperText={errors[element.name]}
              value={values[element.name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
        </div>
      );
    case 'multi':
      return (
        <div key={element.name} style={{ width: '100%', margin: '12px 0' }}>
          <FormItem label={element.placeholder}>
            <Selector
              name={element.name}
              label={element.placeholder}
              error={Boolean(errors[element.name] && touched[element.name])}
              helperText={errors[element.name]}
              value={values[element.name] ? values[element.name] : ''}
              onChange={handleChange}
              onBlur={handleBlur}
              from={element.data.from}
              options={element.data.options}
              url={element.data.url}
            />
          </FormItem>
        </div>
      );
    default:
      return <div>Node</div>;
  }
};

const Form: FC<Props> = ({
  data,
  submitForm,
  elements,
  loading,
  submitButtonTitle = 'Create',
}) => {
  const submit = value => {
    submitForm(value);
  };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {},
    validationSchema: validation.petsFormValidationSchema,
    onSubmit: submit,
    enableReinitialize: true,
  });

  useEffect(() => {
    if (!!data) {
      elements.forEach(element => {
        setFieldValue(element.name, data[element.name]);
      });
    }
  }, [elements, data]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {elements.map((element, index) => (
            <Grid
              item
              xs={element.size.xs}
              md={element.size.md}
              key={`element-${index + 1}`}
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <FormInput
                key={element.name}
                handleBlur={handleBlur}
                handleChange={handleChange}
                element={element}
                errors={errors}
                touched={touched}
                values={values}
                setFieldValue={setFieldValue}
              />
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: 'flex',
            marginTop: '16px',
            justifyContent: 'flex-end',
          }}
        >
          <SubmitButton
            size="large"
            fullWidth={submitButtonTitle === 'Login'}
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => submit(values)}
            // disabled={Boolean(Object.entries(errors).length)}
            loading={loading}
            title={submitButtonTitle}
          />
        </div>
      </form>
    </>
  );
};
export default Form;
