import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
const CryptoDetailStaticItem = ({ statItem }) => {
  const { icon, title, value } = statItem;

  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottom: (theme) => `solid ${theme.palette.info.main} 0.2rem`,
          p: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {icon}
          <Typography variant={'subtitle2'}>{title}</Typography>
        </Box>
        <Box>
          <Typography variant={'subtitle1'}>{value}</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default CryptoDetailStaticItem;
