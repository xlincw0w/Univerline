import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch'
import img from './1.jpg'
import img4 from './4.jpg'
import Grid from '@material-ui/core/Grid';

import "./messagerie.css"


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

export default function Messagerie() {
  const classes = useStyles();
  const [switch1, setswitch1] = useState(true);
  const [alo, setalo] = useState(6);
 




  const div = () => {

    if (alo === 9) {
      setalo(6)
      setswitch1(true)
    } else if (alo === 6) {
      setalo(9)
      setswitch1(false)
    }



  }



  return (
    <div>
      {/* 
        
        1eme partie
        
        */}
      <Grid container style={{ height: "90vh" }} className="principale">

        <Grid container className="bordure" xs={3} style={{ height: "90vh" }}>
          <Grid container xs={12} className="bordure" style={{ height: "30%" }}>
            <Grid container className="" xs={12} >
              <Grid className='myAvatar shadow-lg'>
                <Avatar alt="Reseau social" src={img} className={classes.large} />
                <h1> Ma Messagerie</h1>
              </Grid>
              <Grid xs={12} className="form1" >
                <form>

                  <input style={{ textAlign: "center", width: "90%", height: "40px", borderRadius: "50px", border: "1px solid grey", }} placeholder="Recherche contact..." />

                </form>
              </Grid>


            </Grid>


          </Grid>
          <Grid container xs={12} className="bordure" style={{ height: "70%" }}>
            <Grid className="flex" xs={12} style={{ margin: "10px", background: "rgb(209, 209, 209)", padding: "5px", borderRadius: "10px", height: "10vh" }}>
              <Avatar alt="Reseau social" src={img4} className={classes.large} />
              <Grid style={{ marginLeft: "10px" }} >
                <p>Bessaha Naim</p>
                <p>Professeur ou etudiant</p>
              </Grid>
            </Grid>

          </Grid>

        </Grid>
        {/* 
           
           
           2eme partie
           
           */}


        <Grid container className="bordure" xs={alo}>

          {/* 
           entete
           */}
          <Grid className="flex shadow-lg" style={{ height: "15%" }} xs={12}>
            <Grid xs={9} className="entetinformation flex">
              <Avatar alt="Neseau social" src={img4} className={classes.xlarge} />
              <div className='block infpersonel'>
                <p>Bessaha</p>
                <p>Naim</p>
              </div>
            </Grid>
            <Grid xs={3} style={{ textAlign: "right", marginTop: "20px" }}>
              <Switch inputProps={{ 'aria-label': 'primary checkbox' }} onClick={div} color='primary' checked={switch1} />

            </Grid>



          </Grid>
          {/* 
             messages


             */}
          <Grid className="shadow-lg" xs={12} style={{ height: "70%" }}>


          </Grid>

          {/* 
             formulaire
             
             */}
          <Grid className="shadow-lg" xs={12} style={{ height: "15%" }}>
            <form className='form'>
              <input placeholder="Recherche contact..." />


              <button
                type='submit'
              ><SendIcon />
              </button>

            </form>
          </Grid>

        </Grid>



        {/* 
          3em partie





          */}

        <Grid container className="bordure" xs={3}>
          <Grid className="shadow-lg entete3" xs={12} style={{ height: "40%" }}>
            <Avatar alt="Neseau social" src={img4} className={classes.xxlarge} />
            <h1> <a href="#" className="a"> Bessaha Naim</a></h1>
            <p>Etudiant ou Professeur</p>
          </Grid>
          <Grid className="" xs={12} style={{ height: "60%" }}>


          </Grid>
        </Grid>

      </Grid>

    </div>
  );
}
