const express = require('express')
const router = express.Router()
const Controller = require ('../controllers/controller')

router.get('/list', Controller.findAll)
router.post('/postAdd',Controller.postAdd)
router.get('/delete', Controller.delete)

module.exports = router 
 