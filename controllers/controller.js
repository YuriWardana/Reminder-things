const { Reminder } = require('../models/index')

class Controller{

    static findAll(req,res){
        Reminder.findAll()
        .then(data=>{
        res.status(200).json(data) 
        })
     .catch(err=>{
        res.send(err)
        })
    }
    
    static postAdd(req,res){
        let newData = {
            title:req.body.title,
            detail:req.body.detail,
            status:false,
            due_date:new Date()
        }
        Reminder.create(newData)
        .then(data=>{
            newData = {
               title: data.title,
               detail: data.detail,
               status:data.status
            }
            res.status(201).json(newData);
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static delete(req,res){
        let id = +req.params.id
        // console.log(id);
        Reminder.destroy({where:{
            id
        }})
        .then(data=>{
            if (data === 1) {
               return res.status(200).json({message: 'success delete data'});    
            } else if(data === 0) {
              return res.status(404).json({message:'data not found'})
            }
        })
        .catch(err=>{
            res.send(err)
        })
    } 

    static findOne(req,res){
        let id = +req.params.id
        // console.log(id);
        Reminder.findAll({where:{id:id}})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.send('error')
        })
    }

}
 
module.exports = Controller