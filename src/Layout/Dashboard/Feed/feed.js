import React from 'react'
import Skeleton from './skeleton'

const Feed = () => {
    return (
        <div className='w-full h-auto bg-gray-50 mx-auto shadow-xl rounded-xl'>
            <div className='mt-8 mb-8' style={{ minHeight: '2000px', height: 'auto' }}>
                <Skeleton />
            </div>
        </div>
    )
}

export default Feed
