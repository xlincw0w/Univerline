import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '24ch',
        },
    },
}))

export default function AjouterAmi() {
    const classes = useStyles()

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <TextField id='outlined-basic' label='Ajouter des amis' variant='outlined' />
        </form>
    )
}
