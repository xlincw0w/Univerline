
const express = require('express')
const { ids } = require('webpack')
const { whereIn } = require('../database')
const router = express.Router()
const db = require('../database')

router.route('/add/amis/:id?').post((req, res) =>{
    
    const id_etu= req.params.id;
    const data = req.body;
   const  confirm =false
    db('amis')
    .insert({
        id_user:data.id_user,
        id_ami:id_etu,
        confirm
})
.then((rows) => {
    res.json(rows)
})
.catch((err) => {
    console.log(err)
    res.json({ err: true })
})
})


router.route('/get/amis/:id?').get((req,res)=>{
    const id_u=req.params.id
    console.log(id_u)

    db('users').whereIn
    ('id_user',db('amis').where({id_user:id_u,confirm:false}).select('id_ami'))
   .select('nom').then((rows)=>{
    res.json(rows)
})
.catch((err)=>{
    res.json({err:true})
})

}
)



router.route('/uptade/amis/:id?').put((req, res) => {
    const id_etu = req.params.id;
    data  = req.body.id_user;

    db('amis').where({id_ami:id_etu ,id_user:data}).update({
        confirm:true
    })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
}
)

 
router.route('/delete/amis/:id?').delete((req,res)=>{
    const id = req.params.id; 
    data= req.body.id_user;
    db('amis').where({id_ami:id,id_user:data }).delete('*')
    .then((rows) => {
        res.json(rows)
    })
    .catch((err) => {
        console.log(err)
        res.json({ err: true })
    })
})



module.exports =router;