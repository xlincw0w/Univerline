import React from 'react'
import Feed from './Feed/feed'
import Post from './Post/post'

export default function Content() {
    return (
        <div className='mx-auto center mt-10 mx-2 shadow-xl' style={{ width: '95%' }}>
            <Post />
            <Feed />
        </div>
    )
}
