const express = require('express')
const router = express.Router()
const db = require('../database')

//recuperer la table post
router.route('/get/post').get((req, res) => {
    db('poste')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

//les poste d un etudiant X

router.route('/get/post/:id?').get((req, res) => {
    const id_e =req.params.id;
   db('poste').whereIn
   ( 'id_classe',db('classe').whereIn
   ('id_classe',db('adherant').where({id_etu:id_e}).select('id_classe')).select('id_classe')
   ).select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
    
})


//ajouter un post a une classe X 
router.route('/add/post/:id?').post((req,res)=>{
    const id_classe= req.params.id
    const date_poste = new Date()
    const { id_poste ,payload } = req.body
        db('poste')
            .insert({
                id_poste,
                id_classe,
                payload,
                date_poste,
                
            })
            .then((resp) => {
                console.log(resp)
                res.json({ AJOUT: true })
            })
            .catch((err) => {
                console.log(err)
                res.json({ AJOUT: false })
            })
    })
//modifier une classe
    router.route('/update/post/:id?').post((req,res)=>{
        const id_poste = req.params.id
        const payload  = req.body.payload
            db('poste')
                .where('id_poste', id_poste)
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

//supprimer une classe
    router.route('/delete/post/:id?').delete((req,res)=>{
        const id_poste = req.params.id
            db('poste')
                .where('id_poste', id_poste)
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
    
             
      
            
      
      





    

module.exports =router