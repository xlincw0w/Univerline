import React from 'react'
import Particles from 'react-particles-js'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'

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
            value: 200,
            density: {
                enable: true,
                value_area: 900,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#ffffff',
            },
            polygon: {
                nb_sides: 20,
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
            speed: 5,
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
                enable: true,
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
            <div className='bg'>
                <Particles className='particleCanvas' params={params}></Particles>
                <div className='flex flex-col text-gray-50'>
                    <div className='mx-auto'>
                        <h1>UniverLine</h1>
                    </div>
                    <div className='flex flex-col mt-32 ml-12'>
                        <div>
                            <h1>Rejoignez notre communauté estudiantine</h1>
                        </div>
                        <ul>
                            <li>texte texte texte texte texte texte</li>
                            <li>texte texte texte texte texte texte</li>
                            <li>texte texte texte texte texte texte</li>
                        </ul>
                        <div className=''>
                            <button className='mt-52 ml-12 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-full'>
                                inscription
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div data-aos='fade-right'>
                    <img src={img1} alt='img1' />
                </div>
                <div className='flex flex-col mt-40 mx-auto'>
                    <div>
                        <h1 className='ml-24'>Grand titre</h1>
                    </div>
                    <div>
                        <p>texte texte texte texte texte texte texte</p>
                    </div>
                    <div>
                        <button className='mt-52 ml-12 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-full'>
                            inscription
                        </button>
                    </div>
                </div>

                <div className='flex flex-col mx-auto mt-40'>
                    <div>
                        <h1>Grand titre</h1>
                    </div>
                    <div>
                        <p>texte texte texte texte texte texte texte</p>
                    </div>
                    <div>
                        <button className='mt-52 ml-12 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-full'>
                            inscription
                        </button>
                    </div>
                </div>
                <div data-aos='fade-left'>
                    <img src={img2} alt='img2' />
                </div>

                <div data-aos='fade-right'>
                    <img src={img3} alt='img3' />
                </div>
                <div className='flex flex-col mx-auto mt-40'>
                    <div>
                        <h1>Grand titre</h1>
                    </div>
                    <div>
                        <p>texte texte texte texte texte texte texte texte</p>
                    </div>
                    <div>
                        <button className='mt-52 ml-12 bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-full'>
                            inscription
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
