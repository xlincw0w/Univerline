const express = require('express')
const cors = require('cors')
const knex = require('knex')
const path = require('path')
const PORT = process.env.PORT || 3001

require('dotenv').config()

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

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/api/connected', (req, res) => {
    res.json({ connected_to_api: true })
})

app.get('/api/get/users', (req, res) => {
    db('users')
        .select('*')
        .then((rows) => {
            console.log(rows)
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.post('/api/add/user', (req, res) => {
    const data = req.body

    db('users')
        .insert({
            user_id: data.user_id,
            username: data.username,
        })
        .then((response) => {
            console.log(response)
            res.json({ updated: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ updated: false })
        })
})

app.listen(PORT, function () {
    console.log(`Server listenning on port ${PORT}!\n`)
})
