import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import React from 'react';
import Navigation from './Navigation';
import SwipeDrawer from './SwipeDrawer';
import useBrokenMatch from '../../Hook/useBrokenMatch';
import Logo from '../Logo';
import ToggleTheme from '../ToggleTheme';
const Header = () => {
  const { isMatching } = useBrokenMatch();
  const renderNavBar = () => {
    return isMatching.lg ? (
      <Stack
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <ToggleTheme />
          <SwipeDrawer />
        </Box>
      </Stack>
    ) : (
      <Navigation />
    );
  };
  return (
    <AppBar color={'default'}>
      <Toolbar>{renderNavBar()}</Toolbar>
    </AppBar>
  );
};

export default Header;
