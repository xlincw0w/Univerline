import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '24ch',
    },
  },
}));

export default function RechercherAmis() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Rechercher plus d'amis" variant="outlined" />
    </form>
  );
}
