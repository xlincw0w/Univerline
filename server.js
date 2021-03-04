const express = require('express')
const cors = require('cors')
const knex = require('knex')
const path = require('path')
const PORT = process.env.PORT || 3001
const db = require('./api/database')

require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api/profile', require('./api/Profile/profile'))

app.get('/api/connected', (req, res) => {
    res.json({ connected_to_api: true })
})

app.listen(PORT, function () {
    console.log(`Server listenning on port ${PORT}!\n`)
})
