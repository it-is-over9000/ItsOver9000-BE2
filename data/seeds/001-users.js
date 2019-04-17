
exports.seed = function(knex) {
  
      return knex('users').insert([
        {id: 1, username: 'Rudy', password: 'pass'},
        {id: 2, username: 'Alejandro', password: 'pass'},
        {id: 3, username: 'Crawford', password: 'pass'},
        {id: 4, username: 'Winston', password: 'pass'},
        {id: 5, username: 'Arthur', password: 'pass'},
        {id: 6, username: 'Joshua', password: 'pass'},
        {id: 7, username: 'Josh', password: 'pass'},
        {id: 8, username: 'Krisli', password: 'pass'},
        {id: 9, username: 'Ken', password: 'pass'}
      ]);
    
};
