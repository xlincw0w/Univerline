import React, { useRef } from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { CgProfile } from 'react-icons/cg'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiMessage } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import cx from 'classnames'

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}))

const UserProfile = ({ func }) => {
    const user = useSelector((state) => state.AuthReducer.user)
    const StyledBadge = withStyles((theme) => ({
        badge: {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
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
    return (
        <div className='cursor-pointer duration-300 hover:bg-gray-100'>
            <div className='mx-auto flex flex-cols' onClick={func}>
                <div className='block mr-5'>
                    <div className='text-sm text-gray-500'>
                        <p className='inline mr-2'>{user.nom ? user.nom.capitalize() : ''}</p>
                        <p className='inline mr-2'>{user.prenom ? user.prenom.capitalize() : ''}</p>
                    </div>
                    <p className={cx('text-sm text-center', { 'text-purple-700': user.user_type === 'enseignant', 'text-green-600': user.user_type === 'etudiant' })}>
                        {user.user_type ? user.user_type.capitalize() : ''}
                    </p>
                </div>
                <div>
                    <StyledBadge
                        overlap='circle'
                        // onClick={func}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        style={{ width: '3rem', height: '3rem' }}
                        variant='dot'>
                        <Avatar alt='Remy Sharp' src={user.avatar} />
                    </StyledBadge>
                </div>
            </div>
        </div>
    )
}

export default function Dropdown(props) {
    const history = useHistory()
    const classes = useStyles()
    const profileSearch = useRef(null)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <div className='mr-5'>
            {props.item === 'userprofile' && (
                <div>
                    <UserProfile func={handleClick} />
                    <Popover
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
                        <Typography
                            onClick={() => {
                                history.push('/profile')
                            }}
                            className={classes.typography}>
                            <p className='cursor-pointer'>Profile</p>
                        </Typography>
                        <Typography onClick={props.disconnect} className={classes.typography}>
                            <p className='cursor-pointer'>Se déconnecter</p>
                        </Typography>
                    </Popover>
                </div>
            )}
            {props.item === 'notification' && (
                <div className='mt-1'>
                    <IoMdNotificationsOutline onClick={(e) => handleClick(e)} size={30} />
                    <Popover
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
                        <Typography className={classes.typography}>Notification numéro 1</Typography>
                        <Typography className={classes.typography}>Notification numéro 2</Typography>
                        <Typography className={classes.typography}>Notification numéro 3</Typography>
                    </Popover>
                </div>
            )}
            {props.item === 'messagerie' && (
                <div className='mt-2'>
                    <BiMessage
                        onClick={() => {
                            history.push('/messagerie')
                        }}
                        size={26}
                    />
                </div>
            )}
            {props.item === 'profilesearch' && (
                <div className='mt'>
                    <input
                        type='text'
                        className='focus:ring-indigo-500focus:border-indigo-500 block pl-7 pr-12 w-62 sm:text-sm border-gray-300 rounded-md mx-auto'
                        placeholder='Rechercher profile'
                    />
                </div>
            )}
        </div>
    )
}
