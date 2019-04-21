// const db = require('../../db/knex.js')
const knex = require('../../db/knex')
const uuid = require('uuid/v4')

const responses = []

function getAll () {
  return knex('generator')
  .select('*')
  .from('responses')
  .then((result) => {
   return result
  }).catch((err) => {
    return err
  })
}



module.exports = {
  getAll
}
