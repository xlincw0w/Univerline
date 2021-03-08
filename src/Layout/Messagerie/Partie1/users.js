import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({


    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    xlarge: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
    xxlarge: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }));
  


export default function Users(props) {
    const classes = useStyles();
    const {user, onclick}= props;

   
  
    
    
    return (
        
        
        
        <Grid  className="flex" xs={12} className='util'>
            <button style={{width:"100%"}} onClick={() => onclick(user)} className='outline-none focus:outline-none'>    
        
            <Grid className="flex" >
        
              <Avatar alt="Reseau social" src={user.Image} className={classes.large} />
              <Grid  style={{ marginLeft: "10px" }} >
                <p>{user.FirstName} {user.LastName}</p>
                <p>{user.Statu}</p>
              </Grid>
              </Grid>
              </button>
              
        </Grid>
       
        
    )
}


