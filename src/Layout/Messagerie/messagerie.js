import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import SendIcon from '@material-ui/icons/Send'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import img from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import './messagerie.css'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { BorderStyle, CenterFocusStrong, SlowMotionVideoOutlined } from '@material-ui/icons'
import { green, red, yellow } from '@material-ui/core/colors'

const newLocal = '100px'
// le menu deroulan

const useStyles = makeStyles((theme) => ({
    h1: {
        color: 'red',
    },

    input: {
        display: 'none',
    },

    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    xlarge: {
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
    xxlarge: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
}))

export default function messagerie() {
    const classes = useStyles()
    const [switch1, setswitch1] = useState(true)
    const [alo, setalo] = useState(6)

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

            <Grid container style={{ height: '90vh' }} className='principale'>
                <Grid container className='bordure' xs={3} style={{ height: '90vh' }}>
                    <Grid container xs={12} className='bordure' style={{ height: '30%' }}>
                        <Grid container className='' xs={12}>
                            <Grid className='myAvatar shadow-lg'>
                                <Avatar alt='Reseau social' src={img} className={classes.large} />
                                <h1> Ma Messagerie</h1>
                            </Grid>
                            <Grid className='form1'>
                                <form>
                                    <TextField placeholder='Recherche contact' />
                                    <Button className='btncntct' type='submit' variant='contained' color='primary' endIcon={<SearchIcon />}></Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className='bordure' style={{ height: '70%' }}>
                        <Grid xs={12} style={{ margin: '10px', background: 'rgb(209, 209, 209)', padding: '5px', borderRadius: '10px', height: '20%' }}>
                            <Avatar alt='Reseau social' src={img3} className={classes.large} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* 
           
           
           2eme partie
           
           */}

                <Grid container className='bordure' xs={alo}>
                    <Grid className='flex shadow-lg' style={{ height: '15%' }} xs={12}>
                        <Grid xs={9} className='entetinformation flex'>
                            <Avatar alt='Neseau social' src={img2} className={classes.xlarge} />
                            <div className='block infpersonel'>
                                <p>Bessaha</p>
                                <p>Naim</p>
                            </div>
                        </Grid>
                        <Grid xs={3} style={{ textAlign: 'right' }}>
                            <Switch inputProps={{ 'aria-label': 'primary checkbox' }} onClick={div} color='primary' checked={switch1} />
                        </Grid>
                    </Grid>
                    <Grid className='shadow-lg' xs={12} style={{ height: '70%' }}></Grid>
                    <Grid className='shadow-lg' xs={12} style={{ height: '15%' }}>
                        <form className='form'>
                            <input className='input' placeholder='Type Message...' />

                            <Button type='submit' variant='contained' color='primary' endIcon={<SendIcon />}></Button>
                        </form>
                    </Grid>
                </Grid>

                {/* 
          3em partie





          */}

                <Grid container className='bordure' xs={3}>
                    <Grid container>
                        <Grid xs={2}></Grid>
                        <Grid xs={8}>
                            <Avatar alt='Neseau social' src={img2} style={{ marginLeft: '29%' }} className={classes.xxlarge} />
                            <h1>
                                <a style={{ marginLeft: '24%', fontFamily: 'inherit', fontStyle: 'underline' }}>Merabet Lounis</a>
                            </h1>
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
            </Grid>
        </div>
    )
}
