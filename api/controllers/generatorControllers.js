const model = require("../models/generatorModels")

getResponses = (req, res, next) => {
    model.getAll()
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

// updateResponses ((req, res, next) => {

// })

// deleteResponses((req, res, next) => {

// })

module.exports = { getResponses, createResponses }
