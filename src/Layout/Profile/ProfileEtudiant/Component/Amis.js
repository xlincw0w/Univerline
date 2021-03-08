import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AffichageAmis from './Amis/AffichageAmis'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: 'auto',
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

export default function CenteredGrid() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <AffichageAmis />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <AffichageAmis />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <AffichageAmis />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <AffichageAmis />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
