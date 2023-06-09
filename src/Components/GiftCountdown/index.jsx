import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { giftCountdownDate } from '../../Utils';
const GiftCountdown = () => {
  let deadLine = giftCountdownDate;
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  let startCountdown = setInterval(() => {
    let now = new Date().getTime();
    let t = deadLine - now;
    if (t < 0) return clearInterval(startCountdown);
    setDays(String(Math.floor(t / (1000 * 60 * 60 * 24))).padStart(2, '0'));
    setHours(
      String(
        Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, '0')
    );
    setMinutes(
      String(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
    );
    setSeconds(String(Math.floor((t % (1000 * 60)) / 1000)).padStart(2, '0'));
  }, 1000);
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        pt: 2,
      }}
    >
      <Stack>
        <Typography
          variant={'h5'}
          component={'p'}
          textTransform={'capitalize'}
          textAlign={'center'}
        >
          Time left until the start of the festival
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 100,
            backgroundColor: (theme) => theme.palette.default.main,
            borderRadius: 2,
          }}
        >
          <Typography
            variant={'h3'}
            component={'span'}
            textTransform={'capitalize'}
            sx={{ color: (theme) => theme.palette.primary.main }}
          >
            {days}
          </Typography>
          <Typography
            variant={'h5'}
            component={'span'}
            textTransform={'capitalize'}
          >
            days
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 100,
            backgroundColor: (theme) => theme.palette.default.main,
            borderRadius: 2,
          }}
        >
          <Typography
            variant={'h3'}
            component={'span'}
            textTransform={'capitalize'}
            sx={{ color: (theme) => theme.palette.secondary.main }}
          >
            {hours}
          </Typography>
          <Typography
            variant={'h5'}
            component={'span'}
            textTransform={'capitalize'}
          >
            hour
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 100,
            backgroundColor: (theme) => theme.palette.default.main,
            borderRadius: 2,
          }}
        >
          <Typography
            variant={'h3'}
            component={'span'}
            textTransform={'capitalize'}
            sx={{ color: (theme) => theme.palette.warning.main }}
          >
            {minutes}
          </Typography>
          <Typography
            variant={'h5'}
            component={'span'}
            textTransform={'capitalize'}
          >
            minutes
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 100,
            backgroundColor: (theme) => theme.palette.default.main,
            borderRadius: 2,
          }}
        >
          <Typography
            variant={'h3'}
            component={'span'}
            textTransform={'capitalize'}
            sx={{ color: (theme) => theme.palette.info.main }}
          >
            {seconds}
          </Typography>
          <Typography
            variant={'h5'}
            component={'span'}
            textTransform={'capitalize'}
          >
            seconds
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default React.memo(GiftCountdown);
