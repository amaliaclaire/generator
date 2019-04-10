const model = require('../models/generatorModels')
const axios = require('axios')


function getResponses(req, res, next) {
  const responses = model.getAll()
  res.status(200).json({data: responses})
}

// function createResponse (req, res, next) {
//   // const {response} = req.body
//   // console.log(req.body);
//   // const response = model.trycreate(response)
//   console.log('hits controllers');
//
//     if(req.body) {
//       console.log('req body', req.body);
//       return next ({
//         status: 400,
//         message: 'post things happen here'
//
//       })
//
//     }
//     res.status(201).json({data: response})
// }

const getDogBreeds = (req, res, next) => {
  try {
    return axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error)
  }
  res.status(200).json({data: responses})

}

getDogBreeds()
//
const createResponseExample = (req, res, next) => {
  getDogBreeds().then(dogArray => {
    let dogNames = dogArray.data.message

    console.log(Object.keys(dogNames));


  })






  // .then(response => {
  //   if(response.data.message) {
  //     console.log(`Got ${Object.entries(response.data.message).length} breeds`);
  //   }
  // })
  // .catch(error => {
  //   console.log(error)
  // })

}


// createResponseExample()



// const getBreeds = () => {
//   try {
//     return axios.get('https://dog.ceo/api/breeds/list/all')
//   } catch (error) {
//     console.error(error)
//   }
// }
//
// const countBreeds = async () => {
//   const breeds = getBreeds()
//     .then(response => {
//       if (response.data.message) {
//         console.log(
//           `Got ${Object.entries(response.data.message).length} breeds`
//         )
//       }
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }
//
// countBreeds()
//




// updateResponses ((req, res, next) => {
//
// })
//
// deleteResponses((req, res, next) => {
//
// })

module.exports ={ getResponses, getDogBreeds, createResponseExample}
