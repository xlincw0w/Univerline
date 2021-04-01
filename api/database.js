require('dotenv').config()
const knex = require('knex')

const { ConnectionString } = require('connection-string')
const cnObj = new ConnectionString(process.env.DATABASE_URL)

const db = knex({
    client: 'pg',
    connection: {
        host: cnObj.hostname,
        database: cnObj.path?.[0],
        user: cnObj.user,
        password: cnObj.password,
        ssl: { rejectUnauthorized: false },
    },
})

module.exports = db
