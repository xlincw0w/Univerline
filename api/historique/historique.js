const express = require('express')
const router = express.Router()
const db = require('../database')
const moment = require('moment')


router.route('/add/historique/:id?').post((req, res) => {
        id_user= req.params.id

    db('historique')
        .insert({
         id_user:id_user,
         id_contact:req.body.id_contact,
         createAt:moment().format()
        })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
router.route('/get/historique/:id?').get((req, res) => {
    id_user= req.params.id

db('historique')
.select('*')
.where('id_user', id_user)
    .then((rows) => {
        res.json(rows)
    })
    .catch((err) => {
        console.log(err)
        res.json({ err: true })
    })
})
module.exports = router