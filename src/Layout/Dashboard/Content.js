import React from 'react'
import Feed from './Feed/feed'
import Post from './Post/post'
import Feature1 from './Feature1'
import Feature2 from './Feature2'

export default function Content() {
    const [change, setChange] = React.useState(false)

    return (
        <div className='mx-auto center shadow-xl w-6/6 md:w-11/12 '>
            <div className='relative visible md:hidden'>
                <button onClick={() => setChange(!change)} className='relative p-2  bg-white rounded-md  focus:outline-none'>
                    <svg className='w-5 h-5 text-gray-800 dark:text-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                        <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                        />
                    </svg>
                </button>

                {change && (
                    <div className='absolute z-20 right-0 w-96 py-2 mt-2 bg-white rounded-md shadow-xl '>
                        <Feature1 className='mx-auto' />
                        <Feature2 />
                    </div>
                )}
            </div>
            <Post />
            <Feed />
        </div>
    )
}
