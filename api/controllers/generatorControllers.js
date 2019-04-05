const model = require('../models/generatorModels')

function getResponses(req, res, next) {
  const responses = model.getAll()

  res.status(200).json({data: responses})
}

// createResponses((req, res, next) => {
//
// })
//
// updateResponses ((req, res, next) => {
//
// })
//
// deleteResponses((req, res, next) => {
//
// })

module.exports ={ getResponses }
