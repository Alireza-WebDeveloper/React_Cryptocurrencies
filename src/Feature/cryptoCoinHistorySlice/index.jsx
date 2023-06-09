import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CryptoAjaxApi } from '../../Api';

const fetchGetCryptoCoinHistory = createAsyncThunk(
  'fetchGet/CryptoCoinHistory',
  async ({ coinId, timeperiod }, ThunkControl) => {
    const response = await CryptoAjaxApi.get(`/coin/${coinId}/history`, {
      params: { timePeriod: timeperiod },
    });
    return response.data;
  }
);

const initialState = {
  data: null,
  loading: false,
  error: '',
};

const cryptoCoinHistorySlice = createSlice({
  name: 'cryptoCointHistory',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetCryptoCoinHistory.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = null;
    });
    builder.addCase(fetchGetCryptoCoinHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(fetchGetCryptoCoinHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Failed Request';
      state.data = null;
    });
  },
});

export { fetchGetCryptoCoinHistory };

export default cryptoCoinHistorySlice.reducer;
