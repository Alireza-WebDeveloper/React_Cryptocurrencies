import React from 'react';
import { Stack, Typography, Avatar, IconButton, Button } from '@mui/material';
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
const CryptoCurrenciesCart = ({ coinItem }) => {
  const classes = useStyles();
  const { uuid, symbol, name, iconUrl, marketCap, price, change, rank } =
    coinItem;
  return (
    <Link to={`/crypto/${uuid}`} className={classes.links}>
      <Stack
        component={'section'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: 2,
          pl: 5,
          textTransform: 'capitalize',
          gap: 2,
          minHeight: '25vh',
          borderRadius: 2,
          backgroundColor: (theme) => theme.palette.default.main,
          transition: 'all 0.3s linear',
          cursor: 'pointer',
          ':hover': {
            backgroundColor: (theme) => theme.palette.secondary.main,
            transform: { lg: 'scale(1.01)', xs: 'scale(1)' },
          },
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 1,
            alignItems: 'center',
          }}
        >
          <IconButton
            color={'primary'}
            sx={{
              border: (theme) => `solid ${theme.palette.primary.main} 0.1rem`,
            }}
          >
            <Avatar src={iconUrl} />
          </IconButton>
          <Typography variant={'h5'}>
            {rank}.{String(name).slice(1, 15)}
          </Typography>
          /<Typography variant={'body2'}>{symbol}</Typography>
        </Stack>
        <Stack>
          <Typography variant={'subtitle1'}>
            price : {millify(price)}
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant={'subtitle1'}>
            market cap : {millify(marketCap)}
          </Typography>
          <Button
            size="small"
            variant={'contained'}
            sx={{ textTransform: 'capitalize' }}
          >
            daily change : {change}%
          </Button>
        </Stack>
      </Stack>
    </Link>
  );
};

export default CryptoCurrenciesCart;
