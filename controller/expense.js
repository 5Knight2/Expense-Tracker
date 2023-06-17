const Expense = require('../models/expense');
const  Sequelize  = require('sequelize');


exports.get=(req,res,next)=>{

Expense.findAll()
.then((expense)=>{
    console.log(expense)
    res.json(expense)
})
.catch((err)=>{console.log(err)})


}


exports.post=(req,res,next)=>{
    console.log(req);
    Expense.create({
        amount:req.body.amount,
        type:req.body.type,
        description:req.body.description})
        .then((result)=>{
            console.log(result)
            res.json()
        })
    
}

