const express = require('express');
const burger = require('../models/burger');


const router = express.Router();

router.get('/all', (req, res) => {
    burger.all().then(data =>{
        res.json(data)
    }).catch(err => console.log(err))
    
})


module.exports = router;