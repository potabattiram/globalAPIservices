const ConnectionforPlasma = require("../../GlobalDbConnections/PlasmaDBConnection");
const express = require("express");
const router = express.Router();
const cors = require('cors');


router.get('/api/getplasmadonors',(req,res) => {
    ConnectionforPlasma.query('select * from plasmaDonorsList',(err,rows) => {
        if(err){
            res.status(404).send('error')
        }
        else{
            res.send(rows)
        }
    })
})

module.exports = router;