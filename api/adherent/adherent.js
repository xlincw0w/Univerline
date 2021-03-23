const express = require('express')
const router = express.Router()
const db = require('../database')
const moment = require('moment')

//1 AJOUTER UN ADHERENT a une classe X
router.route('/add/adherent/').post((req, res) => {
    const data = req.body

    db('adherant')
        .insert({
            id_classe: data.id_classe,
            id_etu: data.id_etu,
            date_adherance: moment().format(),
            confirm: false,
        })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

router.route('/confirm/adherent/').post((req, res) => {
    const id_etu = req.body.id_etu
    const id_classe = req.body.id_classe

    db('adherant')
        .where({ id_etu: id_etu, id_classe: id_classe })
        .update({ confirm: true })
        .then((resp) => {
            res.json({ added: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ added: false })
        })
})

// 2 RECUPERER La table ADHERENTS
router.route('/get/adherent').get((req, res) => {
    db('adherant')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json([])
        })
})

//3/RECUPERER les adherent de classe
router.route('/get/adherent/:id?').get((req, res) => {
    const id_cl = req.params.id

    db('adherant')
        .select('*')
        .where('id_classe', id_cl)
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json([])
        })
})

router.route('/get/pending/adh/:id').get((req, res) => {
    const id = req.params.id
    db('adherant')
        .select('*')
        .leftJoin('classe', 'classe.id_classe', ' adherant.id_classe')
        .leftJoin('users', 'users.id_user', 'adherant.id_etu')
        .where({ id_ens: id, confirm: false })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json([])
        })
})

//4SUPPRIMER UN ADHERENT
router.route('/delete/adherent/').post((req, res) => {
    const data = req.body

    db('adherant')
        .where({ id_etu: data.id_etu, id_classe: data.id_classe })
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
