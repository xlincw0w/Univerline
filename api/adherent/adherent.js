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

//4SUPPRIMER UN ADHERENT
router.route('/delete/adherent/:id?').delete((req, res) => {
    const id_etu = req.params.id
    db('adherant')
        .where('id_etu', id_etu)
        .delete('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

//modifier un adherent avec son id
router.route('/update/adherent/:id?').post((req, res) => {
    console.log('am here')
    const id = req.params.id
    const confirm = true

    db('adherant')
        .where('id_etu', id)
        .update({
            confirm,
        })
        .then((resp) => {
            console.log(resp)
            res.json({ updated: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ updated: false })
        })
})

module.exports = router
