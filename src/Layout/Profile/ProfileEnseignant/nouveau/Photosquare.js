import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange, green } from '@material-ui/core/colors'
import m from './Media/m.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        width: theme.spacing(28),
        height: theme.spacing(28),
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },
}))

export default function PhotoSquare() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Avatar variant='square' src={m} className={classes.square}></Avatar>
        </div>
    )
}
