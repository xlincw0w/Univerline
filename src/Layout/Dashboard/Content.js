import React from 'react'
import Feed from './Feed/feed'
import Post from './Post/post'

export default function Content() {
    return (
        <div className='mx-auto center shadow-xl' style={{ width: '95%' }}>
            <Post />
            <Feed />
        </div>
    )
}
