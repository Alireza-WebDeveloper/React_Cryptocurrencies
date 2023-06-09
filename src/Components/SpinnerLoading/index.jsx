import { CircularProgress, Stack } from '@mui/material';
import React from 'react';

const SpinnerLoading = () => {
  return (
    <Stack
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress
        size={150}
        thickness={5}
        sx={{ color: (theme) => theme.palette.info.main }}
      />
    </Stack>
  );
};

export default SpinnerLoading;
