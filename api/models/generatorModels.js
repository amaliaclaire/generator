const knex = require("../../db/knex")
const uuid = require("uuid/v4")

getAll = () => {
    return knex("responses")
        .select("quote")
        .then(result => result)
        .catch(err => console.error(err))
}

createOne = (body) => {
    return knex("responses")
        .insert(body)
        .then(result => result)
        .catch(err => console.error(err))
}

updateOne = (id, body) => {
    return knex('responses')
        .where(id)
        .update(body)
        .then(result => result)
        .catch(err => console.error(err))
}

deleteOne = (id) => {
    return knex('responses')
        .where(id)
        .del()
        .then(result => result)
        .catch(err => console.error(err))
}

module.exports = { getAll, createOne, updateOne, deleteOne }
const db = require('../../db/knex.js')
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
  const response = {id: uuid(), name}
  responses.push(response)
  return response
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
  getAll,
}
