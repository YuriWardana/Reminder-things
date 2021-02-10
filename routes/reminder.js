const express = require('express')
const router = express.Router()
const Controller = require ('../controllers/controller')

router.get('/list', Controller.findAll)
router.post('/postAdd',Controller.postAdd)
router.delete('/delete/:id', Controller.delete)

module.exports = router 
 