import React from 'react'
import me from '../img/1.jpg'
import rcv from '../img/2.jpg'
export default function messages() {
    return (
        <div className='flex flex-col space-y-4 p-3 '>
            <div className='flex flex-col space-y-2 text-xs max-w-xs w-full mx-2 order-2 items-start'>
                <div>
                    <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'>
                        Je vous en prie, n'hésitez pas à me poser des questions si vous en avez.
                    </span>
                </div>
            </div>
            <img src={rcv} alt='My profile' className='w-6 h-6 rounded-full order-1' />

            <div className='flex items-end justify-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white '>Bonjour, est-il possible de me passser les cours</span>
                    </div>
                </div>
                <img src={me} alt='My profile' className='w-6 h-6 rounded-full order-2' />
            </div>
            <div className='flex items-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'>Oui biensur, c'est quoi votre spécialité ?</span>
                    </div>
                </div>
                <img src={rcv} alt='My profile' className='w-6 h-6 rounded-full order-1' />
            </div>
            <div className='flex items-end justify-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block bg-blue-600 text-white '>Je suis en master 2 ISI</span>
                    </div>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white '>Je cherche les cours de RI</span>
                    </div>
                </div>
                <img src={me} alt='My profile' className='w-6 h-6 rounded-full order-2' />
            </div>
            <div className='flex items-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600'>Entendu</span>
                    </div>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'>
                            Donnez moi un instant et je vous transmet tout ce qu'il faut
                        </span>
                    </div>
                </div>
                <img src={rcv} alt='My profile' className='w-6 h-6 rounded-full order-1' />
            </div>
            <div className='flex items-end justify-end'>
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end'>
                    <div>
                        <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white '>D'accord, je vous remercie</span>
                    </div>
                </div>
                <img src={me} alt='My profile' className='w-6 h-6 rounded-full order-2' />
            </div>
        </div>
    )
}
