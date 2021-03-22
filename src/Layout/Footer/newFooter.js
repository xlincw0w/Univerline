import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { RiInstagramFill } from 'react-icons/ri'
import iconFb from './iconFb/facebook.png'
import iconInsta from './iconInsta/instagram.png'
import iconYou from './iconYou/youtube.png'

const Footer = () => {
    return (
        <React.Fragment>
            <div className='grid grid-rows-2 gap-2 h-48 bg-regal-blue'>
                <div className=' mx-auto mt-6 grid grid-cols-3 gap-6 '>
                    <a href='https://www.facebook.com/UniverLine-111044151032005/' alt='facebook' target='_blank'>
                        <img
                            width='40px'
                            height='40px'
                            src={iconFb}
                            alt='facebook'
                            className='cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        />
                    </a>
                    <a href='https://www.instagram.com/univerlinee/' alt='instagram' target='_blank'>
                        <img
                            width='40px'
                            height='40px'
                            src={iconInsta}
                            alt='instagram'
                            className='cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        />
                    </a>
                    <a href='https://youtube.com/channel/UCv2B5Yl2rS1MEZbb0SU5kiQ' alt='youtube' target='_blank'>
                        <img
                            width='40px'
                            height='40px'
                            src={iconYou}
                            alt='youtube'
                            className='cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        />
                    </a>
                </div>
                <div className='text-center'>
                    <p className='text-gray-400 text-sm '>Site developpé par un groupe d'étudiants informatique</p>
                    <p className='text-gray-400 text-sm'>UMMTO dans un cadre pédagogique. </p>
                    <p className=' pt-5 text-xs text-gray-500  '>
                        {' '}
                        <span className='italic'>© 2021</span> Univerline
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
