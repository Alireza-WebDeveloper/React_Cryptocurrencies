import React from 'react';
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { useTheme } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { options } from './options';
ChartJs.register(BarElement, CategoryScale, LinearScale);
const CryptoBarChart = ({ dataOfXAxis, dataOfYAxis, title }) => {
  const theme = useTheme();
  var data = {
    labels: dataOfXAxis,
    datasets: [
      {
        label: title,
        data: dataOfYAxis,
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.warning.main,
          theme.palette.info.main,
          theme.palette.error.main,
          theme.palette.success.main,
        ],
        borderColor: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.warning.main,
          theme.palette.info.main,
          theme.palette.error.main,
          theme.palette.success.main,
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Bar data={data} height={400} options={options} />;
};

export default CryptoBarChart;
