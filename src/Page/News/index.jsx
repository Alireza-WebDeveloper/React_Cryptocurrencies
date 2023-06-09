import React, { useMemo } from 'react';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCryptoNews } from '../../Feature/cryptoNewsSlice';
import { useEffect } from 'react';
import CryptoNewsCart from '../../Components/CryptoNewsCart';
import CryptoNewsSelectFilter from '../../Components/CryptoNewsSelectFilter';
import { useState } from 'react';
import { fetchGetCryptoGlobalCoint } from '../../Feature/cryptoGlobalCoinSlice';
import SpinnerLoading from '../../Components/SpinnerLoading';
const News = () => {
  const dispatch = useDispatch();
  const { cryptoNews, cryptoGlobalCoin } = useSelector((store) => store);
  const [categoryTitle, setCategoryTitle] = useState('Cryptocurrency');

  useEffect(() => {
    dispatch(fetchGetCryptoGlobalCoint(100));
  }, []);

  useEffect(() => {
    dispatch(fetchGetCryptoNews({ categoryTitle, count: 50 }));
  }, [categoryTitle]);

  const UpdateCategoryTitle = (query) => {
    setCategoryTitle(query);
  };
  const renderCryptoNewsCart = useMemo(() => {
    return cryptoNews?.loading ? (
      <Grid item xs={12}>
        <SpinnerLoading />
      </Grid>
    ) : cryptoNews?.data ? (
      cryptoNews?.data?.value.map((newsItem, index) => {
        return (
          <Grid item lg={4} md={6} xs={12} key={index}>
            <CryptoNewsCart newsItem={newsItem} />
          </Grid>
        );
      })
    ) : (
      ''
    );
  }, [cryptoNews]);
  const renderCryptoNewsSelectFilter = () => {
    return cryptoGlobalCoin?.loading ? (
      ''
    ) : cryptoGlobalCoin?.data ? (
      <CryptoNewsSelectFilter
        UpdateCategoryTitle={UpdateCategoryTitle}
        categoryTitle={categoryTitle}
        dataOfCoins={cryptoGlobalCoin?.data?.coins}
      />
    ) : (
      ''
    );
  };
  return (
    <Grid container pt={15} rowSpacing={3} mb={5}>
      <Grid item xs={12}>
        <Container>{renderCryptoNewsSelectFilter()}</Container>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3} p={1}>
          {renderCryptoNewsCart}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default News;
