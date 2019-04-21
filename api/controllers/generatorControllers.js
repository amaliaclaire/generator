const model = require('../models/generatorModels')
const axios = require('axios')


function getResponses(req, res, next) {
  console.log('model here');
   model.getAll()
  .then( responses => {
    console.log('response', responses);
    res.status(200).json({data: responses})

  }).catch( err => {
    console.error(err)
  })
}


const createResponse = (req, res, next) => {
  Responses.create(req.body).then(([responses]) => {
    res.json(responses)
  })
}












module.exports ={ getResponses, createResponse}
