const express = require('express')
const router = express.Router()
const reminder = require('./reminder')
const auth = require('./auth')

router.get('/',(req,res)=>{
    res.send('test')
})

router.use(auth)
router.use('/reminder',reminder)


 
module.exports = router