import React from 'react';
import { Grid, Stack, Box, Typography, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js';
import options from './options';
import useBrokenMatch from '../../Hook/useBrokenMatch';
ChartJs.register(LineElement, PointElement, CategoryScale, LinearScale);
const CryptoDetailLineChart = ({
  dataOfCryptoCoinHistory,
  coinPrice,
  coinName,
}) => {
  const theme = useTheme();
  const { isMatching } = useBrokenMatch();
  const listOfCoinPrice = dataOfCryptoCoinHistory?.history.map(
    ({ price }) => price
  );
  const listofCoinTimesTamp = dataOfCryptoCoinHistory?.history.map(
    ({ timestamp }) => {
      return new Intl.DateTimeFormat(navigator.language).format(timestamp);
    }
  );
  console.log(listofCoinTimesTamp);

  var dataOfLineChart = {
    labels: listofCoinTimesTamp,
    datasets: [
      {
        label: '# of Votes',
        data: listOfCoinPrice,
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

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            textTransform: 'capitalize',
            gap: { md: 0, xs: 2 },
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant={'h3'} component={'span'}>
              {coinName}price chart
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant={'h5'} component={'span'}>
              {dataOfCryptoCoinHistory?.change}%
            </Typography>
            <Typography variant={'h5'} component={'span'}>
              current {coinName} Price : ${coinPrice}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Line data={dataOfLineChart} options={options} height={150} />
      </Grid>
    </Grid>
  );
};

export default CryptoDetailLineChart;
