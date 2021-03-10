import React from 'react'
import Users from './users'
import { makeStyles } from '@material-ui/core/styles'
import img from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import './partie1.css'

const useStyles = makeStyles((theme) => ({
    

    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}))


export default function partie1(props) {
    const {onclick2}=props;


    const users = {
        utilisateurs: [
            {
                FirstName: 'Naim',
                LastName: 'Bessaha',
                Image: img4,
                Statu: 'Etudiant(e)',
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
                Statu: 'Etudiant(e)',
            },
            {
                FirstName: 'Naim',
                LastName: 'Bessaha',
                Image: img4,
                Statu: 'Etudiant(e)',
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
                Statu: 'Etudiant(e)',
            },
            {
                FirstName: 'Naim',
                LastName: 'Bessaha',
                Image: img4,
                Statu: 'Etudiant(e)',
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
                Statu: 'Etudiant(e)',
            },
        ],
    }

    const classes = useStyles()
  

    

    return (
        <Grid container  xs={3} style={{ height: '89vh' ,borderRight:'1px solid rgb(202, 202, 202)'}}>
        <Grid container className='' xs={12}  style={{ height: '30%',borderBottom:'1px solid rgb(202, 202, 202)', borderRadius:'10px' }}>
            <Grid container xs={12}>
                <Grid className='myAvatar'>
                    <Avatar alt='Reseau social' src={img} className={classes.large} />
                    <h1>Ma Messagerie</h1>
                </Grid>
                <Grid xs={12} className='form1'>
                    <form style={{ display: 'flex' }}>
                        <input className='usersInput outline-none focus:outline-none' placeholder='Recherche contact...' />
                        <button className='usersButton outline-none focus:outline-none'>
                            <SearchIcon />
                        </button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={12} className='over' style={{ height: '70%' }}>
            {users.utilisateurs.map((user) => (
                <Users user={user} onclick={onclick2} />
            ))}
        </Grid>
    </Grid>
    )
}

