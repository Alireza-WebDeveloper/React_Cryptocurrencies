import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShareLayOut from './Page/ShareLayOut';
import Home from './Page/Home';
import Exchanges from './Page/Exchanges';
import Cryptocurrencies from './Page/Cryptocurrencies';
import CryptoDetails from './Page/CryptoDetails';
import News from './Page/News';
import { ThemeStore } from './Context/Theme';
import CryptoCoinExchanges from './Page/CryptoCoinExchanges';
const App = () => {
  return (
    <ThemeStore>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<ShareLayOut />}>
            <Route index element={<Home />} />
            <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="crypto/:coinId" element={<CryptoDetails />} />
            <Route path="exchanges" element={<Exchanges />} />
            <Route path="news" element={<News />} />
            <Route path="exchanges/:coinId" element={<CryptoCoinExchanges />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeStore>
  );
};

export default App;
