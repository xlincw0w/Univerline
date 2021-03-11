import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Message from './messages'
import Grid from '@material-ui/core/Grid'
import SendIcon from '@material-ui/icons/Send'
import ListIcon from '@material-ui/icons/List'
import './partie2.css'

const useStyles = makeStyles((theme) => ({
    xlarge: {
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
}))

export default function partie2(props) {
    const { FirstName, LastName, Image } = props

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
        <Grid container className='grid-flow-row auto-rows-max ' xs={alo} style={{ borderRight: '1px solid rgb(202, 202, 202)' }}>
            {/* 
entete
*/}
            <Grid container className='flex shadow-lg' style={{ height: '15%' }} xs={12}>
                <Grid xs={9} className='entetinformation flex'>
                    <Avatar alt='Neseau social' src={Image} className={classes.xlarge} />
                    <div className='block infpersonel'>
                        <p> {FirstName} </p>
                        <p>{LastName}</p>
                    </div>
                </Grid>

                <Grid xs={2} style={{ textAlign: 'right', marginTop: '20px' }}>
                    <ListIcon inputProps={{ 'aria-label': 'primary checkbox' }} onClick={div} color='primary' checked={switch1} />
                </Grid>
            </Grid>
            {/* 
 messages


 */}

            <Grid xs={12} className='shadow-lg over' style={{ height: '65%' }}>
                <Message />
            </Grid>

            {/* 
 formulaire
 
 */}
            <Grid className=' grid-flow-row auto-rows-max' xs={12} style={{ height: '15%' }}>
                <form className='form'>
                    <input type='textArea' className='focus:outline' multiline='2' placeholder='Votre réponse' />

                    <button className='bg-blue-600 active:bg-green-700' type='submit'>
                        <SendIcon />
                    </button>
                </form>
            </Grid>
        </Grid>
    )
}
