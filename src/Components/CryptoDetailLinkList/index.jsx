import React from 'react';
import { Stack, Typography } from '@mui/material';
import CryptoDetailLinkItem from '../CryptoDetailLinkItem';
const CryptoDetailLinkList = ({ dataOfCryptoDetail }) => {
  const renderCryptoLinkItem = () => {
    return dataOfCryptoDetail?.links.map((linkItem) => {
      return <CryptoDetailLinkItem linkItem={linkItem} />;
    });
  };
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Typography textAlign={'center'} gutterBottom variant={'h3'}>
        {dataOfCryptoDetail.name} links
      </Typography>
      <Stack
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}
      >
        {renderCryptoLinkItem()}
      </Stack>
    </Stack>
  );
};

export default CryptoDetailLinkList;
