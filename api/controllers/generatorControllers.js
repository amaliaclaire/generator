const model = require("../models/generatorModels")

getResponses = (req, res, next) => {
    model.getAll()
        .then(quotes => res.status(200).send({ quotes }))
        .catch(err => console.error(err))
}

// createResponses((req, res, next) => {

// })

// updateResponses ((req, res, next) => {

// })

// deleteResponses((req, res, next) => {

// })

module.exports = {
    getResponses
}
