const db = require('../../db/knex.js')
const knex = require('../../db/knex')
const responses = []

function getAll () {
  return knex('generator')
  .select('*')
  .from('responses')
  .then((result) => {
    return result
  }).catch((err) => {
    console.log(err);
  })
}

function create ({quote, category, rank}) {

  const response = {
    quote: req.body.quote,
    category: req.body.category,
    rank: req.body.rank
   }


  return knex('responses')
  .insert(response)
  .returning('*')
}






module.exports = {
  getAll, create
}
