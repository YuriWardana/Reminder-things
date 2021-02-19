const bcrypt = require("bcrypt")

function hashPassword(password){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

function comparePassword(password,dbpassword){
  return  bcrypt.compareSync(password, dbpassword); 
}

module.exports = { hashPassword, comparePassword }