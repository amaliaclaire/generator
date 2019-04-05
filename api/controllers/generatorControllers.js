const model = require('../models/generatorModels')

function getResponses(req, res, next) {
  const responses = model.getAll()
  res.status(200).json({data: responses})
}

function createResponse (req, res, next) {
  // const {response} = req.body
  // console.log(req.body);
  // const response = model.trycreate(response)

    if(req.body) {
      console.log('req body', req.body);
      return next ({
        status: 400,
        message: 'post things happen here'

      })

    }
    res.status(201).json({data: response})
}


// updateResponses ((req, res, next) => {
//
// })
//
// deleteResponses((req, res, next) => {
//
// })

module.exports ={ getResponses, createResponse }
