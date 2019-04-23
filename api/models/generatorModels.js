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


module.exports = {
  getAll
}
