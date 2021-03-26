import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
}));

export default function ImageAvatars(props) {
    const classes = useStyles();
    const avatar = props.avatar
    return (
        <div className={classes.root}>

            <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
        </div>
    );
}