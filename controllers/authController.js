const { User } = require('../models/index');
const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class authController{

    static register(req,res){
        const data = {
            User_name : req.body.User_name,
            email : req.body.email,
            password : req.body.password
        }

        User.create(data)
        .then(data=>{
            console.log(data);
            const newData = {
                
                userName: data.User_name,
                email: data.email
            }
            res.status(201).json(newData)
        }).catch(err=>{
            res.status(400).json(err)
        })
    }

    static findUser(req,res){
        User.findAll()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static login(req,res){
        const { userName,email,password } = req.body
      
        User.findOne({
            where:{
                email:email
            }
        })
        .then(data=>{
            if (!data) {
            return res.status(401).json({msg:'user/password not found'}) 
            }
           
           let status = comparePassword(password,data.password)
            if (!status) {
                return res.status(401).json({msg:'user/password not match'})   
            }
            const payload = {
                id: data.id,
                User_name : data.User_name,
                email : data.email
            }

            const jwt = generateToken(payload)
            res.status(200).json({ jwt })
        })
        .catch(err=>{
            res.status(400).json(err)
        })
    }

}

module.exports = authController