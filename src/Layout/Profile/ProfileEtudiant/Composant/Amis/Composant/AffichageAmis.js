import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import moi from '../../../Media/moi.png'
import MenuAmi from './MenuAmi'
import { Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}))

export default function AffichageAmis() {
    const classes = useStyles()

    const amis = [
        {
            id: 0,
            nom: 'Kante Aboubakar',
            status: 'Etudiant',
        },
        {
            id: 1,
            nom: 'Tieman Moussa',
            status: 'Etudiant',
        },
        {
            id: 2,
            nom: 'Diagana Kaba',
            status: 'Enseignant',
        },
        {
            id: 3,
            nom: 'Diabate Aboulaye',
            status: 'Enseignant',
        },
    ]

    return (
        <Grid container spacing={2}>
            {amis.map((ami) => (
                <Grid item xs={6} key={ami.id}>
                    <Paper elevation={3}>
                        <CardHeader
                            avatar={<Avatar alt='Photo de cheick oumar diabate' src={moi} className={classes.large} />}
                            action={
                                <IconButton aria-label='menuAmi'>
                                    <MenuAmi />
                                </IconButton>
                            }
                            title={ami.nom}
                            subheader={ami.status}
                        />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
}
