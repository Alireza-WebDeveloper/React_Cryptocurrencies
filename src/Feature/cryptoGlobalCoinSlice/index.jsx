import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CryptoAjaxApi } from '../../Api';

const fetchGetCryptoGlobalCoint = createAsyncThunk(
  'fetchGet/cryptoGlobalCoin',
  async (count, ThunkControl) => {
    const response = await CryptoAjaxApi.get(`/coins?limit=${count}`);
    return response.data.data;
  }
);

const initialState = {
  data: null,
  dataOfCoinsSerachQuery: [],
  loading: false,
  error: '',
};
const cryptoGlobalCoinSlice = createSlice({
  name: 'cryptoGlobalCoinSlice',
  initialState,
  reducers: {
    coinListBySearchQuery: (state, action) => {
      const filter = state?.data?.coins.filter((coin) => {
        return String(coin?.name)
          .toLowerCase()
          .includes(String(action.payload).toLowerCase());
      });
      state.dataOfCoinsSerachQuery = filter;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetCryptoGlobalCoint.pending, (state, action) => {
      state.data = null;
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchGetCryptoGlobalCoint.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchGetCryptoGlobalCoint.rejected, (state, action) => {
      state.data = null;
      state.error = 'Failed Request';
      state.loading = false;
    });
  },
});

const { coinListBySearchQuery } = cryptoGlobalCoinSlice.actions;

export { fetchGetCryptoGlobalCoint, coinListBySearchQuery };

export default cryptoGlobalCoinSlice.reducer;
