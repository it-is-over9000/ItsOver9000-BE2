const express = require('express');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const secret = require('../api/secrets.js').jwtKey;
const cors = require('cors');

const gamesRouter = require('../db2018/db2018-router.js');
const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/games', gamesRouter);
configureRoutes(server);


module.exports = server;