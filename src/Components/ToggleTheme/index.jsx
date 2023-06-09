import { Box, Switch } from '@mui/material';
import React from 'react';
import { FormControlLabel } from '@mui/material';
import { ThemeContext } from '../../Context/Theme';
import { IconLightMode, IconDarkMode } from '../../Utils';
const ToggleTheme = () => {
  const { changeTheme, mode } = ThemeContext();
  return (
    <Box>
      <FormControlLabel
        onChange={changeTheme}
        label={mode ? IconDarkMode : IconLightMode}
        control={<Switch checked={mode} />}
      />
    </Box>
  );
};

export default ToggleTheme;
