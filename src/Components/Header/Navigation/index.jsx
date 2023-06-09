import { Button, Stack } from '@mui/material';
import React from 'react';
import { dataOfRouterLinks } from '../../../Utils';
import { Link } from 'react-router-dom';
import Logo from '../../Logo';
import ToggleTheme from '../../ToggleTheme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));
const Navigation = () => {
  const classes = useStyles();
  const renderDataOfRouterLinks = () => {
    return dataOfRouterLinks.map(({ id, name, to }) => {
      return (
        <Link to={to} className={classes.links} key={id}>
          <Button
            variant="text"
            sx={{
              fontSize: '1.4rem',
              textTransform: 'capitalize',
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {name}
          </Button>
        </Link>
      );
    });
  };
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        flexGrow: 1,
        flexWrap: 'wrap',
      }}
    >
      <Stack>
        <Logo />
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          flexGrow: 2,
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {renderDataOfRouterLinks()}
      </Stack>
      <Stack>
        <ToggleTheme />
      </Stack>
    </Stack>
  );
};

export default Navigation;
