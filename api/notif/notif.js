const express = require('express')
const router = express.Router()
const db = require('../database')

router.route('/get/notif').get((req, res) => {
    const type_not = req.params.type
    db('notifications')
        .select('*')

        .where({ type: type_not })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
