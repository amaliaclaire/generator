exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {id: 1, quote: 'test', category: 'testcategory', rank: 'testrank'},
        {id: 2, quote: 'test', category: 'testcategory2', rank: 'testrank2'},
        {id: 3, quote: 'test', category: 'testcategory3', rank: 'testrank3'},
      ]);
    });
};
