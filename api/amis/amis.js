const express = require('express')
const { whereIn } = require('../database')
const router = express.Router()
const db = require('../database')

router.route('/add/amis/').post((req, res) => {
    const data = req.body

    db('amis')
        .insert({
            id_user: data.id_user,
            id_ami: data.id_ami,
            confirm: data.confirm,
        })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

router.route('/get/amis/:id?').get((req, res) => {
    const id_u = req.params.id

    db('users')
        .whereIn('id_user', db('amis').where({ id_user: id_u, confirm: true }).select('id_ami'))
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            res.json([])
        })
})

router.route('/update/amis/:id?').put((req, res) => {
    const id_etu = req.params.id
    data = req.body.id_user

    db('amis')
        .where({ id_ami: id_etu, id_user: data })
        .update({
            confirm: true,
        })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

router.route('/delete/amis/:id?').delete((req, res) => {
    const id = req.params.id
    data = req.body.id_user
    db('amis')
        .where({ id_ami: id, id_user: data })
        .delete('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

module.exports = router
