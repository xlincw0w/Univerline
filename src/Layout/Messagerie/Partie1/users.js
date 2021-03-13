import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({


    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    }
  }));
  


export default function Users(props) {
    const classes = useStyles();
    const {user, onclick}= props;

 
  
    
    
    return (
        
        
        
        <Grid  className="flex" xs={12}  className="util outline-none focus:outline-none select-text" onClick={() => onclick(user)}>
             
           
            <Grid className="flex" >
        
              <Avatar alt="Reseau social" src={user.Image} className={classes.large} />
              <Grid className='userdata' style={{ marginLeft: "10px" }} >
                <p>{user.FirstName} {user.LastName}</p>
                <p>{user.Statu}</p>
              </Grid>
              </Grid>
        </Grid>
       
        
    )
}


