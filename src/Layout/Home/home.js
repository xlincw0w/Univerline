import React from 'react'
import Particles from 'react-particles-js'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from './img/image1.png'
import img2 from './img/image2.png'
import img3 from './img/image3.png'
import { useHistory } from 'react-router-dom'

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of data-aos as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by data-aos-* attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
})

export default function Home() {
    const history = useHistory()
    return (
        <div>
            <div className=' bg-image h-screen bg-cover bg-center  bg-fixed'>
                {/* <div className='grid grid-cols-2  space-x-96'> */}
                <div className='flex justify-end p-4'>
                    <button className='transition duration-300 ease-in-out bg-yellow-400 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110  text-xl rounded-full p-4 px-8 py-2 '>
                        Connexion
                    </button>
                </div>
                <div className='p-2 pt-20'>
                    <div className='  border-4 border-opacity-50 border-transparent shadow-xl rounded p-4 w-2/5'>
                        <ul className='font-medium font-openSans  text-center'>
                            <li className='text-4xl text-blue-300 font-extrabold text-opacity-24 leading-normal mx-auto'>
                                <span className='text-5xl'>R</span>EJOINEZ UNIVERLINE
                            </li>
                            <li className='text-4xl text-blue-300 font-extrabold text-opacity-24 leading-normal mx-auto pb-12'> DES MAINTENANT</li>
                            {/* <li className='text-2xl font-bold leading-loose mx-auto'>restez connecter à votre communauté étudiante </li> */}
                            <li className='text-2xl font-extrabold leading-loose mx-auto text-gray-300'>le réseau social où vous pouvez discuter,</li>
                            <li className='text-2xl font-extrabold leading-loose mx-auto text-gray-300'>avoir accès à vos cours, et bien plus encore !</li>
                        </ul>

                        <div className='  flex justify-end mx-auto pt-12'>
                            <button
                                onClick={() => {
                                    history.push('/inscription')
                                }}
                                className='transition duration-300 ease-in-out bg-yellow-400 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110 p-4 text-xl rounded-full mx-auto '>
                                Rejoignez-nous !
                            </button>
                        </div>
                    </div>
                </div>

                {/* </div> */}
            </div>
            {/* <div className='bg bg-image bg-repeat-round'>
                <div className='flex flex-row-reverse  p-4'>
                    <button className='bg-yellow-400 hover:bg-yellow-400 text-gray-100 font-semibold shadow-lg py-2 px-4 border border-yellow-400  rounded-full'>connexion</button>
                </div>
                <div className='flex flex-col pt-12 '>
                    <div className='flex flex-col ml-20 rounded-lg shadow-2xl border-current mx-auto p-8 bg-gray-1000 border text-gray-100'>
                
                        <ul className='font-medium font-openSans leading-loose text-center'>
                            <li className='text-xl'>Rejognez dés maintenant notre communauté</li> <hr className='pb-4'></hr>
                            <li>Restez connecter à votre communauté étudiante </li>
                            <li>UniverLine est un réseau social où vous pouvez</li>
                            <li> échanger et avoir accès à vos cours, vos travaux,</li>
                            <li>votre vie, et bien plus encore !</li>
                        </ul>

                        <div className='pt-4 mx-auto'>
                            <button className='bg-yellow-400 hover:bg-yellow-400 text-gray-100 font-semibold  py-4 px-6 border border-yellow-400  rounded-full'>inscription</button>
                        </div>
                    </div>
                </div>
                <div className='chevron mt-28'></div>
            </div> */}
            <div className='grid grid-cols-2 gap-2 font-openSans'>
                <div data-aos='fade-right' data-aos-duration='1500'>
                    <img src={img1} alt='img1' />
                </div>
                <div className='flex flex-col mt-20  items-center justify-center'>
                    <div className=' p-4 text-2xl tracking-wider font-semibold'>
                        <h1>Découvrez le monde Universitaire</h1>
                        <br />
                    </div>
                    <div className='tracking-wider text-xl leading-loose'>
                        <p>gardez contact avec vos collegues de la faculté,</p>
                        <p>ou ceux d'autres établissements, conversez </p>
                        <p>en temps réel, c'est plus simple et plus rapide </p>
                    </div>
                    <div>
                        <button className='mt-20 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white font-medium  py-4 px-6 border border-yellow-400 hover:border-transparent rounded-full shadow-lg'>
                            Rejoignez-nous
                        </button>
                    </div>
                </div>

                <div className='flex flex-col mt-18 items-center justify-center'>
                    <div className=' p-4'>
                        <h1 className='tracking-wider text-2xl font-semibold'>Ne ratez plus vos cours</h1> <br />
                    </div>
                    <div className='tracking-wider text-xl leading-loose'>
                        <p>adherez aux classes où vous êtes </p>
                        <p>inscris, vos enseignants s'occuperons </p>
                        <p>de partager les ressources nécessaire</p>
                        <p className='text-center'>pour votre formation </p>
                    </div>
                    <div>
                        <button className='mt-20 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white font-medium  py-4 px-6 border border-yellow-400 hover:border-transparent rounded-full'>
                            Rejoignez-nous
                        </button>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-duration='1500'>
                    <img src={img2} alt='img2' />
                </div>

                <div data-aos='fade-right' data-aos-duration='1500'>
                    <img src={img3} alt='img3' />
                </div>
                <div className='flex flex-col mt-18 items-center justify-center'>
                    <div className=' p-4'>
                        <h1 className='tracking-wider text-2xl font-semibold'>Timeline</h1> <br />
                    </div>
                    <div className='tracking-wider text-xl leading-loose'>
                        <p>UniverLine vous tient à la une ! accédez</p>
                        <p> au fil d'actualité et aux dernières nouvelles </p>
                        <p> partagées; par vos collegues ou aux ressources</p>
                        <p className='text-center'> partagées par vos enseignants </p>
                    </div>
                    <div>
                        <button className=' mt-20 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white font-medium  py-4 px-6 border border-yellow-400 hover:border-transparent rounded-full'>
                            Rejoignez-nous
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
