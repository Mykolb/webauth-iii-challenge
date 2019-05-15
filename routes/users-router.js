const router = require('express').Router();
const db = require('./users-model');

//import mw
const protected = require('../middleware/protected');


//order is important when adding mw 
router.get('/', protected, (req, res) => {
    db.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(401).json({ error: err.message})
    })
})

module.exports = router;