import React from 'react'
import { HiStatusOnline } from 'react-icons/hi'
import Online from './Online/online'

export default function Feature2() {
    return (
        <div className='bg-gray-50 h-4/6 w-5/6 mx-1 mt-5 shadow-2xl overflow-y-scroll'>
            <div className='text-gray-700 text-base'>
                <div className='inline-block ml-4 mt-4'>
                    <HiStatusOnline className='inline-block' size={25} />
                    <p className='inline ml-3'>En ligne</p>
                </div>
            </div>
            <div className='border-b-2 mt-3 border-green-400 w-48'></div>
            {/* <hr></hr> */}
            <div className='mt-5 ml-5'>
                <Online />
                <Online />
                <Online />
                <Online />
                <Online />
            </div>
        </div>
    )
}
