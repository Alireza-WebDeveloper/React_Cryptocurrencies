import React from 'react';
import { dataOfCryptoIndustry } from '../../Utils';
import { Grid, Stack, Typography, CardMedia, Container } from '@mui/material';
const CryptoIndustry = () => {
  const renderCryptoIndustry = () => {
    return dataOfCryptoIndustry.map(({ id, srcImg, title, text }) => {
      return (
        <Grid item lg={3} md={4} sm={6} xs={12} key={id}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              alignItems: 'center',
            }}
          >
            <CardMedia
              component={'img'}
              src={srcImg}
              sx={{
                width: '10vh',
                height: '10vh',
                ':hover': {
                  filter: 'hue-rotate(180deg)',
                  cursor: 'pointer',
                  transition: 'all 0.6s linear',
                },
              }}
              alt={'The desired photo was not found'}
            />
            <Typography
              variant={'h5'}
              component={'h1'}
              textAlign={'center'}
              textTransform={'capitalize'}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant={'body1'}
              component={'p'}
              textAlign={'center'}
              textTransform={'capitalize'}
            >
              {text}
            </Typography>
          </Stack>
        </Grid>
      );
    });
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant={'h3'}
            textAlign={'center'}
            sx={{ wordWrap: 'break-word' }}
          >
            CRYPTOCURRENCY INDUSTRY
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {renderCryptoIndustry()}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(CryptoIndustry);
