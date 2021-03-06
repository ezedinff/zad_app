import { GridCellParams, GridColumns } from '@material-ui/data-grid';
import React from 'react';
const productsTableColumns: GridColumns = [
  {
    headerName: 'Product Name',
    field: 'name',
    flex: 1,
  },
  {
    headerName: 'Price',
    field: 'price',
    flex: 1,
  },
  {
    headerName: 'Expires After Days',
    field: 'expiresAfterDays',
    flex: 1,
  },
  {
    headerName: 'Is Available',
    field: 'isAvailable',
    flex: 1,
  },
  {
    headerName: 'Available Amount',
    field: 'availableQuantity',
    flex: 1,
  },
  {
    headerName: 'Total Amount Sold',
    field: 'totalQuantitySold',
    flex: 1,
  },
];

const salesTableColumns: GridColumns = [
  {
    headerName: 'Items Sold',
    field: 'items',
    renderCell: items => {
      return (
         // @ts-ignore
        items.value && items.value.map(item => (
          <div>
            <ul>
              <li>Product: {item.product}, Price: {item.unitPrice},  Quantity: {item.quantity}</li>
            </ul>{' '}
          </div>
        ))
      );
    },
    flex: 1,
  },
  {
    headerName: 'Total Price',
    field: 'totalPrice',
    flex: 1,
  },
  {
    headerName: 'Cashier',
    field: 'cashier',
    // @ts-ignore
    valueGetter: param => `${param.value.firstName} ${param.value.lastName}`,
    flex: 1,
  },
];

const productIngredientsTableColumns: GridColumns = [
  {
    headerName: 'Name',
    field: 'name',
    flex: 1,
  },
  {
    headerName: 'Available Amount In Stock',
    field: 'availableInStock',
    flex: 1,
  },
  {
    headerName: 'Unit Price',
    field: 'unitPrice',
    flex: 1,
  },
  {
    headerName: 'Measurement Unit',
    field: 'measurementUnit',
    flex: 1,
  },
];

const expensesTableColumns: GridColumns = [
  {
    headerName: 'Reason',
    field: 'reason',
    flex: 1,
  },
  {
    headerName: 'Amount',
    field: 'amount',
    flex: 1,
  },
];

export default {
  products: productsTableColumns,
  sales: salesTableColumns,
  'product-ingredients': productIngredientsTableColumns,
  expenses: expensesTableColumns,
};
