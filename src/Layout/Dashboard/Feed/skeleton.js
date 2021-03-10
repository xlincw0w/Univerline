import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { HiShare } from 'react-icons/hi'
import { FaComments } from 'react-icons/fa'

const Skeleton = () => {
    const ProfSkeleton = () => (
        <div className='w-144 h-96 bg-gray-100 shadow-2xl mx-auto rounded-lg my-10 mr-20 '>
            <div className='h-1/4 bg-gradient-to-r from-purple-400 to-purple-600 shadow-xl rounded-xl'>
                <div className='grid grid-cols-5'>
                    <div className='mx-auto mt-3 border-2 border-gray-100 rounded-full shadow-xl'>
                        <Avatar
                            alt='Remy Sharp'
                            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            style={{ width: '4rem', height: '4rem' }}
                        />
                    </div>
                    <div className='col-span-4 flex'>
                        <div className='mt-5'>
                            <p className='text-gray-200 text-base'>Khaled Khazem</p>
                            <p className='text-gray-100 text-sm'>Enseignant</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-3/4'>
                <div className='h-56'>
                    <div className='mt-2'>
                        <p className='text-gray-500 text-sm'>09 - 03 - 2021 12:23 h</p>
                    </div>
                    <div className='mt-10 px-10'>
                        <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                    </div>
                </div>
                <div className='text-gray-600 border-t-2 border-gray-400'>
                    <div className='mt-4 flex justify-start'>
                        <div className='inline-block mx-4 cursor-pointer'>
                            <FaComments className='inline' />
                            <p className='text-gray-500 text-sm inline ml-3'>Commenter</p>
                        </div>
                        <div className='inline-block mx-4 cursor-pointer'>
                            <HiShare className='inline' />
                            <p className='text-gray-500 text-sm inline ml-3'>Partager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const StudSkeleton = () => (
        <div className='w-144 h-96 bg-gray-100 shadow-2xl mx-auto rounded-lg my-10 ml-20'>
            <div className='h-1/4 bg-gradient-to-r from-green-600 to-green-400 shadow-xl rounded-xl'>
                <div className='grid grid-cols-5'>
                    <div className='mx-auto mt-3 border-2 border-gray-100 rounded-full shadow-xl'>
                        <Avatar
                            alt='Remy Sharp'
                            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            style={{ width: '4rem', height: '4rem' }}
                        />
                    </div>
                    <div className='col-span-4 flex'>
                        <div className='mt-5'>
                            <p className='text-gray-200 text-base'>Khaled Khazem</p>
                            <p className='text-gray-100 text-sm'>Etudiant</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-3/4'>
                <div className='h-56'>
                    <div className='mt-2'>
                        <p className='text-gray-500 text-sm'>06 - 11 - 2020 11:23 h</p>
                    </div>
                    <div className='mt-10 px-10'>
                        <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                    </div>
                </div>
                <div className='text-gray-600 border-t-2 border-gray-400'>
                    <div className='mt-4 flex justify-start'>
                        <div className='inline-block mx-4 cursor-pointer'>
                            <FaComments className='inline' />
                            <p className='text-gray-500 text-sm inline ml-3'>Commenter</p>
                        </div>
                        <div className='inline-block mx-4 cursor-pointer'>
                            <HiShare className='inline' />
                            <p className='text-gray-500 text-sm inline ml-3'>Partager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <StudSkeleton />
            <ProfSkeleton />
            <ProfSkeleton />
            <StudSkeleton />
            <StudSkeleton />
            <ProfSkeleton />
            <StudSkeleton />
            <ProfSkeleton />
            <StudSkeleton />
        </div>
    )
}

export default Skeleton
