const router = require('express').Router();
const db = require('./users-model');
//add import for hash 
const bcrypt = require('bcryptjs');
//import json token and secrets file 
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');


//POST
//endpoints will be /api/protected/name 
//WORKING 
router.post('/register', (req, res) => {
    let user = req.body; //user contains plain txt pwd/username
    const hash = bcrypt.hashSync(user.password, 5)// 2^10 rounds, higher the #, longer it takes to crack it, don't want it to burt user experience 
    //overrride user.pwd with hashed pwd 
    user.password = hash;

    db.add(user)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

//POST
//WORKING
router.post('/login', (req, res) => {
    let { username, password } = req.body;

 db.findBy({ username })
    .first()
    .then(user => {
        //if pwds match....
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user); //add token
            res.status(201).json({ message: `You are logged in as ${user.username}!, please accept this token`, token }); //pass in token 
        } else {
            res.status(401).json({message: 'You shall not pass!' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: err.message})
    })
})

const generateToken = user => {
    const payload = {
        subject: user.id, //what token is about 
        username: user.username,
        //other data 
        // department: [''], add later 
    }
    const options = {
        expiresIn: '72h'
    }
    return jwt.sign(payload, secrets.jwtSecret, options); 
 }



// //WORKING
//     router.get('/logout', (req, res) => {
//         if (req.session) {
//             //removes session
//             req.session.destroy(err => {
//                 if(err) {
//                     res.status(`Logout failed. Do you want to stay logged in as ${user.username}?`)
//                 } else {
//                     res.send('Peace out!')
//                 }
//             })
//         } else {
//             //ends the session
//             res.end();
//         }
//     })
    
    







module.exports = router;