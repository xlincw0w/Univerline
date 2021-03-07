import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import SendIcon from '@material-ui/icons/Send'
import SearchIcon from '@material-ui/icons/Search'
import Switch from '@material-ui/core/Switch'
import img from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import Grid from '@material-ui/core/Grid'
import Users from './users'

import './messagerie.css'

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
}))

export default function Messagerie() {
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
            <Grid container style={{ height: '90vh' }} className='principale'>
                <Grid container className='bordure' xs={3} style={{ height: '90vh' }}>
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
                    <Grid className='flex shadow-lg' style={{ height: '15%' }} xs={12}>
                        <Grid xs={9} className='entetinformation flex'>
                            <Avatar alt='Neseau social' src={Image} className={classes.xlarge} />
                            <div className='block infpersonel'>
                                <p> {FirstName} </p>
                                <p>{LastName}</p>
                            </div>
                        </Grid>

                        <Grid xs={3} style={{ textAlign: 'right', marginTop: '20px' }}>
                            <Switch inputProps={{ 'aria-label': 'primary checkbox' }} onClick={div} color='primary' checked={switch1} />
                        </Grid>
                    </Grid>
                    {/* 
             messages


             */}
                    <Grid xs={12} className='shadow-lg' style={{ height: '70%' }}></Grid>

                    {/* 
             formulaire
             
             */}
                    <Grid className='shadow-lg' xs={12} style={{ height: '15%' }}>
                        <form className='form'>
                            <input placeholder='Recherche contact...' />

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
                    <Grid className='shadow-lg entete3' xs={12} style={{ height: '40%' }}>
                        {}
                        <Avatar alt='Neseau social' src={Image} className={classes.xxlarge} />
                        <h1>
                            {' '}
                            <a href='#' className='a'>
                                {FirstName} {LastName}
                            </a>
                        </h1>
                        <p>{Statu}</p>
                    </Grid>
                    <Grid className='' xs={12} style={{ height: '60%' }}></Grid>
                </Grid>
            </Grid>
        </div>
    )
}
