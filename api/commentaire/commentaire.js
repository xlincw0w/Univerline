const express = require('express')
const router = express.Router()
const db = require('../database')

//afficher les commentaires
router.route('/get/comments').get((req, res) => {
    db('commentaire')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
//afficher tous les commentaires d'un poste précis
router.route('/get/comments/:id?').get((req, res) => {
    const id_pos = req.params.id;
    db('commentaire').where({id_poste:id_pos })
        .select('payload','date_commentaire')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

 //ajouter un commentaire
router.route('/add/comments/:id?').post((req,res)=>{
    const  id_poste = req.params.id
    const date_commentaire =new Date()
    const { id_user , payload  } = req.body
        db('commentaire')
            .insert({
                
                id_user ,
                id_poste,
                payload ,
                date_commentaire ,
            })
            .then((resp) => {
                console.log(resp)
                res.json({ comment: true })
            })
            .catch((err) => {
                console.log(err)
                res.json({ comment: false })
            })
    })
  //modifier un commentaire
    router.route('/update/commentaire/:id?').post((req,res)=>{
        const id_commentaire = req.params.id
        const payload  = req.body.payload
            db('commentaire')
                .where('id_commentaire', id_commentaire)
                .update({
                    
                    payload,
                   
                })
                .then((resp) => {
                    console.log(resp)
                    res.json({ updated: true })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({ updated: false })
                })
        }
    )
//supprimer un commentaire
    router.route('/delete/commentaire/:id?').delete((req,res)=>{
        const id_commentaire = req.params.id
        const payload  = req.body.id_poste
            db('commentaire')
                .where('id_commentaire', id_commentaire)
                .delete('*')
                .then((resp) => {
                    console.log(resp)
                    res.json({ delete: true })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({ delete: false })
                })
        }
    )


    module.exports = router