import React from 'react'
import Content from './Content'
import Feature1 from './Feature1'
import Feature2 from './Feature2'

export default function Dashboard() {
    return (
        <div className='h-auto'>
            <div className='grid grid-cols-5 h-full'>
                <div className='col-span-4'>
                    <Content />
                </div>
                <div className='h-full'>
                    <Feature1 />
                    <Feature2 />
                </div>
            </div>
        </div>
    )
}
