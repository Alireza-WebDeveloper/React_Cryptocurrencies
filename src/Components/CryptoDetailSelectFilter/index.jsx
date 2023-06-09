import { Stack, FormControl, Select, MenuItem } from '@mui/material';
import React from 'react';
const CryptoDetailsSelectFilter = ({ timeperiod, UpdateTimePeroid }) => {
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  const renderOptions = () => {
    return time.map((timer) => {
      return (
        <MenuItem
          value={timer}
          sx={{
            fontSize: '1.2rem',
            fontFamily: (theme) => theme.typography.body2.fontFamily,
          }}
        >
          {timer}
        </MenuItem>
      );
    });
  };
  return (
    <Stack>
      <FormControl size="large" sx={{ gap: 1 }}>
        <Select
          color="primary"
          id="crypto_SelectFilter"
          sx={{
            textTransform: 'capitalize',
            fontFamily: (theme) => theme.typography.subtitle1.fontFamily,
            fontSize: '1.2rem',
          }}
          size="lg"
          value={timeperiod}
          onChange={(e) => UpdateTimePeroid(e.target.value)}
        >
          {renderOptions()}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default CryptoDetailsSelectFilter;
