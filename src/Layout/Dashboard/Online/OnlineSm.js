import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import Axios from 'axios'
import { constants } from '../../../constants'
import cx from 'classnames'
import moment from 'moment'

const OnlineSm = ({ id, nom, prenom, avatar, user_type }) => {
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

    const [userData, setUserData] = useState(null)
    const [refresh, setRefresh] = useState(0)

    const reload = () => {
        setRefresh(refresh + 1)
    }

    setTimeout(() => {
        reload()
    }, 600000)

    useEffect(() => {
        if (id) {
            Axios.get(constants.url + '/api/online/get/' + id)
                .then((res) => {
                    setUserData(res.data.last_seen)
                })
                .catch((err) => {
                    setUserData(null)
                })
        }
    }, [refresh])

    const diff = moment.duration(moment().utc().diff(moment(userData))).asSeconds()

    return (
      
        <div key={id} className={cx('my-2 cursor-pointer duration-300 hover:bg-gray-100', { hidden: diff <= 0 || diff > 630 ? true : false })}>
            <div>
                <div>
                    <StyledBadge
                        overlap='circle'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        style={{ width: '3rem', height: '3rem', marginRight:'6rem' }}
                        variant='dot'>
                        <Avatar alt='Remy Sharp' src={avatar} />
                    </StyledBadge>
                </div>
             
            </div>
        </div>
       
    )
}

export default OnlineSm
