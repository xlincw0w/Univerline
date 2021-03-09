import React, { useState } from 'react'
import Partie1 from './Partie1/partie1'
import Partie2 from './Partie2/partie2'
import Partie3 from './Partie3/partie3'
import Grid from '@material-ui/core/Grid'
import './messagerie.css'


export default function messagerie() {
    


    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Statu, setStatu] = useState('')
    const [Image, setImage] = useState()

    

    const vava = (user) => {
        setFirstName(user.FirstName)
        setLastName(user.LastName)
        setImage(user.Image)
        setStatu(user.Statu)
    }

    return (
        <div style={{overflow:'hidden'}}>
         
            <Grid container style={{ height: '89vh' }}>

                <Partie1 onclick2={vava}/>
                
                <Partie2 FirstName={FirstName} LastName={LastName} Image={Image}/>

                <Partie3  FirstName={FirstName} LastName={LastName} Image={Image} Statu={Statu}/>

            </Grid>
        </div>
    )
}
