import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: '95%',
    margin: 'auto',
  },
});

function createData(name, value) {
  return { name, value};
}

const rows = [
  createData('Nom : ', 'Diabate Cheick Oumar'),
  createData('Email : ', 'cheick@gmail.com'),
  createData('Niveau Etude: ', 'M2'),
  createData('Domaine Etude : ', 'ISI'),
  createData('Etablissement : ', 'UMMTO'),
  createData('Date Inscription : ', '11/03/2021'),
];

export default function InfoEtudiant() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table}  aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}