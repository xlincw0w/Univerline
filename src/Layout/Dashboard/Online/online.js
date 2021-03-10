import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const Online = () => {
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
        <div className='my-2 cursor-pointer duration-300 hover:bg-gray-100'>
            <div className='mx-auto mt-3 flex flex-cols'>
                <div>
                    <StyledBadge
                        overlap='circle'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        style={{ width: '3rem', height: '3rem' }}
                        variant='dot'>
                        <Avatar alt='Remy Sharp' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    </StyledBadge>
                </div>
                <div className='inline-block ml-4'>
                    <p className='text-sm text-gray-500'>Khazem Khaled</p>
                    <p className='text-sm text-gray-500'>Enseignant</p>
                </div>
            </div>
        </div>
    )
}

export default Online
