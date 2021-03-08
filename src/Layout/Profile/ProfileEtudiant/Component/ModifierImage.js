import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    input: {
        display: 'none',
    },
}))

export default function UploadButtons() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <input accept='image/*' className={classes.input} id='contained-button-file' multiple type='file' />
            <label htmlFor='contained-button-file'>
                <Button variant='contained' color='primary' component='span' style={{ margin: '5px' }}>
                    Modifier
                </Button>
            </label>
        </div>
    )
}
