import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Message from './messages'
import Grid from '@material-ui/core/Grid'
import SendIcon from '@material-ui/icons/Send'
import ListIcon from '@material-ui/icons/List'
import './partie2.css'
import Champ from './champ'

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
        <Grid container className='grid-flow-row auto-rows-max pt-1' xs={alo} style={{ height: '100%', borderRight: '2px solid rgb(202, 202, 202)' }}>
            {/*  entete */}

            {/* <Grid container className='flex shadow-lg gap-y-2 rounded-2xl bg-gray-100  p-1' style={{ height: '5%' }} xs={12}>
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
            </Grid> */}

            {/*  Discussion */}

            <Grid xs={12} className='shadow-lg overflow-y-auto bg-white flex flex-row items-center rounded-xl w-full' style={{ height: '85%' }}>
                <Message />
            </Grid>

            {/*formulaire */}

            <Grid className=' grid-flow-row auto-rows-max fixed-bottom ' xs={12} style={{ height: '15%' }}>
                <Champ />
            </Grid>
        </Grid>
    )
}
