import React from 'react';
import millify from 'millify';
import { Grid, Stack, Typography } from '@mui/material';
import {
  MoneyCollectOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import CryptoDetailStaticItem from '../CryptoDetailStaticItem';
const CryptoDetailSomeElseStatis = ({ dataOfCryptoDetail }) => {
  const genericStats = [
    {
      title: 'Number Of Markets',
      value: dataOfCryptoDetail?.numberOfMarkets,
      icon: <FundOutlined style={{ fontSize: '1.4rem' }} />,
    },
    {
      title: 'Number Of Exchanges',
      value: dataOfCryptoDetail?.numberOfExchanges,
      icon: <MoneyCollectOutlined style={{ fontSize: '1.4rem' }} />,
    },
    {
      title: 'Aprroved Supply',
      value: dataOfCryptoDetail?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined style={{ fontSize: '1.4rem' }} />,
    },
    {
      title: 'Total Supply',
      value: `$ ${
        dataOfCryptoDetail?.supply?.total &&
        millify(dataOfCryptoDetail?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined style={{ fontSize: '1.4rem' }} />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${
        dataOfCryptoDetail?.supply?.circulating &&
        millify(dataOfCryptoDetail?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined style={{ fontSize: '1.4rem' }} />,
    },
  ];
  const renderGenericStats = () => {
    return genericStats.map((statItem) => {
      return <CryptoDetailStaticItem statItem={statItem} />;
    });
  };
  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <Typography
          variant={'h3'}
          textTransform={'capitalize'}
          textAlign={'center'}
        >
          other Statics
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack
          sx={{ display: 'flex', flexDirection: 'column', gap: 3, flexGrow: 1 }}
        >
          {renderGenericStats()}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CryptoDetailSomeElseStatis;
