import React from 'react';
import {
  Grid,
  Stack,
  Box,
  Typography,
  IconButton,
  Container,
} from '@mui/material';
import {
  IconCryptoCurrencies,
  IconCoin,
  IconExchanges,
  IconsMarket,
  IconMarketCap,
  IconCurrency24Volume,
} from '../../Utils';
import millify from 'millify';
const CryptoGlobalStats = ({ dataOfStats }) => {
  const {
    total,
    total24hVolume,
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  } = dataOfStats;
  const dataOfAllGlobalStats = [
    {
      id: 1,
      title: 'total cryptocurrencies',
      text: total,
      icon: IconCryptoCurrencies,
    },
    {
      id: 2,
      title: 'total 24hVolume',
      text: total24hVolume,
      icon: IconCurrency24Volume,
    },
    { id: 3, title: 'total Coins', text: totalCoins, icon: IconCoin },
    {
      id: 4,
      title: 'total Exchanges',
      text: totalExchanges,
      icon: IconExchanges,
    },
    { id: 5, title: 'total Markets', text: totalMarkets, icon: IconsMarket },
    {
      id: 6,
      title: 'total MarketCap',
      text: totalMarketCap,
      icon: IconMarketCap,
    },
  ];
  const renderGlobalStats = () => {
    return dataOfAllGlobalStats.map(({ id, title, text, icon }) => {
      return (
        <Grid lg={4} md={6} xs={12} item key={id}>
          <Stack
            sx={{
              minHeight: 120,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              p: 3,
              gap: 2,
              borderRadius: 2,
              backgroundColor: (theme) => theme.palette.warning.main,
              cursor: 'pointer',
              transition: 'all 0.3s linear',
              ':hover': {
                backgroundColor: (theme) => theme.palette.info.main,
                transform: { lg: 'scale(1.1)', xs: 'scale(1)' },
              },
            }}
          >
            <Box>
              <IconButton size="large" color={'primary'}>
                {icon}
              </IconButton>
            </Box>
            <Box>
              <Typography
                textTransform={'capitalize'}
                variant={'h5'}
                component={'p'}
              >
                {title}
              </Typography>
              <Typography
                variant={'h5'}
                sx={{ color: (theme) => theme.palette.default.main }}
              >
                {millify(text)}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      );
    });
  };

  return (
    <Container>
      <Grid container rowSpacing={3}>
        <Grid xs={12}>
          <Typography
            variant={'h3'}
            textTransform={'capitalize'}
            component={'h1'}
            gutterBottom
            textAlign={'center'}
          >
            global Crypto Stats
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Grid container spacing={3}>
            {renderGlobalStats()}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CryptoGlobalStats;
