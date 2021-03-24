import React, { useEffect } from 'react'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from './img/image1.png'
import img2 from './img/image2.png'
import img3 from './img/image3.png'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ResetStateSignup } from '../../store/signup/signupReducer'
import { ResetAuthState } from '../../store/auth/auth'
import Footer from '../Footer/newFooter'

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
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ResetStateSignup())
        dispatch(ResetAuthState())
    }, [])

    return (
        <div>
            <div>
                <div className='bg-font md:bg-image h-screen  bg-cover bg-center bg-fixed'>
                    <div className="invisible md:visible">
                    <div className='custom-shape-divider-bottom-1614867478 '>
                        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                            <path
                                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                                className='shape-fill'></path>
                        </svg>
                    </div>
                    </div>
                    

                    <div className='flex justify-center md:flex md:justify-end p-4'>
                        <button
                            onClick={() => {
                                history.push('/auth')
                            }}
                            className=' focus:outline-none transition duration-300 ease-in-out bg-yellow-400 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110  text-xl rounded-full p-4 px-8 py-2 '>
                            Connexion
                        </button>
                    </div>
                    <div className='md:py-10 '>
                        <div className=' border-4 border-opacity-50 border-transparent shadow-xl rounded p-4 w-full md:w-2/5  '>
                            <ul className='font-medium font-openSans text-center '>
                                <li className='text-2xl md:text-4xl text-blue-300 font-extrabold text-opacity-24 leading-normal mx-auto'>
                                    <div>
                                        <span className='text-5xl font-bebasNeue'>R</span>EJOIGNEZ UNIVERLINE
                                    </div>
                                </li>
                                <li className='text-2xl md:text-4xl text-blue-300 font-extrabold text-opacity-24 leading-normal mx-auto pb-12'> DES MAINTENANT</li>

                                <li className='text-2xl font-extrabold leading-loose mx-auto text-gray-300'>le réseau social où vous pouvez discuter,</li>
                                <li className='text-2xl font-extrabold leading-loose mx-auto text-gray-300'>avoir accès à vos cours, et bien plus encore</li>
                            </ul>

                            <div className='  flex justify-end mx-auto md:pt-12'>
                                <button
                                    onClick={() => {
                                        history.push('/inscription')
                                    }}
                                    className=' focus:outline-none transition duration-300 ease-in-out bg-yellow-400 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110 p-4 text-base md:text-xl rounded-full mx-auto '>
                                    Rejoignez-nous !
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* deuxième partie*/}
                <div className='hidden md:visible md:grid md:grid-cols-2 gap-2 font-openSans'>
                    
                    <div className='flex justify-center' data-aos='fade-right' data-aos-duration='1500'>
                        <img src={img1} alt='img1' />
                    </div>
                    <div className='flex flex-col mt-20 items-center justify-center'>
                        <div className=' p-4  text-xl md:text-3xl tracking-wider font-semibold font-bebasNeue'>
                            <h1>Découvrez le monde Universitaire</h1>
                            <br />
                        </div>
                        <div className='tracking-wider text-base md:text-xl leading-loose'>
                            <p className='pl-8 md:pl-0'>gardez contact avec vos amis de la faculté,</p>
                            <p className='pl-8'>conversez en temps réel, c'est plus </p>
                            <p className='pl-8 md:text-center'>simple et plus rapide </p>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    history.push('/inscription')
                                }}
                                className='focus:outline-none mt-20 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white font-medium  py-4 px-6 border border-yellow-400 hover:border-transparent rounded-full '>
                                Rejoignez-nous
                            </button>
                        </div>
                    </div>   
                    <div className='invisible md:visible flex flex-col items-center justify-center'>
                        <div className='pl-10'>
                            <div>
                                <h1 className='tracking-wider text-xl md:text-2xl md:text-3xl font-semibold font-bebasNeue p-4'>Ne ratez plus vos cours</h1> <br />
                            </div>
                            <div className='tracking-wider text-base md:text-xl leading-loose'>
                                <p>adherez aux classes où vous êtes inscris </p>
                                <p> ainsi vous aurez accès aux publications </p>
                                <p className='pl-0 md:text-center'> de vos enseignant</p>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    history.push('/inscription')
                                }}
                                className=' focus:outline-none mt-16 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white font-medium  py-4 px-6 border border-yellow-400 hover:border-transparent rounded-full'>
                                Rejoignez-nous
                            </button>
                        </div>
                    </div>
                    <div className='invisible md:visible flex justify-center mt-12 md:mt-0' data-aos='fade-left' data-aos-duration='1500'>
                        <img src={img2} alt='img2' />
                    </div>

                    <div className='invisible md:visible flex justify-center' data-aos='fade-right' data-aos-duration='1500'>
                        <img src={img3} alt='img3' />
                    </div>
                    <div className='invisible md:visible flex flex-col mt-18 items-center justify-center'>
                        <div>
                            <h1 className='tracking-wider text-xl md:text-3xl font-semibold font-bebasNeue p-4'>Timeline</h1> <br />
                        </div>
                        <div className='tracking-wider text-base md:text-xl leading-loose'>
                            <p className='pl-8 md:pl-0'>UniverLine vous tient à la une ! accédez</p>
                            <p className='pl-8'> au fil d'actualité et aux ressources</p>
                            <p className='pl-8 md:text-center'> dont vous avez besoin</p>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    history.push('/inscription')
                                }}
                                className=' focus:outline-none mt-20 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white font-medium  py-4 px-6 border border-yellow-400 hover:border-transparent rounded-full'>
                                Rejoignez-nous
                            </button>
                        </div>
                    </div>
                </div>
                 {/* Deuxieme partie pour SM*/}
                <div className="">
                     {/* Pour sm: imaage2*/}
                     <div className='visible md:hidden flex justify-center mt-12 md:mt-0' data-aos='fade-left' data-aos-duration='1500'>
                        <img src={img2} alt='img2' />
                    </div>
                      {/* Pour sm: texte2*/}
                    <div className='visible md:hidden flex flex-col items-center justify-center'>
                        <div className='pl-10'>
                            <div>
                                <h1 className='tracking-wider text-xl md:text-2xl md:text-3xl font-semibold font-bebasNeue p-4'>Ne ratez plus vos cours</h1> <br />
                            </div>
                            <div className='tracking-wider text-base md:text-xl leading-loose'>
                                <p>adherez aux classes où vous êtes inscris </p>
                                <p> ainsi vous aurez accès aux publications </p>
                                <p className='pl-0 md:text-center'> de vos enseignant</p>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    history.push('/inscription')
                                }}
                                className=' focus:outline-none mt-16 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white font-medium  py-4 px-6 border border-yellow-400 hover:border-transparent rounded-full'>
                                Rejoignez-nous
                            </button>
                        </div>
                    </div>
                    {/* Pour sm: image3*/}
                    <div className='visible md:hidden flex justify-center' data-aos='fade-right' data-aos-duration='1500'>
                        <img src={img3} alt='img3' />
                    </div>
                    {/* Pour sm: texte3*/}
                    <div className='visible md:hidden flex flex-col mt-18 items-center justify-center'>
                        <div>
                            <h1 className='tracking-wider text-xl md:text-3xl font-semibold font-bebasNeue p-4'>Timeline</h1> <br />
                        </div>
                        <div className='tracking-wider text-base md:text-xl leading-loose'>
                            <p className='pl-8 md:pl-0'>UniverLine vous tient à la une ! accédez</p>
                            <p className='pl-8'> au fil d'actualité et aux ressources</p>
                            <p className='pl-8 md:text-center'> dont vous avez besoin</p>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    history.push('/inscription')
                                }}
                                className=' focus:outline-none mt-20 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white font-medium  py-4 px-6 border border-yellow-400 hover:border-transparent rounded-full'>
                                Rejoignez-nous
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}
