import React from 'react'
import Feature3 from './Feature3'
import Feed from './Feed/feed'
import Post from './Post/post'
import { FiUsers } from 'react-icons/fi'
import Dropdown from '../Header/Popover/popover'


export default function Content() {
  return (
    <div className='mx-auto center shadow-xl' style={{ width: '95%' }}>

      <div className="block md:hidden">
        <div className=" my-4 mx-auto ">
        <div className='mr-8 flex justify-center'>
          <Dropdown item='profilesearch' />
        </div>
        </div>
        <div className=" my-4 p-2  bg-white rounded-md  focus:outline-none">
          <Feature3 />
        </div>
      </div>
        <Post />
        <Feed />
    </div>
)
}
