import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import img from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'

const useStyles = makeStyles((theme) => ({
    h1: {
        color: 'red',
    },

    input: {
        display: 'none',
    },

    xxlarge: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
}))






export default function partie3(props) {
    const{FirstName, LastName, Image, Statu}=props;

    const classes = useStyles()

    return (
        <Grid container xs={3}>
        <Grid container className='shadow-lg'>
            <Grid xs={2}></Grid>
            <Grid xs={8}  style={{marginTop:'10px'}}>
                <Avatar alt='Neseau social' src={Image} style={{ marginLeft: '29%' }} className={classes.xxlarge} />
                <h1>
                    <a className='a' style={{ marginLeft: '24%'}}>
                        {' '}
                         {FirstName} {LastName}{' '} 
                    </a>
                </h1>
                <p style={{ marginLeft: '35%'}}> {Statu} </p>
            </Grid>
            <Grid xs={2}></Grid>
        </Grid>
        {/*pour boutob Ajouter un fichier*/}
        <Grid className='' xs={12} style={{ height: '60%' }}>
            {/* bouton pour discusion personalisée */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                    <Typography className={classes.heading}>Discussion personalisée</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{}}>
                        <Button
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                            style={{ fontSize: '13px', fontWeight: 'bold', width: '100%' }}>
                            Supprimer discussion{' '}
                        </Button>
                        <Button style={{ fontSize: '13px', fontWeight: 'bold', width: '100%' }}>Rechercher dans discussion </Button>
                    </div>
                </AccordionDetails>
            </Accordion>
            {/* bouton de fichiers partagées  */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} s aria-controls='panel1a-content' id='panel1a-header'>
                    <Typography className={classes.heading}>Fichiers partagées</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={30}>
                        <Grid xs={4}>
                            <a href='pdf' /> <a />
                        </Grid>
                        <Grid xs={4}></Grid>
                        <Grid xs={4}>
                            <p>
                                {' '}
                                <img src={img4} />
                            </p>
                        </Grid>
                        <Grid xs={4}>
                            <p>
                                {' '}
                                <img src={img5} />
                            </p>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            {/* bouton de Photos partagées  */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2a-content' id='panel2a-header'>
                    <Typography className={classes.heading}>Photos Partagéess</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={30}>
                        <Grid xs={4}>
                            <p>
                                {' '}
                                <img src={img2} />
                            </p>
                        </Grid>
                        <Grid xs={4}>
                            <p>
                                {' '}
                                <img src={img3} />
                            </p>
                        </Grid>
                        <Grid xs={4}>
                            <p>
                                {' '}
                                <img src={img4} />
                            </p>
                        </Grid>
                        <Grid xs={4}>
                            <p>
                                {' '}
                                <img src={img2} />
                            </p>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Button style={{ width: '100%', fontSize: '15px', border: 'light' }} variant='outlined' color='secondary'>
                <h1 style={{ fontWeight: 'bold' }}>Bloquer</h1>
            </Button>
        </Grid>
    </Grid>
    )
}

