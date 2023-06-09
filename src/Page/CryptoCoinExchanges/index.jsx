import { Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetCryptoCoinExchanges } from '../../Feature/cryptoCoinExchangesSlice';
import CryptoCoinExchangesTable from '../../Components/CryptoCoinExchangesTable';
import SpinnerLoading from '../../Components/SpinnerLoading';
const CryptoCoinExchanges = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const { cryptoCoinExchanges } = useSelector((store) => store);
  const dataOfCryptoCoinExchanges = cryptoCoinExchanges?.data?.data;
  const dataOfCryptoCoinExchangesFixed =
    dataOfCryptoCoinExchanges?.exchanges.map((coinExchangesItem) => {
      return (coinExchangesItem = Object.fromEntries(
        Object.entries(coinExchangesItem).map(([key, value]) => {
          return key === '24hVolume' ? ['Volume', value] : [key, value];
        })
      ));
    });
  const renderCryptoCoinExchangesTable = () => {
    return cryptoCoinExchanges?.loading ? (
      <Grid xs={12} item>
        <SpinnerLoading />
      </Grid>
    ) : cryptoCoinExchanges?.data ? (
      <CryptoCoinExchangesTable
        dataOfCryptoCoinExchanges={dataOfCryptoCoinExchangesFixed}
      />
    ) : (
      ''
    );
  };
  useEffect(() => {
    dispatch(fetchGetCryptoCoinExchanges({ count: 150, coinId }));
  }, []);
  return (
    <Grid container pt={10} rowSpacing={3} pr={3} pl={3} mb={5}>
      <Grid item xs={12}>
        {renderCryptoCoinExchangesTable()}
      </Grid>
    </Grid>
  );
};

export default CryptoCoinExchanges;
