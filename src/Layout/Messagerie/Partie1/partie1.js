import React, { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector,useDispatch  } from 'react-redux'
import  { constants } from '../../../constants'
import { SetFriends } from '../../../store/auth/auth'
import Axios from 'axios'
import img from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

import './partie1.css'
import Users from './users'




const useStyles = makeStyles((theme) => ({


    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}))


export default function partie1(props) {
    const {onclick2}=props;
     

    const [searchUser, setsearchUser]= useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.AuthReducer.user)
    const friends = useSelector((state) => state.AuthReducer.friends)
    
    

    useEffect(() => {
        
            Axios.get(constants.url + '/api/amis/get/amis/' + user.id)
                .then((res) => {
                    dispatch(SetFriends(res.data))
                }).catch((err) => {
                    dispatch(SetFriends([]))
                })
                
        
    }, [user.id])

   
   
   
const users = {
        utilisateurs: [
            {
                prenom: 'Naim',
                nom: 'Bessaha',
                avatar: img4,
                user_type: 'Etudiant(e)',
            },
            {
                prenom: 'Malik',
                nom: 'Si-Mohamed',
                avatar: img3,
                user_type: 'Professeur',
            },
            {
                prenom: 'Franck',
                nom: 'Lampard',
                avatar: img2,
                user_type: 'Etudiant(e)',
            },
            {
                prenom: 'Naim',
                nom: 'Bessaha',
                avatar: img4,
                user_type: 'Etudiant(e)',
            },
            {
                prenom: 'Malik',
                nom: 'Si-Mohamed',
                avatar: img3,
                user_type: 'Professeur',
            },
            {
                prenom: 'Franck',
                nom: 'Lampard',
                avatar: img2,
                user_type: 'Etudiant(e)',
     
            },
            {
                prenom: 'Naim',
                nom: 'Bessaha',
                avatar: img4,
                user_type: 'Etudiant(e)',

            },
            {
                prenom: 'Malik',
                nom: 'Si-Mohamed',
                avatar: img3,
                user_type: 'Professeur',
             
            },
            {
                prenom: 'Franck',
                nom: 'Lampard',
                avatar: img2,
                user_type: 'Etudiant(e)',
                
            },
        ],
    }

    const classes = useStyles()
    const lent = users.utilisateurs.length
    
  

    

    return (
        <Grid container  xs={3} style={{ height: '89vh' ,borderRight:'1px solid rgb(202, 202, 202)'}} >
        <Grid container className='' xs={12}  style={{ height: '23%',borderBottom:'1px solid rgb(202, 202, 202)', borderRadius:'10px' }}>
            <Grid container xs={12}>
                <Grid className='myAvatar bg-gradient-to-r from-white to-blue-600'>
                    <Avatar alt='Reseau social' src={img} className={classes.large} />
                    <h1>Ma Messagerie</h1>
                </Grid>
                <Grid xs={12} className='form1'>
                   
                        <input className='usersInput outline-none focus:outline-none' placeholder="Recherche Contacts..." onChange={(event) => {
                            setsearchUser(event.target.value);
                        } }  />
                       
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={12} className='over' style={{ height: '77%' }}>
            {  lent != 0 ?
            users.utilisateurs.filter((user) => {
                if (searchUser === ''){
                    return user
                }else if (user.prenom.toLowerCase().includes(searchUser.toLowerCase()) || user.nom.toLowerCase().includes(searchUser.toLowerCase())){
                    return user
                }
            }

            ).map(user => (
                
                 <Users user={user} onclick={onclick2} />
                
                 )) : <h1 style={{textAlign:'center'}}>Aucun ami disponible</h1>}
        </Grid>
    </Grid>
    )
}

