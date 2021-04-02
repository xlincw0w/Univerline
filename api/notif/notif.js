const express = require('express')
const router = express.Router()
const db = require('../database')

router.route('/get/notif/:id?').get((req, res) => {
    const id_u=req.params.id
    const type_not = req.body.type
    db('users')
        .select('nom','prenom')

        .whereIn('id_user', (db('notifications').select('s_user_id').where({r_user_id : id_u }) ))
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
module.exports = router

