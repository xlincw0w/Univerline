import React, { useState } from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiMessage } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import cx from 'classnames'
import { RefreshProfile } from '../../../store/profile/profile'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Axios from 'axios'
import { constants } from '../../../constants'

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
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.AuthReducer.user)
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const [reset, setReset] = useState(0)

    const RefreshPop = () => {
        setReset(reset + 1)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const [users, setUser] = useState([])

    const handleInputChange = (val) => {
        if (val && val !== '') {
            Axios.get(constants.url + '/api/profile/byname/' + val.toLowerCase())
                .then((res) => {
                    const result = res.data.map((elem) => {
                        return {
                            id_user: elem.id_user,
                            user_type: elem.user_type,
                            nom: elem.nom,
                            prenom: elem.prenom,
                            searchIn: elem.nom + ' ' + elem.prenom + ' ' + elem.nom,
                        }
                    })
                    setUser(result)
                    RefreshPop()
                })
                .catch((err) => setUser([]))
        }
    }

    const profileGoto = (id) => {
        history.push('/profile/' + id)
        handleInputChange('')
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
                                history.push('/profile/' + user.id)
                                dispatch(RefreshProfile())
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
                <div className=''>
                    <Autocomplete
                        options={users}
                        onInputChange={(e) => handleInputChange(e.target.value)}
                        getOptionLabel={(option) => option.searchIn}
                        renderInput={(params) => (
                            <div ref={params.InputProps.ref}>
                                <input
                                    type='text'
                                    className='focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 w-62 sm:text-sm border-gray-300 rounded-md mx-auto'
                                    placeholder='Rechercher profile'
                                    {...params.inputProps}
                                />
                            </div>
                        )}
                        renderOption={({ nom, prenom, id_user, user_type }) => {
                            return (
                                <div
                                    className='w-full'
                                    onClick={() => {
                                        profileGoto(id_user)
                                    }}>
                                    <p className='text-sm text-gray-500'>{nom.capitalize() + ' ' + prenom.capitalize()}</p>
                                    <p className={cx('text-sm', { 'text-green-500': user_type === 'etudiant', 'text-purple-600': user_type === 'enseignant' })}>
                                        {user_type.capitalize()}
                                    </p>
                                </div>
                            )
                        }}
                    />
                </div>
            )}
            {props.item === 'pendinglist' && (
                <div className='mt-1 cursor-pointer'>
                    <AiOutlineUsergroupAdd
                        onClick={() => {
                            history.push('/pending')
                        }}
                        size={30}
                    />
                </div>
            )}
        </div>
    )
}
