import React from 'react'
import { FiUsers } from 'react-icons/fi'
import Button from '@material-ui/core/Button'

export default function Feature1() {
    return (
        <div className='bg-gray-50 h-2/6 w-5/6 mx-1 mt-5 shadow-2xl overflow-y-scroll'>
            <div className='text-gray-700 text-base'>
                <div className='inline-block ml-4 mt-4'>
                    <FiUsers className='inline-block' size={25} />
                    <p className='inline ml-3'>Vos classes</p>
                </div>
            </div>
            <div className='border-b-2 mt-3 border-green-400 w-48'></div>
            {/* <hr></hr> */}
            <div className='mt-5 ml-5'>
                <div className='my-2'>
                    <Button className='block'>Conduite de projet informatique</Button>
                </div>
                <div className='my-2'>
                    <Button className='block'>Ingénieurie systeme d'information</Button>
                </div>
                <div className='my-2'>
                    <Button className='block'>Droit informatique</Button>
                </div>
                <div className='my-2'>
                    <Button className='block'>Rédaction scientifique</Button>
                </div>
            </div>
        </div>
    )
}
