import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ParticlesAnimation from '../ParticlesAnimation';
import { SourceImgCrytoBanner } from '../../Utils';
import { Image } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import Typewriter from 'typewriter-effect';
const useStyles = makeStyles((theme) => ({
  Banner: {
    [theme.breakpoints.up('lg')]: {
      height: '80vh',
      objectFit: 'fill',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: '58vh',
      objectFit: 'cover',
    },
    [theme.breakpoints.down('md')]: {
      height: '52vh',
      objectFit: 'fill',
    },
  },
}));
const CryptoBanner = () => {
  const classes = useStyles();
  return (
    <Stack sx={{ position: 'relative', height: '100vh' }}>
      <ParticlesAnimation />
      <Stack
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Image
            fluid
            src={SourceImgCrytoBanner}
            alt={'Particles'}
            className={classes.Banner}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            width={'80%'}
            variant={'h5'}
            textTransform={'capitalize'}
            component={'p'}
            color={'white'}
            textAlign={'center'}
            sx={{ wordBreak: 'break-all' }}
          >
            Welcome to the most comprehensive Algorithmic Trading Course for
          </Typography>
          <Typography
            variant={'h3'}
            component={'p'}
            sx={{
              color: (theme) => theme.palette.info.main,
              wordBreak: 'break-all',
            }}
          >
            <Typewriter
              options={{
                strings: ['Cryptocurrencies'],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default React.memo(CryptoBanner);
