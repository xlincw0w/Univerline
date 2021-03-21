import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({


    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
  }));
  


export default function Users(props) {
    const classes = useStyles();
    const {user, onclick}= props;

 
  
    
    
    return (
        
        
        
        <Grid  id={user.id} className="flex" xs={12}  className="util outline-none focus:outline-none select-text bg-gray-200 text-gray-800" onClick={() => onclick(user)}>
             
           
            <Grid  className="flex" >
        
              <Avatar alt={user.prenom} src={user.avatar} className={classes.large} />
              <Grid className='userdata'  style={{ marginLeft: "10px" }} >
                <p>{user.prenom} {user.nom}</p>
                <p>{user.user_type}</p>
              </Grid>
              </Grid>
        </Grid>
       
        
    )
}


