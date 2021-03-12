const express = require('express')
const { ids } = require('webpack')
const router = express.Router()
const db = require('../database')

//ajouter un collegue
router.route('/add/collegue/').post((req, res) => {
    const data = req.body

    db('collegue')
        .insert({
            id_user: data.id_user,
            id_collegue: data.id_collegue,
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

//recuperer les nom des collegue
router.route('/get/collegue/:id?').get((req, res) => {
    const id_e = req.params.id

    db('users')
        .whereIn('id_user', db('collegue').where({ id_user: id_e, confirm: true }).select('id_collegue'))
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json([])
        })
})
//supprimer un collegue
router.route('/delete/collegue/:id?').delete((req, res) => {
    const id = req.params.id
    data = req.body.id_user
    db('collegue')
        .where({ id_collegue: id, id_user: data })
        .delete('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

//confirmation  de l ajout
router.route('/update/collegue/:id?').put((req, res) => {
    const id_ens = req.params.id
    data = req.body.id_user
    db('collegue')
        .where({ id_collegue: id_ens, id_user: data })
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

module.exports = router
