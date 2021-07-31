import {
  Container,
  Grid,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { Add, SaveOutlined } from '@material-ui/icons';
import React from 'react';
import AddProduct from './left/AddProduct';

const Sales = ({ onSubmit }) => {
  const [products, setProducts] = React.useState<
    { product: string; price: number; quantity: number; total: number }[]
  >([]);
  const handleChange = (index, value) => {
    let d = [...products];
    d[index] = value;
    setProducts([...d]);
  };
  const handleSubmit = () => {
    onSubmit({
      items: products.map(product => ({
        product: product.product,
        quantity: product.quantity,
      })),
    });
  };
  return (
    <Grid container spacing={2} style={{ padding: '0 24px' }}>
      <Grid item xs={12}>
        <Container style={{ padding: '24px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Typography variant="h5" color="textSecondary">
                Sales
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  setProducts([
                    ...products,
                    { product: '', price: 0.0, quantity: 0, total: 0.0 },
                  ]);
                }}
                style={{ margin: '8px' }}
              >
                <Add /> Product
              </Button>
              <Button
                style={{ margin: '8px' }}
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleSubmit}
              >
                <SaveOutlined />
                &nbsp;Save
              </Button>
            </div>
          </div>
          <Divider color="textSecondary" style={{ marginBottom: '16px' }} />
          <AddProduct products={products} onChange={handleChange} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Sales;
