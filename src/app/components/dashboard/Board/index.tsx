import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { lime, red, teal, deepPurple } from '@material-ui/core/colors';
import {MoneyOutlined, ShoppingCartOutlined, TrendingDownOutlined, TrendingUpOutlined} from '@material-ui/icons';
const boardIndex = {
  Budget: {
    color: teal,
    icon: <MoneyOutlined />
  },
  Sales: {
    color: lime,
    icon: <ShoppingCartOutlined />
  },
  Profit: {
    color: deepPurple,
    icon: <TrendingUpOutlined />
  },
  Loss: {
    color: red,
    icon:  <TrendingDownOutlined />
  }
};
const Board = ({label, value}) => (
  <Card style={{ height: '100%' }}>
    <CardContent>
      <Grid container spacing={3} style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {label}
          </Typography>
          <Typography color="textPrimary" variant="h6">
            {value}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            style={{
              backgroundColor: boardIndex[label].color[600],
              height: 56,
              width: 56,
            }}
          >
            {boardIndex[label].icon}
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default Board;
