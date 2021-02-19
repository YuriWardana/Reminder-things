const jwt = require('jsonwebtoken')
const secret_key = 'mysecret'

function generateToken(payload){
    const token = jwt.sign(payload,secret_key)
    return token
}

module.exports = {generateToken}