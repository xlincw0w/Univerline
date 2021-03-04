import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import moi from './moi.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <Avatar alt="Remy Sharp" src={moi} className={classes.large} style={{marginRight:"10px"}}/>
    </span>
  );
}
