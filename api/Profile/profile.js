const express = require('express')
const router = express.Router()
const db = require('../database')

router.route('/get/:id').get((req, res) => {
    const id = req.params.id

    if (id.substr(0, 3) === 'ens') {
        db('enseignant')
            .select('*')
            .then((rows) => {
                res.json(rows)
            })
            .catch((err) => {
                console.log(err)
                res.json({ err: true })
            })
    } else if (id.substr(0, 3) === 'etu') {
        db('etudiant')
            .select('*')
            .then((rows) => {
                res.json(rows)
            })
            .catch((err) => {
                console.log(err)
                res.json({ err: true })
            })
    }
})

router.route('/update/:id?').post((req, res) => {
    const data = req.body
    console.log(data)
})

module.exports = router
