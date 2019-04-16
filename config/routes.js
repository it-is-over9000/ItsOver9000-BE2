const axios = require('axios');
const bcrypt = require('bcryptjs');
const { authenticate } = require('../auth/authenticate.js');
const Users = require('./models.js');
const jwt = require('jsonwebtoken');
const secret = require('../api/secrets.js').jwtKey;

module.exports = server => {
    server.post('/api/register', register);
    server.post('/api/login', login);
    server.get('/', home)
    server.delete('/api/users/:id', authenticate, removeUser);
    server.put('/api/users/:id', authenticate, updateUser);
    server.get('/api/users', authenticate, getUserList);
}


function home(req, res) {
    res.status(200).json({message: "Server is ready"})
}


function register(req, res) {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 6);
    user.password = hash;

    Users
    .add(user)
    .then(good => {
        const token = generateToken(user);
        res.status(201).json({ good, token: token });
    })
    .catch(error => {
        res.status(500).json({ error: 'New user could not be registered!'})
    })
}


function login(req, res) {
    let { username, password } = req.body;

    Users
    .findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message: `Logging you in, ${username}`, token: token })
        } else {
            res.status(401).json({ message: 'Illegal move...'})
        }
    })
    .catch(error => {
        res.status(500).json({ error: 'There was a server error while logging in!'})
    })
}


function removeUser(req, res) {
    

    Users
    .remove(req.params.id)
    .then(user => {
        res.status(200).json({ user });
    })
    .catch(error => {

    })
    

}


function updateUser(req, res) {
    const { id } = req.params;
    const newData = req.body;

    Users
    .update(id, newData)
    .then(user => {
        res.status(200).json(newData);
    })
    .catch(error => {
        res.status(500).json({ error: 'Server could not update user!'})
    })
}


function getUserList(req, res) {
    Users
    .find()
    .then(list => {
        res.status(200).json(list);
    })
    .catch(error => {
        res.status(500).json({ error: 'Server could not find user list!'})
    })
}

// ----------- Token Generator ---------------------------------

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        password: user.password
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options);
}