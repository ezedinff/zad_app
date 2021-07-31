import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme,
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';
const colorsIndex = [
  colors.indigo[500],
  colors.red[600],
  colors.orange[600],
]
const TrafficByDevice = props => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: props?.data ? props.data.map((product) => product?.value): [],
        backgroundColor: props?.data ? props.data.map((product, index) => colorsIndex[index % colorsIndex.length]) : [],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: props?.data ? props?.data?.map((product) => product?.label) : [],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
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

  const devices = [
    {
      title: 'Desktop',
      value: 63,
      icon: LaptopMacIcon,
      color: colors.indigo[500],
    },
    {
      title: 'Tablet',
      value: 15,
      icon: TabletIcon,
      color: colors.red[600],
    },
    {
      title: 'Mobile',
      value: 23,
      icon: PhoneIcon,
      color: colors.orange[600],
    },
  ];

  return (
    <Card {...props}>
      <CardHeader title="Top Products on Sale" />
      <CardContent>
        <Box
          style={{
            height: 300,
            position: 'relative',
          }}
        >
          <Doughnut type={''} data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByDevice;
