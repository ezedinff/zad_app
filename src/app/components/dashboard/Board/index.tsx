import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { red, teal } from '@material-ui/core/colors';

const Budget = ({title, value, color, icon}) => (
  <Card style={{ height: '100%' }}>
    <CardContent>
      <Grid container spacing={3} style={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography color="textPrimary" variant="h5">
            {value}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            style={{
              backgroundColor: color[600],
              height: 56,
              width: 56,
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        style={{
          paddingTop: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ArrowDownwardIcon style={{ color: color[900] }} />
        <Typography
          style={{
            color: color[900],
            margin: '4px',
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Budget;
