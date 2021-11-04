const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();

router.use(function authToken(req, res, next) {
  try{
    const token = req.cookies.jwt
    res.header({'Access-Control-Allow-Credentials': true})
    if (token == null) return res.sendStatus(403);
  
    jwt.verify(token, "secret_key", (err, user) => {
      if (err) return res.status(403).send('Not Authorized!');
      req.user = user;
      next();
    });
  }
  catch(err){
    res.status(404).send({msg : 'Something went wrong regarding JWT' , err: err})
  }

})

module.exports = {
  router
};
