import React from 'react';
import { Stack, Box, Typography, CardMedia } from '@mui/material';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': { color: theme.palette.text.primary },
  },
}));
const CryptoExchangesCart = ({ coinItem }) => {
  const classes = useStyles();
  const { uuid, name, price, iconUrl, rank } = coinItem;
  return (
    <Link className={classes.links} to={`/exchanges/${uuid}`}>
      <Stack
        sx={{
          flexGrow: '1',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: (theme) => theme.palette.default.main,
          transition: 'all 0.3s linear',
          ':hover': {
            backgroundColor: (theme) => theme.palette.secondary.main,
            transform: { lg: 'scale(1.01)', xs: 'scale(1)' },
          },
          flexWrap: 'wrap',
          p: 2,
          borderRadius: 2,
          textTransform: 'capitalize',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" component={'span'}>
            {rank}.{String(name).slice(1, 15)}
          </Typography>
          <Typography variant="subtitle2" component={'span'}>
            price:{millify(price)}
          </Typography>
        </Box>
        <Box>
          <CardMedia
            sx={{ width: '12vh', height: '12vh' }}
            src={iconUrl}
            alt={name}
            lazy="loading"
            component={'img'}
          />
        </Box>
      </Stack>
    </Link>
  );
};

export default CryptoExchangesCart;
