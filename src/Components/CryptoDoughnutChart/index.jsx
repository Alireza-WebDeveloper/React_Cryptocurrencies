import React from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from '@mui/material';
import { options } from './options';
ChartJs.register(ArcElement, Tooltip, Legend);
const CryptoDoughnut = ({ dataOfXAxis, dataOfYAxis, title }) => {
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
  return <Doughnut data={data} height={400} options={options} />;
};

export default CryptoDoughnut;
