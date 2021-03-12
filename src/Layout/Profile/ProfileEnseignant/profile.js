import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Container, Modal } from '@material-ui/core'
import m from './Media/m.jpg'
import InfoPerso from './infoPerso'
import Menu from './menu'

import ModifierProfil from './ModifierProfil'
import ModifierPhoto from './ModifierPhoto'
import PhotoProfil from './PhotoProfil'
import './Profile.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'right',
        color: theme.palette.text.secondary,
    },
}))

export default function CenteredGrid() {
    const classes = useStyles()

    return (
        <Container maxWidth='md' className={classes.root}>
            <br />
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <>
                            <p className='center'>
                                <span>
                                    <PhotoProfil />
                                </span>
                                <span>
                                    <ModifierPhoto />
                                </span>
                            </p>
                        </>
                    </Grid>

                    <Grid item xs={10}>
                        <>
                            <InfoPerso />
                        </>
                        <br />
                        <ModifierProfil />
                    </Grid>
                </Grid>
                <br />
                <hr />
                <br />

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        
                        <Paper>

                        <Menu />
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}
