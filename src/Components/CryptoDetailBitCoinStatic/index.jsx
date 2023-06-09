import React from 'react';
import millify from 'millify';
import { Grid, Stack, Typography } from '@mui/material';
import {
  NumberOutlined,
  TrophyOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';
import CryptoDetailStaticItem from '../CryptoDetailStaticItem';
const CryptoDetailBitCoinStatic = ({ dataOfCryptoDetail }) => {
  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${
        dataOfCryptoDetail?.price && millify(dataOfCryptoDetail?.price)
      }`,
      icon: <DollarCircleOutlined style={{ fontSize: '1.4rem' }} />,
    },
    {
      title: 'Rank',
      value: dataOfCryptoDetail?.rank,
      icon: <NumberOutlined style={{ fontSize: '1.4rem' }} />,
    },
    {
      title: 'Market Cap',
      value: `$ ${
        dataOfCryptoDetail?.marketCap && millify(dataOfCryptoDetail?.marketCap)
      }`,
      icon: <DollarCircleOutlined style={{ fontSize: '1.4rem' }} />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${
        dataOfCryptoDetail?.allTimeHigh?.price &&
        millify(dataOfCryptoDetail?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined style={{ fontSize: '1.4rem' }} />,
    },
  ];
  const renderStats = () => {
    return stats.map((statItem) => {
      return <CryptoDetailStaticItem statItem={statItem} />;
    });
  };
  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        {' '}
        <Typography
          variant={'h3'}
          textTransform={'capitalize'}
          textAlign={'center'}
        >
          bitcoin value static
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack
          sx={{ display: 'flex', flexDirection: 'column', gap: 3, flexGrow: 1 }}
        >
          {renderStats()}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CryptoDetailBitCoinStatic;
