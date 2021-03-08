import React, { Component } from 'react'
import Message from './message.js'
import Grid from '@material-ui/core/Grid'
export default function partieDeux() {
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
        /*  entete
         */
        <div>
            <Grid className='flex shadow-lg' style={{ height: '10%' }} xs={12}>
                <Grid xs={9} className='entetinformation flex'>
                    <Avatar alt='Neseau social' src={Image} className={classes.xlarge} />
                    <div className='block infpersonel'>
                        <p> {FirstName} </p>
                        <p>{LastName}</p>
                    </div>
                </Grid>

                <Grid xs={3} style={{ textAlign: 'right', marginTop: '20px' }}>
                    <MenuIcon inputProps={{ 'aria-label': 'primary checkbox' }} onClick={div} color='primary' checked={switch1} />
                </Grid>
            </Grid>
            <Grid xs={12} className='shadow-lg' style={{ height: '30%' }}>
                <Message />
            </Grid>
            /* formulaire */
            <Grid className='shadow-lg' xs={12} style={{ height: '10%' }}>
                <form className='form'>
                    <input placeholder='Votre réponse' />

                    <button type='submit'>
                        <SendIcon />
                    </button>
                </form>
            </Grid>
        </div>
    )
}
