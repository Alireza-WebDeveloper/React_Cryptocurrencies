import React from 'react';
import {
  Stack,
  Box,
  Typography,
  CardMedia,
  IconButton,
  Avatar,
} from '@mui/material';
import moment from 'moment/moment';
import { SouceImgReplaceNews } from '../../Utils';
const CryptoNewsCart = ({ newsItem }) => {
  /// newsItem?.image?.thumbnail?.contentUrl
  /// newsItem.name
  ///news.provider[0]?.image?.thumbnail?.contentUrl
  /// news.datapublished
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexRow: '1',
        gap: 2,
        p: 2,
        backgroundColor: (theme) => theme.palette.default.main,
        borderRadius: 2,
        minHeight: '42vh',
        textTransform: 'capitalize',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: { sm: 'nowrap', xs: 'wrap' },
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <CardMedia
            src={newsItem?.image?.thumbnail?.contentUrl || SouceImgReplaceNews}
            alt={'not found'}
            component={'img'}
            sx={{
              width: { sm: '20vh', xs: '100%' },
              height: { sm: '20vh', xs: '30vh', objectFit: 'fill' },
              borderRadius: 2,
            }}
            loading="lazy"
          />
        </Box>
        <Box>
          <Typography variant={'h5'} component={'span'}>
            {newsItem.name.slice(0, 100)}
          </Typography>
        </Box>
      </Stack>
      <Stack>
        <Typography variant={'body2'}>
          {newsItem.description.slice(0, 100)}
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <Avatar src={newsItem.provider[0]?.image?.thumbnail?.contentUrl} />
          </IconButton>
          <Typography variant={'subtitle2'}>
            {newsItem.provider[0]?.name}
          </Typography>
        </Box>
        <Box>
          <Typography variant={'subtitle1'}>
            {moment(newsItem.datePublished).startOf('ss').fromNow()}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CryptoNewsCart;
