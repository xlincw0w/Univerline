import React, { Component } from 'react'
import me from './img/1.jpg'
import rcv from './img/2.jpg'
export default function messages() {
    return (
        <div className='flex flex-col space-y-4 p-3 overflow-y-scroll'>
            <div className='flex flex-col space-y-2 text-xs max-w-xs w-full mx-2 order-2 items-start'>
                <div>
                    <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'>Can be verified on any platform using docker</span>
                </div>
            </div>
            <img src={rcv} alt='My profile' className='w-6 h-6 rounded-full order-1' />

            <div className='flex items-end justify-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white '>
                            Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks
                        </span>
                    </div>
                </div>
                <img src={me} alt='My profile' className='w-6 h-6 rounded-full order-2' />
            </div>
            <div className='flex items-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'>
                            Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :)
                        </span>
                    </div>
                </div>
                <img src={rcv} alt='My profile' className='w-6 h-6 rounded-full order-1' />
            </div>
            <div className='flex items-end justify-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block bg-blue-600 text-white '>Are you using sudo?</span>
                    </div>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white '>
                            Run this command sudo chown -R `whoami` /Users/John/.npm-global/ then install the package globally without using sudo
                        </span>
                    </div>
                </div>
                <img src={me} alt='My profile' className='w-6 h-6 rounded-full order-2' />
            </div>
            <div className='flex items-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600'>
                            It seems like you are from Mac OS world. There is no /Users/ folder on linux 😄
                        </span>
                    </div>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'>
                            I have no issue with any other packages installed with root permission globally.
                        </span>
                    </div>
                </div>
                <img src={rcv} alt='My profile' className='w-6 h-6 rounded-full order-1' />
            </div>
            <div className='flex items-end justify-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white '>
                            yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem
                        </span>
                    </div>
                </div>
                <img src={me} alt='My profile' className='w-6 h-6 rounded-full order-2' />
            </div>
            <div className='flex items-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600'>I get the same error on Arch Linux (also with sudo)</span>
                    </div>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600'>I also have this issue, Here is what I was doing until now: #1076</span>
                    </div>
                </div>
                <img src={rcv} alt='My profile' className='w-6 h-6 rounded-full order-1' />
            </div>
        </div>
    )
}
