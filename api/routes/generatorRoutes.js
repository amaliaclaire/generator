const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/generatorControllers')

router.get('/', ctrl.getResponses)
router.post('/', ctrl.createResponse)


console.log('hits routes');


module.exports = router
