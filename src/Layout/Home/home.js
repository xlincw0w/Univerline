import React from 'react'
import Particles from 'react-particles-js'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from './img/image1.png'
import img2 from './img/image2.png'
import img3 from './img/image3.png'

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

const params = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#fff000',
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.8,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'repulse',
            },
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 1,
                // speed: 0.3,
            },
            repulse: {
                distance: 200,
            },
        },
    },
}

export default function Home() {
    return (
        <div>
            <div className='bg bg-gradient-to-r from-blue-600 to-blue-900'>
                <Particles className='particleCanvas' params={params}></Particles>
                <div className='flex flex-row-reverse  p-4'>
                    <button className='bg-yellow-400 hover:bg-yellow-400 text-gray-100 font-semibold shadow-lg py-2 px-4 border border-yellow-400  rounded-full'>connexion</button>
                    <div className='mx-auto text-gray-100 '>
                        <h1>UniverLine</h1>
                    </div>
                </div>
                <div className='flex flex-col pt-12 '>
                    <div className='flex flex-col ml-20 rounded-lg shadow-2xl border-current mx-auto p-8 bg-gray-1000 border text-gray-100'>
                        {/* <div>
                            <h1 className='text-2xl font-openSans'>La vie à la faculté</h1>
                        </div> */}
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
            </div>
            <div className='grid grid-cols-2 gap-2 font-openSans'>
                <div data-aos='fade-right' data-aos-duration='1500'>
                    <img src={img1} alt='img1' />
                </div>
                <div className='flex flex-col mt-20  items-center justify-center'>
                    <div className=' p-4 tracking-wider'>
                        <h1>Découvrez le monde Universitaire</h1>
                        <br />
                    </div>
                    <div className='tracking-wider leading-loose'>
                        <p>gardez avec vos collegues de la faculté,</p>
                        <p>ou ceux d'autres établissements, conversez </p>
                        <p>en temps réel, c'est plus simple et plus rapide </p>
                    </div>
                    <div>
                        <button className='mt-24 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-full shadow-lg'>
                            inscription
                        </button>
                    </div>
                </div>

                <div className='flex flex-col  mt-24 items-center justify-center'>
                    <div className=' p-4'>
                        <h1 className='tracking-wider'>Ne ratez plus vos cours</h1> <br />
                    </div>
                    <div className='tracking-wider leading-loose'>
                        <p>adherez aux classes où vous êtes </p>
                        <p>inscris, vos enseignants s'occuperons </p>
                        <p>de partager les ressources nécessaire</p>
                        <p>pour votre formation </p>
                    </div>
                    <div>
                        <button className='mt-24  bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-full'>
                            inscription
                        </button>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-duration='1500'>
                    <img src={img2} alt='img2' />
                </div>

                <div data-aos='fade-right' data-aos-duration='1500'>
                    <img src={img3} alt='img3' />
                </div>
                <div className='flex flex-col mt-20 items-center justify-center'>
                    <div className=' p-4'>
                        <h1 className='tracking-wider'>Timeline</h1> <br />
                    </div>
                    <div className='tracking-wider leading-loose'>
                        <p>UniverLine vous tient à la une ! accédez</p>
                        <p> au fil d'actualité et aux dernières nouvelles </p>
                        <p> partagées; par vos collegues ou aux ressources</p>
                        <p> partagées par vos enseignants </p>
                    </div>
                    <div>
                        <button className=' mt-24  bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-full'>
                            inscription
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
