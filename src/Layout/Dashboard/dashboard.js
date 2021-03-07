import React from 'react'
import Content from './Content'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Nav from './Nav'

export default function Dashboard() {
    return (
        <div className='flex flex-col'>
            <div>
                <Nav />
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-2'>
                <div className=' row-span-2 col-span-2'>
                    <Content />
                </div>
                <div>
                    <div className='row-span-1'>
                        <Feature1 />
                    </div>
                    <div className='row-span-1'>
                        <Feature2 />
                    </div>
                </div>
            </div>
        </div>
    )
}
