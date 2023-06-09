import React from 'react';
import { Grid, Stack, Typography, Button } from '@mui/material';
import CryptoCurrenciesCart from '../CryptoCurrenciesCart';
import { Link } from 'react-router-dom';
import * as Icon from 'react-icons/md';
import { IconArrowRight } from '../../Utils';
const CryptoCurrenciesTopWorld = ({ dataOfCoins }) => {
  const renderCryptoCurrenciesCart = () => {
    return dataOfCoins.map((coinItem) => {
      return (
        <Grid item lg={3} md={4} sm={6} xs={12} key={coinItem.rank}>
          <CryptoCurrenciesCart coinItem={coinItem} />
        </Grid>
      );
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: { xs: 3, md: 0 },
          }}
        >
          <Typography
            variant={'h3'}
            component={'div'}
            textTransform={'capitalize'}
            textAlign={'center'}
          >
            10 of the best
            <Typography
              textTransform={'capitalize'}
              ml={1}
              variant={'h3'}
              component={'span'}
              sx={{ color: (theme) => theme.palette.secondary.main }}
            >
              Digital Currencies
            </Typography>{' '}
            in the world
          </Typography>
          <Link to={'cryptocurrencies'} style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ fontSize: '1.3rem' }}
              endIcon={IconArrowRight}
            >
              view more
            </Button>
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3} sx={{ p: 1 }}>
          {renderCryptoCurrenciesCart()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CryptoCurrenciesTopWorld;
