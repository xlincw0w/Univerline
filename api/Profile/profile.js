const express = require('express')
const router = express.Router()
const db = require('../database')

router.route('/update/').post((req, res) => {
    const data = req.body

    console.log(data)

    db('users')
        .update({ ...data })
        .where({ id_user: data.id_user })
        .then((resp) => {
            console.log(resp)
            res.json(resp)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.route('/:id').get((req, res) => {
    const id = req.params.id

    db('users')
        .select('*')
        .where('id_user', id)
        .then((row) => {
            row[0] ? res.json(row[0]) : res.json([])
        })
        .catch((err) => {
            res.json([])
        })
})

module.exports = router
