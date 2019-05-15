const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');


//routers
const protectedRouter = require('../routes/protected-routes');
const usersRouter = require('../routes/users-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

//WORKING
//endpoints 
server.use('/api/protected', protectedRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send(`<h2>We have data showing!</h2>`)
});

module.exports = server;