import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { HiShare } from 'react-icons/hi'
import { FaComments } from 'react-icons/fa'
import Comments from './comments'

const Skeleton = () => {
    const ProfSkeleton = ({ id }) => {
        const [loadComment, setLoadComment] = useState(false)
        return (
            <div id={id} className='w-120 2xl:w-144 h-auto bg-gray-100 shadow-2xl mx-auto rounded-lg mb-20'>
                <div className='h-1/4 bg-gradient-to-r from-purple-400 to-purple-600 shadow-xl rounded-xl'>
                    <div className='grid grid-cols-5'>
                        <div className='mx-auto my-4 border-2 border-gray-100 rounded-full shadow-xl'>
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
                <div className='h-auto'>
                    <div className='h-auto'>
                        <div className='mt-2'>
                            <p className='text-gray-500 text-sm'>09 - 03 - 2021 12:23 h</p>
                        </div>
                        <div className='mt-10 mb-10 px-10 text-left'>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                        </div>
                    </div>
                    <div className='text-gray-600 border-t-2 border-gray-400'>
                        <div className='mt-4 flex justify-start h-10'>
                            <div
                                onClick={() => {
                                    setLoadComment(!loadComment)
                                }}
                                className='inline-block mx-4 cursor-pointer'>
                                <FaComments className='inline' />
                                <p className='text-gray-500 text-sm inline ml-3'>Commenter</p>
                            </div>
                            <div className='inline-block mx-4 cursor-pointer'>
                                <HiShare className='inline' />
                                <p className='text-gray-500 text-sm inline ml-3'>Partager</p>
                            </div>
                        </div>
                    </div>
                    {loadComment && (
                        <div className='w-full h-auto bg-gray-100 shadow rounded'>
                            <input
                                type='text'
                                className='focus:ring-indigo-500focus:border-indigo-500 block w-full lg:w-2/3 2xl:w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                                placeholder='Ecrivez un commentaire !'
                            />
                            <div className='h-auto mx-auto mt-2 border-2 border-gray-200 shadow rounded' style={{ width: '95%' }}>
                                <div className='w-full h-auto'>
                                    <Comments id={0} />
                                    <Comments id={1} />
                                    <Comments id={2} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    const StudSkeleton = ({ id }) => {
        const [loadComment, setLoadComment] = useState(false)
        return (
            <div id={id} className='w-120 2xl:w-144 h-auto bg-gray-100 shadow-2xl mx-auto rounded-lg mb-20'>
                <div className='h-1/4 bg-gradient-to-r from-green-600 to-green-400 shadow-xl rounded-xl'>
                    <div className='grid grid-cols-5'>
                        <div className='mx-auto my-4 border-2 border-gray-100 rounded-full shadow-xl'>
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
                <div className='h-auto'>
                    <div className='h-auto'>
                        <div className='mt-2'>
                            <p className='text-gray-500 text-sm'>06 - 11 - 2020 11:23 h</p>
                        </div>
                        <div className='mt-10 mb-10 px-10 text-left'>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                            <p className='text-gray-600 text-lg'>Bonjour a tous, le cours de demain sera reporté a la semaine prochaine a l'amphi a1 de b3 b5</p>
                        </div>
                    </div>
                    <div className='text-gray-600 border-t-2 border-gray-400'>
                        <div className='mt-4 flex justify-start h-10'>
                            <div onClick={() => setLoadComment(!loadComment)} className='inline-block mx-4 cursor-pointer'>
                                <FaComments className='inline' />
                                <p className='text-gray-500 text-sm inline ml-3'>Commenter</p>
                            </div>
                            <div className='inline-block mx-4 cursor-pointer'>
                                <HiShare className='inline' />
                                <p className='text-gray-500 text-sm inline ml-3'>Partager</p>
                            </div>
                        </div>
                    </div>
                    {loadComment && (
                        <div className='w-full h-auto bg-gray-100 shadow rounded'>
                            <input
                                type='text'
                                className='focus:ring-indigo-500focus:border-indigo-500 block w-full lg:w-2/3 2xl:w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                                placeholder='Ecrivez un commentaire !'
                            />
                            <div className='h-auto mx-auto mt-2 border-2 border-gray-200 shadow rounded' style={{ width: '95%' }}>
                                <div className='w-full h-auto'>
                                    <Comments id={0} />
                                    <Comments id={1} />
                                    <Comments id={2} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className='pt-5 grid grid-cols-2'>
            <div>
                <StudSkeleton id={0} />
                <StudSkeleton id={1} />
                <StudSkeleton id={2} />
                <StudSkeleton id={3} />
                <StudSkeleton id={4} />
            </div>
            <div>
                <ProfSkeleton id={1} />
                <ProfSkeleton id={2} />
                <ProfSkeleton id={3} />
                <ProfSkeleton id={4} />
                <ProfSkeleton id={5} />
            </div>
        </div>
    )
}

export default Skeleton