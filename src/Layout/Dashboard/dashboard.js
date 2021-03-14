import React from 'react'
import Content from './Content'
import Feature1 from './Feature1'
import Feature2 from './Feature2'

export default function Dashboard() {
    return (
        <div className='h-auto bg-gradient-to-r from-green-400 to-purple-700'>
            <div className='w-full h-full bg-gray-200 bg-opacity-60'>
                <div className='grid grid-cols-5 h-full'>
                    <div className='col-span-4'>
                        <Content />
                    </div>
                    <div className='h-screen h-full'>
                        <div className='fixed h-full w-full'>
                            <div className='h-full'>
                                <Feature1 />
                                <Feature2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
