import React, { useMemo } from 'react';
import { Container, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetCryptoGlobalCoint } from '../../Feature/cryptoGlobalCoinSlice';
import CryptoExchangesCart from '../../Components/CryptoExchangesCart';
import CryptoCurrenciesInputSearch from '../../Components/CryptoCurrenciesInputSearch';
import SpinnerLoading from '../../Components/SpinnerLoading';

const Exchanges = () => {
  const dispatch = useDispatch();
  const { cryptoGlobalCoin } = useSelector((store) => store);
  const datOfCoins = cryptoGlobalCoin?.dataOfCoinsSerachQuery;
  useEffect(() => {
    dispatch(fetchGetCryptoGlobalCoint(50));
  }, []);

  const renderCryptoExchangesCart = useMemo(() => {
    return cryptoGlobalCoin?.loading ? (
      <Grid item xs={12}>
        <SpinnerLoading />
      </Grid>
    ) : cryptoGlobalCoin?.dataOfCoinsSerachQuery ? (
      datOfCoins.map((coinItem) => {
        return (
          <Grid item md={4} sm={6} xs={12}>
            <CryptoExchangesCart coinItem={coinItem} />
          </Grid>
        );
      })
    ) : (
      ''
    );
  }, [datOfCoins]);
  return (
    <Container>
      <Grid container pt={10} rowSpacing={2} mb={5}>
        <Grid item xs={12}>
          <CryptoCurrenciesInputSearch />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {renderCryptoExchangesCart}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Exchanges;
