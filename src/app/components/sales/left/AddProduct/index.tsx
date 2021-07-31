import {
  Grid,
  Typography,
  Divider,
  TextField,
  IconButton,
  Button,
  MenuItem,
} from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';
import TextInput from 'app/components/Form/TextInput';
import React, { useState } from 'react';
import { useEffect } from 'react';
import api from 'api/useFetch';
const SalesBottom = ({total}) => {
  return (
    <Grid
      container
      spacing={2}
      style={{ margin: 'auto', justifyContent: 'center' }}
    >
      <Grid item md={3}></Grid>
      <Grid item md={3}></Grid>
      <Grid item md={3}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Typography variant="body1" color="textPrimary">
            Tax
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Grand total
          </Typography>
        </div>
      </Grid>
      <Grid item md={3}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="body1" color="textPrimary">
            0.00
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {total || 0.0}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
const ProductSelect = props => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    api({
      url: '/products',
      method: 'GET',
    }).then(res => {
      setOptions(
        res.data.map(product => ({
          label: product.name,
          value: `${product._id}_${product.price}`,
        })),
      );
    });
  }, []);

  return (
    <TextInput select name="f" label="Product" onChange={props.onChange} onBlur={props.onChange} onFocus={props.onChange}>
      <MenuItem value={''} key="" disabled>
        <em>None</em>
      </MenuItem>
      {options
        ? options.map((opt: any) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))
        : null}
    </TextInput>
  );
};
const columns = ['Product', 'Qty', 'Total'];
const ProductForm = ({ index, onChange }) => {
  const [data, setData] = useState( { product: '', price: 0.0, quantity: 0, total: 0.0 });
  const handleChange = event => {
    if (String(event.target.value).split('_').length === 2) {
      const t = String(event.target.value).split('_');
      setData({
        ...data,
        product: t[0],
        price: Number(t[1]),
        total: data.quantity * Number(t[1]),
      });
      onChange(index, data);
    } else {
      setData({
        ...data,
        quantity: event.target.value,
        total: event.target.value * data.price,
      });
      onChange(index, data);
    }
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ margin: 'auto', justifyContent: 'center' }}
      >
        <Grid item xs={12} md={3}>
          <ProductSelect onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextInput
            type="number"
            name={`quantity_${index}`}
            label=""
            example=""
            value={data.quantity}
            onFocus={handleChange}
            onChange={handleChange}
            onBlur={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextInput value={data.total} name={`total_${index}`} label="" example="" disabled />
        </Grid>
      </Grid>
    </>
  );
};
const AddProduct = ({ products, onChange }) => {
  const [total, setTotal] = useState(0.0);
  return (
    <>
      <Grid container style={{ margin: 'auto', justifyContent: 'center' }}>
        {columns.map(column => (
          <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" color="textPrimary">
              {column}
            </Typography>
          </Grid>
        ))}
        <Divider />
      </Grid>
      {products.map((product, index) => (
        <ProductForm index={index} onChange={onChange}/>
      ))}
      <SalesBottom total={products.reduce((pr, cr) => pr += cr.total, 0.0)} />
    </>
  );
};

export default AddProduct;
