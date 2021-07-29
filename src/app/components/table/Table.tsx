import React from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import TableHeader from './TableHeader';
import Form from 'app/components/Form';
import forms from 'utils/forms';
import CustomDialog from '../Dialog';

import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Delete, DeleteOutlined, Edit, EditOutlined } from '@material-ui/icons';
import Container from '@material-ui/core/Container';

import { DataGrid, GridColumns } from '@material-ui/data-grid';
import Box from '@material-ui/core/Box/Box';
import Button from '@material-ui/core/Button';
import Sales from '../sales';
import { actionChannel } from 'redux-saga/effects';
import ConfirmModal from '../Modals/confirm.modal';
type Actions = 'Create' | 'Update' | 'Delete';
interface Props {
  title: any;
  form: any;
  data: any;
  columns: any;
  actions: any;
  loading: boolean;
  onSubmit?: (value, action: Actions) => void;
}
const CustomDataGrid: React.FC<Props> = ({
  title,
  form,
  data,
  columns,
  actions,
  loading,
  onSubmit,
}) => {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [rowToBeEdited, setRowToBeEdited] = useState(null);
  const [action, setAction] = useState<Actions>('Create');
  const getEntity = () => {
    let t = title.split(' ');
    t = t[t.length - 1] as string;
    return `${t.substring(0, t.lastIndexOf('s'))}`;
  };
  const getFormTitle = (action: Actions) => {
    const t = getEntity();
    return action === 'Create' ? `${t} Registration` : `Update ${t}`;
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (action: 'Update' | 'Create', id?: string) => {
    if (action === 'Update') {
      const row = data.find(d => d.id == id);
      setRowToBeEdited(row);
      setOpen(true);
      setAction(action);
    } else {
      setRowToBeEdited(null);
      setOpen(true);
      setAction(action);
    }
  };
  const submit = value => {
    if (onSubmit) {
      if (action === 'Update') {
        // @ts-ignore
        onSubmit({ ...rowToBeEdited, ...value }, action);
      } else {
        onSubmit(value, action);
      }
    }
  };

  const onDelete = id => {
    const row = data.find(d => d.id == id);
    setRowToBeEdited(row);
    setAction('Delete');
    setConfirmOpen(true);
  };
  const onDeleteConfirmed = () => {
    console.log('Delete', rowToBeEdited);
    setConfirmOpen(false);
    if (onSubmit) {
      onSubmit(rowToBeEdited, action);
    }
  };
  const addActionButtonIfNeeded = (columns: GridColumns) => {
    const d: GridColumns = [];
    if (actions.edit || actions.delete) {
      d.push({
        field: 'id',
        headerName: 'Actions',
        sortable: false,
        flex: 1,
        renderCell: c => (
          <>
            {actions.edit && (
              <IconButton
                onClick={() => handleOpen('Update', c.value?.toString())}
              >
                <EditOutlined />
              </IconButton>
            )}
            {actions.delete && (
              <IconButton onClick={() => onDelete(c.value?.toString())}>
                <DeleteOutlined />
              </IconButton>
            )}
          </>
        ),
      });
    }
    return columns.concat(d);
  };
  return (
    <Box maxWidth="xl" component={Paper}>
      {(actions.edit || actions.create) && (
        <CustomDialog
          isOpen={open}
          handleClose={handleClose}
          title={getFormTitle(action)}
          children={
            title.indexOf('sale') != -1 ? (
              <Sales />
            ) : (
              <Form
                loading={loading}
                data={rowToBeEdited}
                submitForm={submit}
                elements={form}
                submitButtonTitle={action}
              />
            )
          }
        />
      )}
      {actions.delete && (
        <ConfirmModal
          title="Delete"
          contentText={`Are you sure you want to delete this ?`}
          open={confirmOpen}
          confirmText="Yes"
          cancelText="No"
          deleteAction
          onClose={() => {
            setConfirmOpen(!confirmOpen);
          }}
          onConfirm={onDeleteConfirmed}
        />
      )}
      <TableHeader
        hideCreate={!actions.create}
        title={title}
        openDialog={() => {
          handleOpen('Create', '');
        }}
      />
      <DataGrid
        autoHeight
        rows={data}
        columns={addActionButtonIfNeeded(columns)}
        pageSize={5}
        loading={loading}
        checkboxSelection={false}
        disableSelectionOnClick
      />
    </Box>
  );
};
export default React.memo(CustomDataGrid);
