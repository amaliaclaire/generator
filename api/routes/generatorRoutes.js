const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/generatorControllers')

router.get('/', ctrl.getResponses)
router.get('/getDogBreeds', ctrl.getDogBreeds)
// router.post('/', ctrl.createResponse)
router.post('/', ctrl.createResponseExample)


console.log('hits routes');
// router.update('/', ctrl.updateResponses)
// router.delete('/:id', ctrl.deleteResponses)

module.exports = router
