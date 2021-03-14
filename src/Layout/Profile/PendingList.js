import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}))

const PendingList = () => {
    const user = useSelector((state) => state.AuthReducer.user)
    console.log(user)
    const classes = useStyles()
    return (
        <div>
            <div className='h-screen bg-gradient-to-r from-green-400 to-purple-700'>
                <div className='w-full h-full bg-gray-200 bg-opacity-60'>
                    <div className='container bg-gray-100 mx-auto px-34 shadow-2xl border-2 w-3/6 h-screen '>
                        <div>
                            <p className='text-center text-gray-900 text-2xl mt-3'>Demandes d'ajout</p>
                            <p className='text-center text-gray-500'>Confirmez les personnes que vous connaissez ou supprimez les invitations.</p>
                            <hr />
                        </div>
                        <div className='grid grid-rows grid-flow-col gap-2 shadow-xl w-2/3 mx-auto mt-8 '>
                            <div className='border-2 rounded-xl bg-white shadow-xl'>
                                <div className=' grid grid-cols-2 gap-2 place-items-end'>
                                    <div className='w-24 place-self-start mt-2 ml-3'>
                                        <div className={classes.root}>
                                            {' '}
                                            <Avatar
                                                alt='Remy Sharp'
                                                src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                                className={classes.large}
                                            />
                                            <div className=''>
                                                <p
                                                    className='mt-2'
                                                    style={{
                                                        width: 'max-content',
                                                    }}>
                                                    Nadine Aziya
                                                </p>
                                                <p className='text-center text-gray-400 text-sm'>Informatique</p>
                                                <p className='text-gray-400 text-sm text-center'>UMMTO</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mb-6 mr-2 space-x-1'>
                                        <button className='bg-blue-500 w-32 shadow-lg rounded-xl p-2 active:bg-blue-700 text-white focus:outline-none'>Accepter</button>

                                        <button className='bg-gray-200 w-32 shadow-lg rounded-xl p-2 active:bg-green-400 focus:outline-none'>Supprimer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingList
