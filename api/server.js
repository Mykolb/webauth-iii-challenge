const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');


//routers
const protectedRouter = require('');
const usersRouter = require('');

const server = express();

server.use(expres.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());


server.get('/', (req, res) => {
    res.send(`<h2>We have data showing!</h2>`)
});

module.exports = server;