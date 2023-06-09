import { Grid } from '@mui/material';
import React from 'react';
import CryptoIndustry from '../../Components/CryptoIndustry/index';
import CryptoBanner from '../../Components/CryptoBanner';
import CryptoGlobalStats from '../../Components/CryptoGlobalStats';
import GiftCountdown from '../../Components/GiftCountdown';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetCryptoGlobalCoint } from '../../Feature/cryptoGlobalCoinSlice';
import CryptoCurrenciesTopWorld from '../../Components/CryptoCurreciesTopWorld';
import CryptoCurrenciesLatesNew from '../../Components/CryptoCurrenciesLatestNew';
import { fetchGetCryptoNews } from '../../Feature/cryptoNewsSlice';
import CryptoExchangesTopWorld from '../../Components/CryptoExchangesTopWorld';
import SpinnerLoading from '../../Components/SpinnerLoading';

const Home = () => {
  const dispatch = useDispatch();
  const { cryptoGlobalCoin, cryptoNews } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchGetCryptoGlobalCoint(10));
    dispatch(
      fetchGetCryptoNews({ categoryTitle: 'Cryptocurrency', count: 10 })
    );
  }, []);

  const renderComponents = () => {
    return cryptoGlobalCoin?.loading || cryptoNews?.loading ? (
      <Grid item xs={12}>
        <SpinnerLoading />
      </Grid>
    ) : cryptoGlobalCoin.data && cryptoNews.data ? (
      <>
        <Grid item xs={12}>
          <CryptoGlobalStats dataOfStats={cryptoGlobalCoin?.data?.stats} />
        </Grid>
        <Grid item xs={12}>
          <CryptoCurrenciesTopWorld
            dataOfCoins={cryptoGlobalCoin?.data?.coins}
          />
        </Grid>
        <Grid item xs={12}>
          <CryptoExchangesTopWorld datOfCoins={cryptoGlobalCoin?.data?.coins} />
        </Grid>
        <Grid item xs={12}>
          <CryptoCurrenciesLatesNew
            dataOfNewsValues={cryptoNews?.data?.value}
          />
        </Grid>
      </>
    ) : (
      ''
    );
  };

  return (
    <Grid container pt={7} rowSpacing={7} mb={5}>
      <Grid item xs={12}>
        <CryptoBanner />
      </Grid>
      <Grid item xs={12}>
        <GiftCountdown />
      </Grid>
      <Grid item xs={12}>
        <CryptoIndustry />
      </Grid>
      {renderComponents()}
    </Grid>
  );
};

export default Home;
