import React from 'react'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import m from './Media/m.jpg'

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 4,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge)

const SmallAvatar = withStyles(theme => ({
    root: {
        width: 50,
        height: 50,
        border: `10px solid ${theme.palette.background.paper}`,
    },
}))(Avatar)

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    bordures: {
        width: theme.spacing(17),
        height: theme.spacing(17),
    },
}))

export default function PhotoProfil() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <StyledBadge
                overlap='circle'
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant='dot'>
                <Avatar alt='Remy Sharp' src={m} className={classes.bordures} />
            </StyledBadge>
        </div>
    )
}
