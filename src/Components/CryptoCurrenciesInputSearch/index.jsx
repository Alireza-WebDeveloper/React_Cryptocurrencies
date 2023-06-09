import { Button, IconButton, Stack } from '@mui/material';
import React from 'react';
import { Form } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { useState, useDeferredValue, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { coinListBySearchQuery } from '../../Feature/cryptoGlobalCoinSlice';
import { useSelector } from 'react-redux';
import { IconClose } from '../../Utils';
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontSize: '1.4rem',
    '&::placeholder': {
      color: 'black',
      textTransform: 'capitalize',
    },
  },
}));
const CryptoCurrenciesInputSearch = () => {
  const [query, setQuery] = useState('');
  const { cryptoGlobalCoin } = useSelector((store) => store);
  const deferredQuery = useDeferredValue(query);
  const dispatch = useDispatch();
  const updateQuery = (e) => {
    setQuery(e.target.value);
  };
  const clearQuery = () => {
    setQuery('');
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(coinListBySearchQuery(deferredQuery));
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [deferredQuery, cryptoGlobalCoin?.data?.coins]);
  const classes = useStyles();
  return (
    <Stack>
      <Form>
        <Form.Group className="position-relative">
          <Form.Control
            onChange={updateQuery}
            value={query}
            size="lg"
            placeholder="search crypto currency..."
            className={classes.input}
          />
          {deferredQuery ? (
            <IconButton
              color={'secondary'}
              onClick={clearQuery}
              sx={{ position: 'absolute', top: '0', right: '0' }}
            >
              {IconClose}
            </IconButton>
          ) : null}
        </Form.Group>
      </Form>
    </Stack>
  );
};

export default CryptoCurrenciesInputSearch;
