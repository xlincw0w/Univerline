require('dotenv').config()
console.log(process.cwd())
module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'DEVELOPMENT' ? false : true,
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        divideWidth: {
            DEFAULT: '3px',
            0: '0',
            2: '2px',
            3: '3px',
            4: '4px',
            6: '6px',
            8: '8px',
        },
        extend: {
            backgroundImage: (theme) => ({
                image: "url('../Layout/Home/img/bg.png')",
            }),
            fontFamily: {
                openSans: ['OpenSans'],
                bebasNeue: ['BebasNeue'],
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
