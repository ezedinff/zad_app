import React from 'react';
import EarningCard from 'app/components/dashboard/Board';
import { Grid } from '@material-ui/core';
import Sales from 'app/components/dashboard/Sales';
import TopProducts from 'app/components/dashboard/Products';
import { lime, red, teal, deepPurple } from '@material-ui/core/colors';
import {MoneyOutlined, ShoppingCartOutlined, TrendingDownOutlined, TrendingUpOutlined} from '@material-ui/icons';

const boards = [
  {title: 'Budget', value: '24,000 ETB', color: teal, icon: <MoneyOutlined />},
  {title: 'Total Sales', value: '10, 000 ETB', color: lime, icon: <ShoppingCartOutlined />},
  {title: 'Profit', value: '8,650 ETB', color: deepPurple, icon: <TrendingUpOutlined />},
  {title: 'Loss', value: '0.00 ETB', color: red, icon: <TrendingDownOutlined />}
]
const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      {boards.map((board) =>       <Grid item lg={3} md={6} sm={6} xs={12}>
        {' '}
        <EarningCard {...board}/>
      </Grid>)}
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <TopProducts />
      </Grid>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <Sales />
      </Grid>
    </Grid>
  );
};
export default Dashboard;
