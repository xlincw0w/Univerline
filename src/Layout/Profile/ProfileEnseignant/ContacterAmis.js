import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(4),
    },
    absolute: {
        Alignn: 'center',
        right: '50% ',
        width: '1.5ch',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}))

export default function ContacterAmis() {
    const classes = useStyles()

    return (
        <div>
            <Tooltip title='MailOutlineOutlinedIcon'>
                <IconButton aria-label='MailOutlineOutlinedIcon' className={classes.absolute}>
                    <MailOutlineOutlinedIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}
