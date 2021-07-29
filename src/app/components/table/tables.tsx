import { GridColumns } from '@material-ui/data-grid';
import React from 'react';

const calculateWidth = (header: string) => {
  return header.length * 20;
};

const petsTableColumns: GridColumns = [
  {
    field: '',
    flex: 1,
  },
];

export default {};
