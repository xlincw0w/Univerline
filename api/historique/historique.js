const express = require('express')
const router = express.Router()
const db = require('../database')
const moment = require('moment')
const { data } = require('autoprefixer')



router.route('/add/historique/').post((req, res) => {
    //id_user= req.params.id

    db('historique')
        .insert({
            id_user: req.body.id_user,
            id_contact: req.body.id_contact,
            createAt: moment().utc().format()
        })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
/*router.route('/get/historique/:id?').get((req, res) => {
    id_u= req.params.id
    //console.logˇ('his:',id_u)

    db('historique')
    .where('id_user', id_u)
    .select('id_contact')
    .orderBy('createAt','desc')
     .then((rows) => {
        console.log('cont',rows)
        res.json(rows)
    })
    .catch((err) => {
        console.log(err)
        res.json({ err: true })
    })
})*/
router.route('/get/historique/:id?').get((req, res) => {
    id_u = req.params.id
    //console.logˇ('his:',id_u)

    db('users')
        // .whereIn('id_user', db('historique').where({ id_user: id_u }).select('id_contact').orderBy('createAt','asc'))

        .join('historique', 'users.id_user', '=', 'historique.id_contact')
        .where('historique.id_user', id_u)
        .select('*')
        .orderBy('createAt', 'desc')

        .then((rows) => {
            console.log('cont', rows)
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
router.route('/get/historique1/:id?').get((req, res) => {
    id_u = req.params.id
    //console.logˇ('his:',id_u)

    db('users')
        .whereIn('id_user', db('historique').where({ id_user: id_u }).select('id_contact'))

        .select('*')


        .then((rows) => {
            console.log('cont', rows)
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
router.route('/update/historique').post((req, res) => {

    db('historique')
        .where({ id_user: req.body.id_user, id_contact: req.body.id_contact })
        .update({ createAt: req.body.createdAt })
    console.log("updaaaated msg", createAt)
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
module.exports = router