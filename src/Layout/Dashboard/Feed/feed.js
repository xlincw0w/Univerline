import React from 'react'
import Skeleton from './skeleton'

const Feed = () => {
    return (
        <div className='w-full h-auto bg-gray-50 mt-5 mx-auto shadow-xl rounded-xl border-l-2 border-r-2 border-b-2 border-indigo-900 border-opacity-50'>
            <div className='mt-8 mb-8' style={{ minHeight: '2000px', height: 'auto' }}>
                <Skeleton />
            </div>
        </div>
    )
}

export default Feed
