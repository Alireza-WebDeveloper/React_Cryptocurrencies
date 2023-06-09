import { CardMedia, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { SourceLogoFooter } from '../../Utils';
import { dataOfCommunication } from '../../Utils';
import { Link } from 'react-router-dom';
const Footer = () => {
  const renderDataOfCommunication = () => {
    return dataOfCommunication.map(({ id, icon, title, to }) => {
      return (
        <Link to={to}>
          <IconButton title={title} key={id}>
            {icon}
          </IconButton>
        </Link>
      );
    });
  };
  return (
    <Stack
      component={'footer'}
      sx={{
        mt: 'auto',
        position: 'relative',
        width: '100%',
        backgroundColor: (theme) => theme.palette.footer.main,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        p: 2,
        gap: { md: 2, xs: 3 },
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <CardMedia
          src={SourceLogoFooter}
          component={'img'}
          alt={'logo footer'}
          loading={'lazy'}
          sx={{ width: '7vh', height: '7vh' }}
        />
        <Typography
          component={'span'}
          variant={'subtitle2'}
          textTransform={'capitalize'}
          fontSize={'1.5rem'}
        >
          crypto
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          gap: { md: 5, xs: 3 },
        }}
      >
        {renderDataOfCommunication()}
      </Stack>
    </Stack>
  );
};

export default Footer;
