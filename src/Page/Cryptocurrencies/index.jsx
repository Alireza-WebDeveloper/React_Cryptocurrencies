import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetCryptoGlobalCoint } from '../../Feature/cryptoGlobalCoinSlice';
import { Container, Grid } from '@mui/material';
import CryptoCurrenciesCart from '../../Components/CryptoCurrenciesCart';
import CryptoCurrenciesInputSearch from '../../Components/CryptoCurrenciesInputSearch';
import SpinnerLoading from '../../Components/SpinnerLoading';

const Cryptocurrencies = () => {
  const dispatch = useDispatch();
  const { cryptoGlobalCoin } = useSelector((store) => store);
  const renderGlobalCryptoCurrencies = () => {
    return cryptoGlobalCoin?.loading ? (
      <Grid item xs={12}>
        <SpinnerLoading />
      </Grid>
    ) : cryptoGlobalCoin?.dataOfCoinsSerachQuery ? (
      cryptoGlobalCoin?.dataOfCoinsSerachQuery.map((coinItem) => {
        return (
          <Grid item lg={3} md={4} sm={6} xs={12} key={coinItem.rank}>
            <CryptoCurrenciesCart coinItem={coinItem} />
          </Grid>
        );
      })
    ) : (
      ''
    );
  };
  useEffect(() => {
    dispatch(fetchGetCryptoGlobalCoint(50));
  }, []);
  return (
    <Grid container pt={10} spacing={3} mb={5}>
      <Grid xs={12} item>
        <Container>
          <CryptoCurrenciesInputSearch />
        </Container>
      </Grid>
      <Grid xs={12} item>
        <Grid container spacing={3} pr={1} pl={1}>
          {renderGlobalCryptoCurrencies()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cryptocurrencies;
