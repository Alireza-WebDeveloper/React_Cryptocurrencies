import React from 'react';
import { Grid, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CryptoNewsCart from '../CryptoNewsCart';
import { IconArrowRight } from '../../Utils';
const CryptoCurrenciesLatestnew = ({ dataOfNewsValues }) => {
  const renderCryptoNewsCart = () => {
    return dataOfNewsValues.map((newsItem, index) => {
      return (
        <Grid item lg={4} md={6} xs={12} key={index}>
          <CryptoNewsCart newsItem={newsItem} />
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
            The
            <Typography
              textTransform={'capitalize'}
              ml={1}
              variant={'h3'}
              component={'span'}
              sx={{ color: (theme) => theme.palette.secondary.main }}
            >
              latest news
            </Typography>
            related to cryptocurrency
          </Typography>
          <Link to={'news'} style={{ textDecoration: 'none' }}>
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
          {renderCryptoNewsCart()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CryptoCurrenciesLatestnew;
