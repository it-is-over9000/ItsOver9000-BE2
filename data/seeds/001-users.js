const bcrypt = require('bcryptjs');

const hash = bcrypt.hashSync('pass', 6);

exports.seed = function(knex) {
  
      return knex('users').insert([
        {id: 1, username: 'Rudy', password: hash},
        {id: 2, username: 'Alejandro', password: hash},
        {id: 3, username: 'Crawford', password: hash},
        {id: 4, username: 'Winston', password: hash},
        {id: 5, username: 'Arthur', password: hash},
        {id: 6, username: 'Joshua', password: hash},
        {id: 7, username: 'Josh', password: hash},
        {id: 8, username: 'Krisli', password: hash},
        {id: 9, username: 'Ken', password: hash}
      ]);
    
};
