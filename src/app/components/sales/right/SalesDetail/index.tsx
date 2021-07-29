import { Container, Paper, Typography, Divider } from '@material-ui/core';
import { FormInput } from 'app/components/Form';
import TextInput from 'app/components/Form/TextInput';
import { useFormik } from 'formik';
import React from 'react';
const elements = [
  {
    name: 'client',
    type: 'text',
    placeholder: 'Client',
  },
  {
    name: 'payment_in',
    type: 'select',
    placeholder: 'Select Payment Method',
    data: {
      from: 'array',
      options: [
        { value: 'cash', label: 'In Cash' },
        { value: 'Credit', label: 'In Credit' },
      ],
    },
  },
  {
    name: 'currency',
    type: 'select',
    placeholder: 'Select Currency',
    data: {
      from: 'array',
      options: [
        { value: 'USD', label: 'Us Dollar (USD)' },
        { value: 'euro', label: 'Euro' },
      ],
    },
  },
  {
    name: 'exchange_rate',
    type: 'text',
    placeholder: 'Exchange Rate',
  },
  {
    name: 'comment',
    type: 'text',
    placeholder: 'Comment/Description',
  },
];

const receivablesForm = [
  {
    name: 'initial_debt',
    type: 'text',
    placeholder: 'Initial Debt',
  },
  {
    name: 'payment_frequency',
    type: 'text',
    placeholder: 'Payment Frequency',
  },
  {
    name: 'amount_eft',
    type: 'text',
    placeholder: 'Amount Left',
  },
  {
    name: 'debt_time',
    type: 'text',
    placeholder: 'Debt Time',
  },
];

const Receivables = () => {
  const submit = value => {
    console.log(value);
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
    onSubmit: submit,
  });
  return (
    <Container style={{ padding: '24px', marginTop: '24px' }}>
      <Typography variant="h5" color="textSecondary">
        Receivables
      </Typography>
      <Divider color="textSecondary" />
      <form onSubmit={handleSubmit}>
        {receivablesForm.map(element => {
          return (
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
          );
        })}
      </form>
    </Container>
  );
};

const SalesDetail = () => {
  const submit = value => {
    console.log(value);
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
    onSubmit: submit,
  });
  return (
    <>
      <Container style={{ padding: '24px' }}>
        <Typography variant="h5" color="textSecondary">
          Sales Detail
        </Typography>
        <Divider color="textSecondary" />
        <form onSubmit={handleSubmit}>
          {elements.map(element => {
            return (
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
            );
          })}
        </form>
      </Container>

      <Receivables />
    </>
  );
};

export default SalesDetail;
