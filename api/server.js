const express = require('express');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const secret = require('../api/secrets.js').jwtKey;
const cors = require('cors');
const gamesRouter = require('../db2018/db2018-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/games', gamesRouter);



server.get('/', (req, res) => {
    res.status(200).json({message: "Server is ready"})
})

server.post('/', async (req, res) => {
    let { username } = req.body;
    const token = generateToken(username);
    res.status(200).json({ message: `Welcome, ${username}`, token: token });
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options);
}

module.exports = server;