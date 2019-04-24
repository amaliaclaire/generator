const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/generatorControllers')

router.get('/', ctrl.getResponses)
router.post('/', ctrl.createResponses)
router.put('/', ctrl.updateResponses)
router.delete('/:id', ctrl.deleteResponses)
router.post('/', ctrl.createResponse)
// router.update('/', ctrl.updateResponses)
// router.delete('/:id', ctrl.deleteResponses)

module.exports = router
