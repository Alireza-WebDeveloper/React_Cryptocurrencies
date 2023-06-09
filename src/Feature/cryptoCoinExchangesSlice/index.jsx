import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CryptoAjaxApi } from '../../Api';

const fetchGetCryptoCoinExchanges = createAsyncThunk(
  'fetchGet/cryptoExchanges',
  async ({ count, coinId }) => {
    const response = await CryptoAjaxApi.get(`/coin/${coinId}/exchanges`, {
      params: {
        limit: count,
      },
    });
    return response.data;
  }
);

const initialState = {
  data: null,
  loading: false,
  error: '',
};

const cryptoCoinExchangesSlice = createSlice({
  name: 'cryptoExchnges',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCryptoCoinExchanges.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = '';
    });
    builder.addCase(fetchGetCryptoCoinExchanges.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchGetCryptoCoinExchanges.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = 'Failed Request';
    });
  },
});

export { fetchGetCryptoCoinExchanges };

export default cryptoCoinExchangesSlice.reducer;
