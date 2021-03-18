const express = require('express')
const router = express.Router()
const db = require('../database')

router.route('/isFriend/ens').post((req, res) => {
    const { id_user, id_collegue } = req.body

    if (id_user && id_collegue) {
        db('collegue')
            .select('confirm')
            .where({ id_user, id_collegue: id_collegue })
            .then((row) => {
                if (row.length > 0) {
                    if (row[0].confirm) {
                        res.json({ friend: true })
                    } else {
                        res.json({ friend: false, pending: true })
                    }
                } else {
                    res.json({ friend: false })
                }
            })
            .catch((err) => {
                console.log(err)
                res.json({ friend: false })
            })
    }
})

//ajouter un collegue
router.route('/add/collegue/').post((req, res) => {
    const data = req.body

    db('collegue')
        .insert({
            id_user: data.id_user,
            id_collegue: data.id_collegue,
            confirm: data.confirm,
            receiver: data.receiver,
        })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

router.route('/get/pending/ens/:id?').get((req, res) => {
    const id_u = req.params.id

    db('users')
        .whereIn('id_user', db('collegue').where({ id_collegue: id_u, confirm: false, receiver: false }).select('id_user'))
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            res.json([])
        })
})

router.route('/confirm/collegue/').post((req, res) => {
    const id_user = req.body.id_user
    const id_collegue = req.body.id_collegue

    db('collegue')
        .where({ id_user: id_user, id_collegue: id_collegue })
        .update({ confirm: true })
        .then((resp) => {
            res.json({ added: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ added: false })
        })
})

//recuperer les nom des collegue
router.route('/get/collegue/ens/:id?').get((req, res) => {
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

router.route('/delete/collegue/').post((req, res) => {
    const data = req.body

    db('collegue')
        .where({
            id_user: data.id_user,
            id_collegue: data.id_collegue,
        })
        .del()
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
