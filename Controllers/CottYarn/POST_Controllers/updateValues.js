const Connection = require("../../../GlobalDbConnections/CottyarnDbConnection");
const express = require("express");
const router = express.Router();

router.put('/api/cottyarn/update/product',(req,res) => {
    const productName = req.body.productName;
    const availability = req.body.availability;
    const prize = req.body.prize;

    Connection.query('update Towels_Data set verification=?, prize=? where tow_name=?',[availability,prize,productName],(failed,succeeded) => {
        if(failed){
            res.status(404).send(failed)
        }
        else{
            res.status(200).send('Success')
        }
    })
})


module.exports = router;