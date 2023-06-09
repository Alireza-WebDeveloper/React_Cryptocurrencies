import { Grid, Stack, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import CryptoExchangesCart from '../CryptoExchangesCart';
import { IconArrowRight } from '../../Utils';

const CryptoExchangesTopWorld = ({ datOfCoins }) => {
  const renderCryptoExchangesCart = () => {
    return datOfCoins.map((coinItem) => {
      return (
        <Grid item lg={3} md={4} sm={6} xs={12} key={coinItem.rank}>
          <CryptoExchangesCart coinItem={coinItem} />
        </Grid>
      );
    });
  };
  return (
    <Grid container rowSpacing={3}>
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
              exchanges currencies
            </Typography>{' '}
            in the world
          </Typography>
          <Link to={'exchanges'} style={{ textDecoration: 'none' }}>
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
        <Grid container spacing={3} p={1}>
          {renderCryptoExchangesCart()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CryptoExchangesTopWorld;
