import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <React.Fragment>
            <hr className='border-gray-200 ' />
            <div className='grid grid-rows h-34 '>
                <div className='flex flex-row justify-center mt-6 space-x-10'>
                    <div className='cursor-pointer '>
                        <FaFacebook className='transition rounded-2xl shadow-xl duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ' size={32} />
                    </div>
                    <div>
                        <IoLogoYoutube
                            className='cursor-pointer rounded-xl  shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                            size={32}
                        />
                    </div>
                    <div className='cursor-pointer rounded-xl shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                        <RiInstagramFill classsName='' size={32} />
                    </div>
                </div>

                <div className=''>
                    <small className='pt-2 hidden sm:block text-lg text-center font-bebasNeue  '>
                        © 2021 <span className=' textanimate text-xl'>UniverLine</span>
                        <p className='inline italic'>. All Rights Reserved</p>
                    </small>
                </div>
            </div>

            <div className=' h-6 shadow-xl bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-800 '></div>
        </React.Fragment>
    )
}

export default Footer
