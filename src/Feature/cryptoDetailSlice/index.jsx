import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CryptoAjaxApi } from '../../Api';

const fetchGetCryptoDtail = createAsyncThunk(
  'fetchGet/CryptoDetail',
  async (coinId = 1, ThunkControl) => {
    const response = await CryptoAjaxApi.get(`/coin/${coinId}`);
    return response.data;
  }
);

const initialState = {
  data: null,
  loading: false,
  error: '',
};
const cryptoDetailSlice = createSlice({
  name: 'cryptoDetailSlice',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetCryptoDtail.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = '';
    });
    builder.addCase(fetchGetCryptoDtail.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchGetCryptoDtail.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = 'Failed Request';
    });
  },
});

export { fetchGetCryptoDtail };

export default cryptoDetailSlice.reducer;
