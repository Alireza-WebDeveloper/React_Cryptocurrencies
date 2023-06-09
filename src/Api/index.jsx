import axios from 'axios';

const CryptoAjaxApi = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '30fa33f71emsh863cfde46b96189p1dac12jsn23cfc4940c28',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  },
});

const cryptoNewsAjaxApi = axios.create({
  baseURL: 'https://bing-news-search1.p.rapidapi.com/',
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'a466278a46msh8c9555ca5da0c5bp1ac8e4jsn7865840cb0e8',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  },
});

export { CryptoAjaxApi, cryptoNewsAjaxApi };
