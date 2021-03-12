const express = require('express')
const router = express.Router()
const db = require('../database')

router.route('/:id').get((req, res) => {
    const id = req.params.id

    db('users')
        .select('*')
        .where('id_user', id)
        .then((row) => {
            res.json(row[0])
        })
        .catch((err) => {
            res.json([])
        })
})

module.exports = router
