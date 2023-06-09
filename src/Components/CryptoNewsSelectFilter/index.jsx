import { Stack, FormControl, Select, MenuItem, FormLabel } from '@mui/material';
import React from 'react';
const CryptoNewsSelectFilter = ({
  UpdateCategoryTitle,
  categoryTitle,
  dataOfCoins,
}) => {
  const renderOptions = () => {
    return dataOfCoins.map(({ name }) => {
      return (
        <MenuItem
          value={name}
          sx={{
            fontSize: '1.2rem',
            fontFamily: (theme) => theme.typography.body2.fontFamily,
          }}
        >
          {name}
        </MenuItem>
      );
    });
  };
  return (
    <Stack>
      <FormControl size="large" sx={{ gap: 1 }}>
        <FormLabel
          color="warning"
          htmlFor="crypto_SelectFilter"
          sx={{
            textTransform: 'capitalize',
            fontFamily: (theme) => theme.typography.body2.fontFamily,
            fontSize: '1.4rem',
          }}
        >
          The latest news about cryptocurrency (choose an option)
        </FormLabel>
        <Select
          color="primary"
          id="crypto_SelectFilter"
          sx={{
            textTransform: 'capitalize',
            fontFamily: (theme) => theme.typography.subtitle1.fontFamily,
            fontSize: '1.2rem',
          }}
          size="lg"
          value={categoryTitle}
          onChange={(e) => UpdateCategoryTitle(e.target.value)}
        >
          <MenuItem
            value="Cryptocurrency"
            sx={{
              fontSize: '1.2rem',
              fontFamily: (theme) => theme.typography.body2.fontFamily,
            }}
          >
            Cryptocurrency
          </MenuItem>
          {renderOptions()}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default CryptoNewsSelectFilter;
