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
