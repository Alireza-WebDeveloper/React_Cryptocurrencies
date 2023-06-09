import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetCryptoDtail } from '../../Feature/cryptoDetailSlice';
import CryptoDetailSelectFilter from '../../Components/CryptoDetailSelectFilter';
import CryptoDetailBitCoinStatic from '../../Components/CryptoDetailBitCoinStatic';
import CryptoDetailSomeElseStatis from '../../Components/CryptoDetailSomeElseStatic';
import CryptoDetailInformationBitcoin from '../../Components/CryptoDetailIformationBitcoin';
import CryptoDetailLinkList from '../../Components/CryptoDetailLinkList';
import { fetchGetCryptoCoinHistory } from '../../Feature/cryptoCoinHistorySlice';
import CryptoDetailLineChart from '../../Components/CryptoDetailLineChart';
import millify from 'millify';
import SpinnerLoading from '../../Components/SpinnerLoading';
const CryptoDetails = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const [timeperiod, setTimeperiod] = useState('7d');
  const { cryptoDetail, cryptoCoinHistory } = useSelector((store) => store);
  const dataOfCryptoDetail = cryptoDetail?.data?.data?.coin;
  const dataOfCryptoCoinHistory = cryptoCoinHistory?.data?.data;
  const UpdateTimePeroid = (query) => {
    setTimeperiod(query);
  };

  useEffect(() => {
    if (!cryptoDetail?.data) return;
    dispatch(fetchGetCryptoCoinHistory({ timeperiod, coinId }));
  }, [timeperiod, cryptoDetail?.data]);
  useEffect(() => {
    dispatch(fetchGetCryptoDtail(coinId));
  }, []);

  const renderComponets = () => {
    return cryptoDetail?.loading || cryptoCoinHistory?.loading ? (
      <Grid xs={12} item>
        <SpinnerLoading />
      </Grid>
    ) : cryptoDetail?.data && cryptoCoinHistory?.data ? (
      <>
        <Grid item xs={12}>
          <Typography
            variant={'h3'}
            textTransform={'capitalize'}
            textAlign={'center'}
            sx={{ wordBreak: 'break-all' }}
          >
            bitcoin({dataOfCryptoDetail?.name})
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CryptoDetailSelectFilter
            dataOfCryptoDetail={dataOfCryptoDetail}
            timeperiod={timeperiod}
            UpdateTimePeroid={UpdateTimePeroid}
          />
        </Grid>
        <Grid item xs={12}>
          <CryptoDetailLineChart
            dataOfCryptoCoinHistory={dataOfCryptoCoinHistory}
            coinPrice={millify(dataOfCryptoDetail?.price)}
            coinName={dataOfCryptoDetail?.name}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <CryptoDetailBitCoinStatic dataOfCryptoDetail={dataOfCryptoDetail} />
        </Grid>
        <Grid item md={6} xs={12}>
          <CryptoDetailSomeElseStatis dataOfCryptoDetail={dataOfCryptoDetail} />
        </Grid>
        <Grid item md={6} xs={12}>
          <CryptoDetailInformationBitcoin
            dataOfCryptoDetail={dataOfCryptoDetail}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <CryptoDetailLinkList dataOfCryptoDetail={dataOfCryptoDetail} />
        </Grid>
      </>
    ) : (
      ''
    );
  };
  return (
    <Container>
      <Grid container pt={10} spacing={3} mb={5}>
        {renderComponets()}
      </Grid>
    </Container>
  );
};

export default CryptoDetails;
