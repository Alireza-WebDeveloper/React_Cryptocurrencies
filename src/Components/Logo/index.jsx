import { Box, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoSource from '../../Images/Logo/1.png';
const Logo = () => {
  return (
    <Box>
      <Link to="">
        <IconButton edge={'start'} color={'primary'}>
          <img
            src={LogoSource}
            style={{ width: '40px', height: '40px' }}
            alt={'logo'}
          />
        </IconButton>
      </Link>
    </Box>
  );
};

export default Logo;
