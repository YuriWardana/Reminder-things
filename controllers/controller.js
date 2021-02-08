const { Reminder } = require('../models/index')

class Controller{

    static findAll(req,res){
        Reminder.findAll()
        .then(data=>{
        res.send(data) 
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
            res.send(data);
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static delete(req,res){
        let id = +req.params.id
        Reminder.destroy({where:{
            id:id
        }})
        return Reminder.findAll()
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.send(err)
        })
    } 

}
 
module.exports = Controller