import React from 'react'
import Avatar from '@material-ui/core/Avatar'

const Comments = ({ id }) => {
    return (
        <div id={id}>
            <div className='text-left text-xs text-gray-400 bg-gray-200 shadow rounded-lg mx-auto my-1' style={{ width: '98%' }}>
                <div className='flex py-1'>
                    <Avatar
                        alt='Remy Sharp'
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        style={{ width: '2rem', height: '2rem' }}
                        className='ml-2 shadow'
                    />
                    <div className='inline'>
                        <p className='ml-2 text-gray-500'>Khazem Khaled</p>
                        <p className='ml-2'>12 - 03 - 2018 11:35h</p>
                    </div>
                </div>
                <div className='block ml-2 pb-1 text-gray-500'>
                    <p>Voici un commentaire qui est la juste pour tester</p>
                </div>
            </div>
        </div>
    )
}

export default Comments
