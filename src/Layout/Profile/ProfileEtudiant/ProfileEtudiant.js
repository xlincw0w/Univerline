import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import BoutonModifierProfile from './Component/BoutonModifierProfile'
import InfoEtudiant from './Component/InfoEtudiant'
import Onglets from './Component/Onglets'
import ModifierImage from './Component/ModifierImage'
import ImageRonde from './Component/ImageRonde'
import './Component/modifierImage.css'
//import ListProfs from './Component/ListProfs'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.primary,
    },
}))

export default function Profile() {
    const classes = useStyles()

    return (
        <Container maxWidth='md' className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <p className='centrer'>
                            <span className='centrerImage'>
                                <ImageRonde />
                            </span>
                            {/**
                             * importaion de l'icone pour modifier la photo de profil
                             */}
                            <span>
                                <ModifierImage />
                            </span>
                        </p>
                    </Grid>
                    <Grid item xs={10}>
                        <>
                            <InfoEtudiant />
                            <br />
                            <BoutonModifierProfile />
                        </>
                    </Grid>
                </Grid>

                <br />
                <hr />
                <br />

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper>
                            <Onglets />
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}
