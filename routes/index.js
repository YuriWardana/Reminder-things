const express = require('express')
const router = express.Router()
const reminder = require('./reminder')

router.get('/',(req,res)=>{
    res.send('test')
})

router.use('/reminder',reminder)


 
module.exports = router