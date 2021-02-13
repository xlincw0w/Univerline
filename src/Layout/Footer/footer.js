import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <React.Fragment>
            <div className='bg-gray-50 h-96 text-black-400 shadow-2xl select-none shadow'>
                <div className='grid grid-cols-1 h-full'>
                    <div className='border-t-4 borderanimate rounded'>
                        <div className='flex'>
                            <p className='text-4xl mx-auto pt-10 textanimate'>Logo</p>
                        </div>
                    </div>
                    <div className='h-full'></div>
                    <div className='h-full'>
                        <div className='w-full'>
                            <div className='w-max mx-auto'>
                                <div className='mb-2 sm:mb-10'>
                                    <small className='hidden sm:block text-xl text-center'>
                                        © 2020 <span className='textanimate'>Réseau social</span>
                                        <p className='inline'>. All Rights Reserved</p>
                                    </small>
                                </div>
                                <div className='text-center'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
