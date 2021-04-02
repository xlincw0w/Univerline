const express = require('express')
const router = express.Router()
const db = require('../database')

router.route('/get/notif/:id?').get((req, res) => {
    const id_user=req.params.id
    const type_not = req.body.type
    db('notifications')
        .select('*')

        .where({ type: type_not,r_user_id:id_user})
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
module.exports = router

