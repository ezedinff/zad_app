import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  useTheme,
  colors,
} from '@material-ui/core';
import { useEffect } from 'react';
let d = {
  datasets: [
    {
      backgroundColor: colors.teal[500],
      data: [500, 200],
      label: 'Daily Sales',
    },
  ],
  labels: ['day1', 'day2'],
};
const Sales = props => {
  console.log(props.data);
  const [data, setData] = useState(d);
  const theme = useTheme();

  useEffect(() => {
    if (props.data && props.data[0]) {
      setData({
        datasets: [
          {
            backgroundColor: colors.teal[500],
            data: props.data[0].map(sale => sale.value),
            label: 'Daily Sales',
          },
        ],
        labels: props.data[0].map(sale => sale.label),
      });
    }
  }, [props.data]);

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider,
          },
        },
      ],
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card {...props}>
      <CardHeader title="Sales by day" />
      <CardContent>
        <Box
          style={{
            height: 400,
            position: 'relative',
          }}
        >
          <Bar type={''} data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Sales;
