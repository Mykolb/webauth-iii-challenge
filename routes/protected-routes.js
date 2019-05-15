const router = require('express').Router();
const db = require('./users-model');
//add import for hash 
const bcrypt = require('bcryptjs');


//POST
//endpoints will be /api/protected/name 
//WO
router.post('/register', (req, res) => {
    let user = req.body; //user contains plain txt pwd/username
    const hash = bcrypt.hashSync(user.password, 5)// 2^10 rounds, higher the #, longer it takes to crack it, don't want it to burt user experience 
    //overrride user.pwd with hashed pwd 
    user.password = hash;

    db.add(user)
    // .insert(req.body)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'User could not be added to the database.'})
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
        //req.session is an object added by the session middleware, like a mini state
        //we can store info inside req.session
            req.session.user = user;
            //cookie will be auto sent to the library
            res.status(201).json({ message: `You are logged in as ${user.username}!` });
        } else {
            res.status(401).json({message: 'You shall not pass!' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: err.message})
    })
})


//WORKING
    router.get('/logout', (req, res) => {
        if (req.session) {
            //removes session
            req.session.destroy(err => {
                if(err) {
                    res.status(`Logout failed. Do you want to stay logged in as ${user.username}?`)
                } else {
                    res.send('Peace out!')
                }
            })
        } else {
            //ends the session
            res.end();
        }
    })
    
    







module.exports = router;