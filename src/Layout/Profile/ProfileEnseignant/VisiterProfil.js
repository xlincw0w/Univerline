import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
  },
  absolute: {
    Alignn: 'center',
    width: '2ch',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
   
  },
}));

export default function VisiterProfil() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Visiter" >
        <IconButton aria-label="VisibilityIcon" className={classes.absolute}>
          <VisibilityIcon />
        </IconButton>
      </Tooltip>
     
    </div>
  );
}
