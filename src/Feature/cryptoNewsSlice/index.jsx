import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cryptoNewsAjaxApi } from '../../Api';

const fetchGetCryptoNews = createAsyncThunk(
  'fetchGet/CryptoNews',
  async ({ categoryTitle, count }, ThunkControl) => {
    const response = await cryptoNewsAjaxApi.get('/news/search', {
      params: {
        q: categoryTitle,
        safeSearch: 'Off',
        textFormat: 'Raw',
        freshness: 'Day',
        count: count,
      },
    });
    return response.data;
  }
);

const initialState = {
  loading: false,
  error: '',
  data: null,
};

const cryptoNewsSlice = createSlice({
  name: 'cryptoNewSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetCryptoNews.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = null;
    });
    builder.addCase(fetchGetCryptoNews.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(fetchGetCryptoNews.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Faield Request';
      state.data = null;
    });
  },
});

export { fetchGetCryptoNews };

export default cryptoNewsSlice.reducer;
