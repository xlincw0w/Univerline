import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <React.Fragment>
            <div className='bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 h-full text-black-400 shadow-2xl select-none shadow'>
                <div className='grid grid-cols-1 h-full'>
                    <div className='border-t-4 borderanimate rounded'>
                        <div className='flex'>
                            <p className='text-1xl mx-auto pt-8 textanimate '>Logo</p>
                        </div>
                    </div>
                    <div className='text-center font-semibold text-xl font-bebasNeue pb-4'>
                        <h2>Pour nous contacter : </h2>
                    </div>
                    <div className='grid grid-cols-2 divide-x divide-opacity-10 divide-white text-center'>
                        <div className='flex flex-cols items-center justify-end p-4'>
                            <AiOutlineMail size={30} />
                            <p className='pl-2'>univerline@gmail.com</p>
                        </div>
                        <div className='text-left pl-2 flex flex-cols items-center space-x-4 '>
                            <div>
                                <AiOutlineFacebook size={30} />
                            </div>
                            <div>
                                <AiOutlineGithub size={30} />
                            </div>
                            <div>
                                <AiOutlineInstagram size={30} />
                            </div>
                        </div>
                    </div>

                    <div className='h-full'>
                        <div className='w-full'>
                            <div className='w-max mx-auto'>
                                <div className='mb-2 sm:mb-10'>
                                    <small className='hidden sm:block text-lg text-center font-bebasNeue  '>
                                        © 2021 <span className='textanimate'>UniverLine</span>
                                        <p className='inline'>. All Rights Reserved</p>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
