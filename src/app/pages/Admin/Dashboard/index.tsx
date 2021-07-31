import React from 'react';
import Board from 'app/components/dashboard/Board';
import { Grid } from '@material-ui/core';
import Sales from 'app/components/dashboard/Sales';
import TopProducts from 'app/components/dashboard/Products';
import { useDashboardSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectDashboard } from './slice/selectors';
import { useEffect } from 'react';
const Dashboard = () => {
  const { reports, loading } = useSelector(selectDashboard);
  const { actions } = useDashboardSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadReports());
  }, []);
  return (
    <Grid container spacing={2}>
      {reports &&
        reports.boards.map(board => (
          <Grid item key={board.label} lg={3} md={6} sm={6} xs={12}>
            {' '}
            <Board {...board} />
          </Grid>
        ))}
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <TopProducts data={reports?.tops} />
      </Grid>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        {reports &&  <Sales data={[reports?.sales]}/>}
      </Grid>
    </Grid>
  );
};
export default Dashboard;
