// const db = require('../../db/knex.js')
const knex = require('../../db/knex')
const uuid = require('uuid/v4')

const responses = []

function getAll () {
  return knex('generator')
  .select('*')
  .from('responses')
  .then((result) => {
    console.log(result);
    knex.destroy();
  }).catch((err) => {
    console.log(err);
    knex.destroy();
    process.exit(1)
  })

}

function create (name) {
  console.log('hits create');
  const response = {id: uuid(), name}
  responses.push(response)
  return response
}


function insertDogs (dogs) {
  return knex('generator')
  .insert(dogs)
}

// create ((quote, rank, category) => {
//   const response = {quote, rank, category}
//   responses.push(response)
//   return reponse
// })
//
// update ((id, quote, rank, category) => {
//
// })
//
// delete ((id) => {
//   let index = responses.findIndex(response => response.id === id)
//   if (index === -1) return []
//   return reponses.splice(index, 1)
// })

module.exports = {
  getAll, create
}
