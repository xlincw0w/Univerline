import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import PhotoSquare from './Photosquare'
import Carte from './Carte'
import MenuNv from './MenuNv'
import CarteHaut from './CarteHaut'
import MenuModif from './MenuModif'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}))

export default function ProfileNv() {
    const classes = useStyles()

    return (
        <Container maxWidth='Lg' className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Paper className={classes.paper}>
                            <PhotoSquare />
                        </Paper>
                        <Carte />
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <CarteHaut />

                        <MenuModif />
                        <br />
                        <br />
                        <MenuNv />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
