import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { CgMenuLeft } from 'react-icons/cg'
import { HiOutlineTrash } from 'react-icons/hi'
import Axios from 'axios'
import { constants } from '../../../../constants'
import { useDispatch } from 'react-redux'
import { RefreshFeed } from '../../../../store/feed/feed'

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}))

export default function Options({ elem }) {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = () => {
        Axios.delete(constants.url + '/api/post/delete/post/' + elem.id_poste)
            .then((res) => {
                if (res.data.delete) {
                    dispatch(RefreshFeed())
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <div>
            <HiOutlineTrash className='text-gray-200 cursor-pointer' size={30} onClick={() => handleClick()} />
            {/* <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>
                <Typography className={classes.typography}>The content of the Popover.</Typography>
            </Popover> */}
        </div>
    )
}
