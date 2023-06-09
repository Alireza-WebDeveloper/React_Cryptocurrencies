import {
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CardMedia,
  Typography,
  Pagination,
  Grid,
} from '@mui/material';
import millify from 'millify';
import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import CryptoBarChart from '../CryptoBarChart';
import CryptoDoughnut from '../CryptoDoughnutChart';

const useStyle = makeStyles((theme) => ({
  Cell: {
    textAlign: 'center',
  },
}));

const CryptoCoinExchangesTable = ({ dataOfCryptoCoinExchanges }) => {
  const classes = useStyle();
  const [currentPage, setCurrentPage] = useState(1);
  const countPage =
    dataOfCryptoCoinExchanges.length % 5 === 0
      ? Math.floor(dataOfCryptoCoinExchanges.length / 5)
      : Math.floor(dataOfCryptoCoinExchanges.length / 5) + 1;
  const countRender = {
    first: (currentPage - 1) * 5,
    last: currentPage * 5,
  };
  const handleUpdateCurrengPage = (value) => {
    setCurrentPage(value);
  };
  dataOfCryptoCoinExchanges = dataOfCryptoCoinExchanges.slice(
    countRender.first,
    countRender.last
  );

  const listOfCryptoVolume = dataOfCryptoCoinExchanges.map(
    ({ Volume }) => Volume
  );
  const listOfCryptoNames = dataOfCryptoCoinExchanges.map(({ name }) => name);
  const renderTableBodyCells = () => {
    return dataOfCryptoCoinExchanges.map(({ name, Volume, iconUrl, price }) => {
      return (
        <TableRow
          key={name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell className={classes.Cell} component={'th'} scope="row">
            <Typography variant={'h5'}>{name}</Typography>
          </TableCell>
          <TableCell className={classes.Cell}>
            <Typography variant={'body2'} component={'span'}>
              {millify(Volume)}
            </Typography>
          </TableCell>
          <TableCell>
            <CardMedia
              sx={{ width: '8vh', height: '8vh' }}
              src={iconUrl}
              component={'img'}
              alt={name}
              loading="lazy"
            />
          </TableCell>
          <TableCell className={classes.Cell}>
            <Typography variant={'subtitle2'} component={'span'}>
              {new Intl.NumberFormat(navigator.language, {
                style: 'currency',
                currency: 'USD',
              }).format(price)}
            </Typography>
          </TableCell>
        </TableRow>
      );
    });
  };
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Stack>
        <TableContainer>
          <Table sx={{ textTransform: 'capitalize' }}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.Cell}>
                  <Typography
                    variant={'h5'}
                    component={'span'}
                    sx={{ fontWeight: 'bold' }}
                  >
                    exchanges
                  </Typography>
                </TableCell>
                <TableCell className={classes.Cell}>
                  <Typography
                    variant={'h5'}
                    component={'span'}
                    sx={{ fontWeight: 'bold' }}
                  >
                    24hVolume
                  </Typography>
                </TableCell>
                <TableCell className={classes.Cell}>
                  <Typography
                    variant={'h5'}
                    component={'span'}
                    sx={{ fontWeight: 'bold' }}
                  >
                    mark
                  </Typography>
                </TableCell>
                <TableCell className={classes.Cell}>
                  <Typography
                    variant={'h5'}
                    component={'span'}
                    sx={{ fontWeight: 'bold' }}
                  >
                    price
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderTableBodyCells()}</TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack
        sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}
      >
        <Pagination
          onChange={(e, value) => handleUpdateCurrengPage(value)}
          count={countPage}
          color={'primary'}
          shape={'rounded'}
          size="large"
          siblingCount={0}
          boundaryCount={2}
          showFirstButton
          showLastButton
          defaultPage={currentPage}
        />
      </Stack>
      <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Grid container rowSpacing={3}>
          <Grid item lg={6} xs={12}>
            <CryptoBarChart
              dataOfXAxis={listOfCryptoNames}
              dataOfYAxis={listOfCryptoVolume}
              title="The Amount Of Changes Based On 24h Volume"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <CryptoDoughnut
              dataOfXAxis={listOfCryptoNames}
              dataOfYAxis={listOfCryptoVolume}
              title="The Amount Of Changes Based On 24h Volume"
            />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default CryptoCoinExchangesTable;
