import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import m from './Media/m.jpg'



const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
   
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            jane or joe doe
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            grade
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <li >
            <Divider></Divider>
            Nom:
            <Divider></Divider> 
            prénom:
            <Divider></Divider>
            Age:
            <Divider></Divider>
            adresse e-mail:
            <Divider></Divider>
            Domaine:
            <Divider></Divider>

        </li>




        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={m}
        title="Jane or Joe Doe"
      />
        <button class='secondary' title='modifier le profil'  />
    </Card>
     



  );
}