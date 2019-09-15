const express = require('express');
const burger = require('../models/burger');


const router = express.Router();

router.get('/all', (req, res) => {
    burger.all().then(data =>{
        res.json(data)
    }).catch(err => console.log(err));
})

router.post('/new', (req, res) => {
    let body = req.body;
    burger.insertOne(body.burger).then(data => {
        burger.all().then(data =>{
            res.json(data)
        })
    }).catch(err => console.log(err));
})

router.put('/update', (req, res) => {
    let body = req.body;
    burger.updateOne(body.id, true).then(data => {
        burger.all().then(data =>{
            res.json(data)
        })
    }).catch(err => console.log(err));
})


module.exports = router;