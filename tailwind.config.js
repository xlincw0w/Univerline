require('dotenv').config()

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'DEVELOPMENT' ? false : true,
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                image: "url('../Layout/Home/img/bg.png')",
                feather: "url('../Assets/Images/bgfeather1.jpg')",
            }),
            fontFamily: {
                openSans: ['OpenSans'],
            },
            spacing: {
                128: '32rem',
                144: '36rem',
                192: '48rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
