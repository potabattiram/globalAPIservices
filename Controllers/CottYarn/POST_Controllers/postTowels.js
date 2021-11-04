const Connection = require("../../../GlobalDbConnections/CottyarnDbConnection");
const express = require("express");
const router = express.Router();

// router.post('/api/cottyarn/addtoweldata', (req,res) => {
//     const name = req.body.name;
//     const imgName = req.body.imgName;
//     const size = req.body.size;
//     const brand = req.body.brand;
//     const nofocol = req.body.nofocol;
//     const gsm = req.body.gsm;
//     const prize = req.body.prize;
//     const mrp = req.body.mrp;
//     const verification = req.body.

//     Connection.query(`insert into Towels_Data (tow_name , brand_name , ImageFile, material, size , brand ,nofocol , gsm , prize, mrp) values 
//     ('${name}' , '${imgName}' , '${size}' , '${brand}' , '${nofocol}' , '${gsm}' , '${prize}' , '${mrp}')`, (err, rows) => {
//         if(err) 
//         {
//             res.status(400).send('Failed to insert data into database' + err)
//         }
//         else 
//         {
//             res.send({msg: 'success'})
//         }
//     } )
// })





router.post('/api/cottyarn/addnapkindata', (req,res) => {
    const name = req.body.name;
    const imgName = req.body.imgName;
    const checkedA18_18 = req.body.checkedA18_18;
    const checkedB20_20 = req.body.checkedB20_20;
    const checkedC22_22 = req.body.checkedC22_22;
    const checkedD24_24 = req.body.checkedD24_24;
    const checkedE27_27 = req.body.checkedE27_27;
    const brand = req.body.brand;
    const nofocol = req.body.nofocol;
    const gsm = req.body.gsm;
    const prize = req.body.prize;
    const mrp = req.body.mrp;

    Connection.query(`insert into public_napkins (name , imgName , checkedA18_18 ,checkedB20_20 , checkedC22_22 , checkedD24_24  ,checkedE27_27, brand ,nofocol , gsm , prize, mrp) values 
    ('${name}' , '${imgName}' , '${checkedA18_18}' , '${checkedB20_20}' , '${checkedC22_22}' , '${checkedD24_24}' , '${checkedE27_27}' , '${brand}' , '${nofocol}' , '${gsm}' , '${prize}' , '${mrp}')`, (err, rows) => {
        if(err) 
        {
            res.status(400).send('Failed to insert data into database' + err)
        }
        else 
        {
            res.send({msg: 'success'})
        }
    } )
})


module.exports = router;