import { Stack, Box, Typography, Divider } from '@mui/material';
import React from 'react';

const CryptoDetailLinkItem = ({ linkItem }) => {
  const { name, type, url } = linkItem;
  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          textTransform: 'capitalize',
          p: 1,
        }}
      >
        <Box>
          <Typography variant={'h5'}>{type}</Typography>
        </Box>
        <Box>
          <Typography
            variant={'body1'}
            component={'a'}
            href={url}
            sx={{ textDecoration: 'none' }}
            target="_blank"
          >
            {name}
          </Typography>
        </Box>
      </Stack>
      <Divider></Divider>
    </>
  );
};

export default CryptoDetailLinkItem;
