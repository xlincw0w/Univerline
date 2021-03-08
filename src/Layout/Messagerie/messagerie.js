import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import SendIcon from '@material-ui/icons/Send'
import SearchIcon from '@material-ui/icons/Search'
import Tield from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
// import MenuIcon from '@material-ui/icons/MenuIcon'
import img from './img/1.jpg'
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
import Users from './users'
import Message from './messages'
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
    const users = {
        utilisateurs: [
            {
                FirstName: 'Naim',
                LastName: 'Bessaha',
                Image: img4,
                Statu: 'Etudiant',
            },
            {
                FirstName: 'Malik',
                LastName: 'Si-Mohamed',
                Image: img3,
                Statu: 'Professeur',
            },
            {
                FirstName: 'Franck',
                LastName: 'Lampard',
                Image: img2,
                Statu: 'Etudiant',
            },
            {
                FirstName: 'Naim',
                LastName: 'Bessaha',
                Image: img4,
                Statu: 'Etudiant',
            },
            {
                FirstName: 'Malik',
                LastName: 'Si-Mohamed',
                Image: img3,
                Statu: 'Professeur',
            },
            {
                FirstName: 'Franck',
                LastName: 'Lampard',
                Image: img2,
                Statu: 'Etudiant',
            },
            {
                FirstName: 'Naim',
                LastName: 'Bessaha',
                Image: img4,
                Statu: 'Etudiant',
            },
            {
                FirstName: 'Malik',
                LastName: 'Si-Mohamed',
                Image: img3,
                Statu: 'Professeur',
            },
            {
                FirstName: 'Franck',
                LastName: 'Lampard',
                Image: img2,
                Statu: 'Etudiant',
            },
        ],
    }

    const classes = useStyles()
    const [switch1, setswitch1] = useState(true)
    const [alo, setalo] = useState(6)

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Statu, setStatu] = useState('')
    const [Image, setImage] = useState()

    const div = () => {
        if (alo === 9) {
            setalo(6)
            setswitch1(true)
        } else if (alo === 6) {
            setalo(9)
            setswitch1(false)
        }
    }

    const vava = (user) => {
        setFirstName(user.FirstName)
        setLastName(user.LastName)
        setImage(user.Image)
        setStatu(user.Statu)
    }

    return (
        <div>
            {/* 
        
        1eme partie
        
        */}
            <Grid container style={{ height: '87vh' }} className='principale'>
                <Grid container className='bordure' xs={3} style={{ height: '87vh' }}>
                    <Grid container xs={12} className='bordure' style={{ height: '30%' }}>
                        <Grid container xs={12}>
                            <Grid className='myAvatar shadow-lg'>
                                <Avatar alt='Reseau social' src={img} className={classes.large} />
                                <h1> Ma Messagerie</h1>
                            </Grid>
                            <Grid xs={12} className='form1'>
                                <form style={{ display: 'flex' }}>
                                    <input className='usersInput' placeholder='Recherche contact...' />
                                    <button className='usersButton'>
                                        {' '}
                                        <SearchIcon />
                                    </button>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} className='bordure over' style={{ height: '70%' }}>
                        {users.utilisateurs.map((user) => (
                            <Users user={user} onclick={vava} />
                        ))}
                    </Grid>
                </Grid>
                {/* 
           
           
           2eme partie
           
           */}

                <Grid container className='bordure' xs={alo}>
                    {/* 
           entete
           */}
                    <Grid className='flex shadow-lg' style={{ height: '10%' }} xs={12}>
                        <Grid xs={9} className='entetinformation flex'>
                            <Avatar alt='Neseau social' src={Image} className={classes.xlarge} />
                            <div className='block infpersonel'>
                                <p> {FirstName} </p>
                                <p>{LastName}</p>
                            </div>
                        </Grid>

                        <Grid xs={2} style={{ textAlign: 'right', marginTop: '20px' }}>
                            {/* <MenuIcon inputProps={{ 'aria-label': 'primary checkbox' }} onClick={div} color='primary' checked={switch1} /> */}
                        </Grid>
                    </Grid>
                    {/* 
             messages


             */}

                    <Grid xs={12} className='shadow-lg' style={{ height: '65%' }}>
                        <Message />
                    </Grid>

                    {/* 
             formulaire
             
             */}
                    <Grid className='shadow-lg' xs={12} style={{ height: '15%' }}>
                        <form className='form'>
                            <input placeholder='Votre réponse' />

                            <button type='submit'>
                                <SendIcon />
                            </button>
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
                            <Avatar alt='Neseau social' src={Image} style={{ marginLeft: '29%' }} className={classes.xxlarge} />
                            <h1>
                                <a className='a' style={{ marginLeft: '24%', fontFamily: 'inherit', fontStyle: 'underline' }}>
                                    {' '}
                                    {FirstName} {LastName}{' '}
                                </a>
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
