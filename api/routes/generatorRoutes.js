const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/generatorControllers')

router.get('/', ctrl.getResponses)
console.log('ROUTER STUFF');
// router.post('/', ctrl.createResponses)
// router.update('/', ctrl.updateResponses)
// router.delete('/:id', ctrl.deleteResponses)

module.exports = router
