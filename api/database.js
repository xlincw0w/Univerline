require('dotenv').config()
const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
        ssl: { rejectUnauthorized: false },
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
})

module.exports = db
