const express = require('express')
const router = express.Router()
const db = require('../database')
const moment = require('moment')
const { leftJoin } = require('../database')

//ajouter une classe avec id d'un enseignant
router.route('/add/classe/:id?').post((req, res) => {
    const id_ens = req.params.id
    const data = req.body

    db('classe')
        .insert({
            id_classe: data.id_classe,
            id_ens: id_ens,
            libelle_classe: data.libelle_classe,
            date_creation: moment().format(),
        })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

//recuperer les classe
router.route('/get/classe').get((req, res) => {
    db('classe')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

//modifier une classe
router.route('/update/classe/:id?').post((req, res) => {
    const id_classe = req.params.id
    //const {libelle,id} = req.body
    libelle = req.body.libelle_classe
    id = req.body.id_ens

    db('classe')
        .where({ id_classe: id_classe, id_ens: id })
        .update({
            libelle_classe: libelle,
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

//recuperer les classe d un enseignat X
router.route('/get/classe/:id?').get((req, res) => {
    const id = req.params.id

    db('classe')
        .where({ id_ens: id })
        .select('*')
        .then((resp) => {
            res.json(resp)
        })
        .catch((err) => {
            console.log(err)
            res.json([])
        })
})

router.route('/get/classe/etu/:id?').get((req, res) => {
    const id = req.params.id

    db('adherant')
        .select('*')
        .leftJoin('classe', 'classe.id_classe', 'adherant.id_classe')
        .where('id_etu', id)
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json([])
        })
})

//supprimer  une classe
router.route('/delete/classe/:id?').delete((req, res) => {
    const id = req.params.id
    db('classe')
        .where({ id_classe: id })
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
