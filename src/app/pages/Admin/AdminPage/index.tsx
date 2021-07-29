import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
import forms from 'utils/forms';
import { useAdminSlice } from './slice';
import { selectAdmin } from './slice/selectors';
import { useLocation } from 'react-router-dom';
import pageData from '../';
const index = {};
export const AdminPage = () => {
  const location = useLocation();
  const data = useSelector(selectAdmin);
  const { actions } = useAdminSlice();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(
      actions.getAll({
        stateIndex: location.pathname.split('/')[2],
      }),
    );
  }, [location, dispatch]);
  const onSubmit = (data, action) => {
    console.log(data, action);
    if (action === 'Create') {
      dispatch(
        actions.create({
          stateIndex: location.pathname.split('/')[2],
          data,
        }),
      );
    } else if (action === 'Update') {
      dispatch(
        actions.update({
          stateIndex: location.pathname.split('/')[2],
          data,
          id: data.id,
        }),
      );
    } else {
      dispatch(
        actions.delete({
          stateIndex: location.pathname.split('/')[2],
          id: data.id,
        }),
      );
    }
  };
  return (
    <>
      <Helmet>
        <title>{location.pathname.split('/')[2]} Page</title>
      </Helmet>
      <Table
        loading={data.loading}
        form={forms[location.pathname.split('/')[2]]}
        title={`List Of ${location.pathname.split('/')[2]}`}
        data={data[location.pathname.split('/')[2]]}
        onSubmit={onSubmit}
        columns={tables[location.pathname.split('/')[2]]}
        actions={{
          create: true,
          edit: location.pathname.indexOf('sale') == -1,
          delete: location.pathname.indexOf('sale') == -1,
        }}
      />
    </>
  );
};
