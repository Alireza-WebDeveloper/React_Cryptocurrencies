import {
  Box,
  IconButton,
  SwipeableDrawer,
  Stack,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Typography,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { dataOfRouterLinks, IconMenu, IconClose } from '../../../Utils';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const SwipeDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpenSwipeDrawer = () => {
    setOpen(true);
  };
  const handleCloseSwipeDrawer = () => {
    setOpen(false);
  };
  const renderDataOfRouterLinks = () => {
    return dataOfRouterLinks.map(({ id, name, icon, to }) => {
      return (
        <Link
          to={to}
          className={classes.links}
          key={id}
          onClick={handleCloseSwipeDrawer}
        >
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    fontSize={'1.3rem'}
                  >
                    {name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </Link>
      );
    });
  };
  return (
    <Box>
      <IconButton color="primary" onClick={handleOpenSwipeDrawer}>
        {IconMenu}
      </IconButton>
      <SwipeableDrawer open={open} onClose={handleCloseSwipeDrawer}>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flexGrow: 1,
            p: 2,
          }}
        >
          <Box>
            <IconButton onClick={handleCloseSwipeDrawer} color={'primary'}>
              {IconClose}
            </IconButton>
          </Box>
          <Stack>{renderDataOfRouterLinks()}</Stack>
        </Stack>
      </SwipeableDrawer>
    </Box>
  );
};

export default SwipeDrawer;
