//mw function 
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const protected = (req, res, next) => {
  //tokens are sent as auth header 
const token = req.headers.authorization;

if (token) {
  //valid?
  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if(err) {
    //if token is valid 
    res.status(401).json({message: "You didn't think I was going to let you in, did you..?"})
  } else {
      //token valid and decoded 
      req.decodedJwt = decodedToken; //make it avail to API
      console.log('decoded token', req.decodedJwt)

      next();
  }
  })
} else {
  //no token 
  res.status(401).json({ message: 'You tried it'})
}
}

    




module.exports = protected;
