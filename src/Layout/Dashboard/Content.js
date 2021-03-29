import React from 'react'
import Feature3 from './Feature3'
import Feed from './Feed/feed'
import Post from './Post/post'
import { FiUsers } from 'react-icons/fi'


export default function Content() {
  return (
    <div className='mx-auto center shadow-xl' style={{ width: '95%' }}>

      <div className="visible md:hidden">
        <div className=" mt-6 mx-auto ">
          <div className="flex justify-center content-center">
              <div class="mr-6 my-2 col-span-3">
                <input type="search" class="bg-purple-white shadow rounded border-0 p-3" placeholder="Rechercher Vos amis" />
              </div>
         </div>
        </div>
        <div className=" mt-2 p-2  bg-white rounded-md  focus:outline-none">
          <Feature3 />
        </div>
      </div>
        <Post />
        <Feed />
    </div>
)
}
