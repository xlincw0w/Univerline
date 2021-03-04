import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Modal } from '@material-ui/core';
import m from './Media/m.jpg'
import InfoPerso from './infoPerso';
import Menu from './menu';

import ModifierProfil from './ModifierProfil';
import ModifierPhoto from './ModifierPhoto';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (

    <Container maxWidth="md" className={classes.root}>
<br/>
      <Grid container spacing={3}>
        <Grid container lg={12}>
                <Grid item lg={2}>
                <img src={m}/>
                <br/>
                
                <ModifierPhoto/>
                
                <br/>
                </Grid>
                <Grid container lg={10}>
                    <Grid item lg={12}>
                    <Paper className={classes.paper}>
                    <InfoPerso />
                    
                   
                    </Paper>
                    
                    
                    </Grid>
                </Grid>
        </Grid>
       
        </Grid>

        <Grid container spacing={3}>
        <Grid container lg={12}>
                <Grid item lg={2}>
                
                </Grid>
                <Grid container lg={10}>
                    <Grid item lg={12}>
                    <Paper className={classes.paper}>
                  
                   
                   <ModifierProfil/>
                   <br/>
                    <Menu/>
                    
                    </Paper>
                  
                    
                    </Grid>
                </Grid>
        </Grid>
       
        </Grid>
        
    </Container>
     
     
  );
}

