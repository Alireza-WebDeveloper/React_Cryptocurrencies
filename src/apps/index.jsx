import { configureStore } from '@reduxjs/toolkit';
import cryptoGlobalCoinSlice from '../Feature/cryptoGlobalCoinSlice';
import cryptoNewsSlice from '../Feature/cryptoNewsSlice';
import cryptoDetailSlice from '../Feature/cryptoDetailSlice';
import cryptoCoinHistorySlice from '../Feature/cryptoCoinHistorySlice';
import cryptoCoinExchangesSlice from '../Feature/cryptoCoinExchangesSlice';
const store = configureStore({
  reducer: {
    cryptoGlobalCoin: cryptoGlobalCoinSlice,
    cryptoNews: cryptoNewsSlice,
    cryptoDetail: cryptoDetailSlice,
    cryptoCoinHistory: cryptoCoinHistorySlice,
    cryptoCoinExchanges: cryptoCoinExchangesSlice,
  },
});

export default store;
