const model = require("../models/generatorModels")

getResponses = (req, res, next) => {
    model.getSome(req.body)
        .then(quotes => res.status(200).send({ quotes }))
        .catch(err => console.error(err))
}

createResponses = (req, res, next) => {
    const { quote, category, rank } = req.body
    if (!quote || !category || !rank) {
        res.status(500).send('One or more of the required column is empty!')
        console.error('>>>>>>>>One or more of the required column is empty!<<<<<<<<<')
    } else {
        model.createOne(req.body)
            .then(result => res.status(200).send('succeeded!'))
            .catch(err => console.error(err))
    }
}

updateResponses = (req, res, next) => {
    if (!req.query.id) res.status(500).send('ID Needed.')
    if (!Object.keys(req.body).length) res.status(500).send('Please designate a column to be updated.')
    model.updateOne(req.query, req.body)
        .then(result => res.status(200).send('Column ' + Object.keys(req.body).toString() + ' from row ' + req.query.id + ' has been updated.'))
        .catch(err => console.error(err))
}

deleteResponses = (req, res, next) => {
    if (!req.params.id) res.status(500).send('ID Needed.')
    model.deleteOne(req.params)
        .then(result => res.status(200).send('Row ' + req.params.id + ' was deleted.'))
        .catch(err => console.error(err))
}

module.exports = { getResponses, createResponses, updateResponses, deleteResponses }
