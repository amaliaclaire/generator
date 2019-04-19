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

function createResponse (req, res, next) {
  const { quote, category, rank } = req.body
  const response_id = responses.map(r => r.id)


  if (!name) {
    return next ({
      status: 400, 
      message: `response needed for quote, category, rank`
    })
  }
  res.status(201).json({data: quote})

}












module.exports ={ getResponses, createResponse}
