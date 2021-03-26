import React from 'react'
import Feature3 from './Feature3'
import Feed from './Feed/feed'
import Post from './Post/post'

export default function Content() {
  return (
    <div className='mx-auto center shadow-xl' style={{ width: '95%' }}>
      <div className="mt-6 visible md:hidden">
        <div className=" p-2  bg-white rounded-md  focus:outline-none">
          <Feature3 />
        </div>
       </div>
        <Post />
        <Feed />
    </div>
)
}
