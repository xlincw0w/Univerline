import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange, green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        width: theme.spacing(22),
        height: theme.spacing(22),
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },
}))

export default function PhotoSquare({ avatar }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Avatar variant='circle' src={avatar} className={classes.square}></Avatar>
        </div>
    )
}
