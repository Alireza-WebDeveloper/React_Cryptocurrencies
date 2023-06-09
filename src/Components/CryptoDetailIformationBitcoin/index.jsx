import React from 'react';
import { Stack, Typography } from '@mui/material';
import HTMLReactParser from 'html-react-parser';
const CryptoDetailInformationBitcoin = ({ dataOfCryptoDetail }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        textTransform: 'capitalize',
        fontFamily: (theme) => theme.typography.body2.fontFamily,
      }}
    >
      <Typography variant={'h5'}>what is {dataOfCryptoDetail.name}</Typography>
      {HTMLReactParser(dataOfCryptoDetail.description)}
    </Stack>
  );
};

export default CryptoDetailInformationBitcoin;
