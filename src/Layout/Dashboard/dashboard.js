import React from 'react'
import Content from './Content'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Backdrop from '@material-ui/core/Backdrop'
import { useSelector } from 'react-redux'
import Inscription from '../Inscription/inscription'
import Loader from 'react-loader-spinner'

export default function Dashboard() {
    const uncomplete = useSelector((state) => state.AuthReducer.uncomplete)
    const user = useSelector((state) => state.AuthReducer.user)
    const loading = useSelector((state) => state.FeedReducer.loading)

    return (
        <div className='h-auto bg-gradient-to-r from-green-400 to-purple-700'>
            <Backdrop open={loading} style={{ zIndex: 10 }}>
                <Loader type='Circles' color='#00BFFF' height={120} width={120} />
            </Backdrop>
            <div className='w-full h-full bg-gray-200 bg-opacity-60'>
                {uncomplete && <Inscription complete='whoyouare' />}
                {user.id && user.user_type && (
                    <div className='grid grid-cols-5 h-full'>
                        <div className='col-span-5 md:col-span-4'>
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
                )}
            </div>
        </div>
    )
}
