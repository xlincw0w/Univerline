import React from 'react'
import Content from './Content'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useSelector } from 'react-redux'

export default function Dashboard() {
    const loading = useSelector((state) => state.FeedReducer.loading)

    return (
        <div className='h-auto bg-gradient-to-r from-green-400 to-purple-700'>
            <Backdrop open={loading} style={{ zIndex: 10 }}>
                <CircularProgress color='inherit' />
            </Backdrop>
            <div className='w-full h-full bg-gray-200 bg-opacity-60'>
                <div className='grid grid-cols-5 h-full'>
                    <div className=' col-span-5 md:col-span-4'>
                        <Content />
                    </div>
                    <div className=''>
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
