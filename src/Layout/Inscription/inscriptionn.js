import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import image from './imageCo.jpg';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    card:{
        maxWidh:"500px"
    }
  }));
export default function Inscription() {
    const classes = useStyles();
    return (
        <div>
            <Card className="mt-40 ml-12  mr-12">
                <Grid container direction="row" >
                    <Grid item xs={12} sm={6}>
                    <img className="w-full h-full object-cover" src={image}  atl="iage" />
                    </Grid> 
                    
                    <Grid item xs={12} sm={6} spacing={0}>
                        <Grid container direction="column" justify="space-between" alignItems="center">

                            <Grid item xs={12} sm={6} >
                              <p className="mb-20 mt-5 no-underline hover:underline">Connexion</p>
                            </Grid>
                            <Grid item >
                                <Grid container>
                                    <Grid item sm={6} >
                                              <div>  
                                                <label className="ml-3">Identifant</label>
                                                     
                                                <TextField
                                                 style={{marginBottom:"10px", marginTop:"20px"}}
                                                id="standard-password-input"
                                                label="Identifiant"
                                                variant="outlined"
                                                fullWidth
                                                autoComplete="current-password"
                                               />
                                               <label className="ml-3">Password</label>
                
                                                <TextField
                                                 style={{marginBottom:"10px", marginTop:"20px"}}
                                                id="standard-password-input"
                                                label="Password"
                                                type="password"
                                                variant="outlined"
                                                fullWidth
                                                autoComplete="current-password"
                                             />
                                             <div className="mt-4">
                                             <label className="hover:text-blue-700 text-sm">
                                                 Mot de passe oublié ?
                                             </label>
                                             </div>
                                        </div>     
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item >
                            
                                <button   type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded hover: bg-blue-900 w-full ">Se connecter</button>
                               
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </Card>
            
        </div>
       
    )
}
