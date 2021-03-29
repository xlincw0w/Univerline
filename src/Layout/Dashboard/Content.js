import React from 'react'
import Feature3 from './Feature3'
import Feed from './Feed/feed'
import Post from './Post/post'
import Feature1 from './Feature1'
import Feature2 from './Feature2'

export default function Content() {
    return (
        <div className='mx-auto center shadow-xl' style={{ width: '95%' }}>
            <div className='mt-6 visible md:hidden'>
                <div className=' p-2  bg-white rounded-md  focus:outline-none'>
                    <Feature3 />
                </div>
            </div>
            <Post />
            <Feed />
        </div>
    )
}
