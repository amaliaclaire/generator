const model = require('../models/generatorModels')
const axios = require('axios')


function getResponses(req, res, next) {
   model.getAll()
  .then( responses => {
    res.status(200).json({data: responses})
  }).catch( err => {
    console.error(err)
  })
}


function createResponse(req, res, next){
  model.create()
  .then( response => {
    res.status(200).json({data: response})
  }).catch( err => {
    console.log(err);
  })
}






// function createResponse(req, res, next){
//   Responses.create(body).then(([responses]) => {
//     res.json(responses)
//   }).catch( err => {
//     console.log(err);
//   })
// }








module.exports ={ getResponses, createResponse}
