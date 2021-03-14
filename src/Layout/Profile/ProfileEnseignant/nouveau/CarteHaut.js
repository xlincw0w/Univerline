import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import RoomIcon from '@material-ui/icons/Room'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}))

export default function CarteHaut() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.section1}>
                <Grid container alignItems='center'>
                    <Grid item xs>
                        <Typography gutterBottom variant='h4'>
                            Jane Doe
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant='h8'>
                            <RoomIcon fontSize='small' /> Algérie
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color='primary' variant='body2'>
                    Docteur
                </Typography>
            </div>
        </div>
    )
}
