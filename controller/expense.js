const Expense = require('../models/expense');
const  Sequelize  = require('sequelize');


exports.get=(req,res,next)=>{
    console.log('get');
Expense.findAll()
.then((expense)=>{
    console.log(expense)
    res.json(expense)
})
.catch((err)=>{console.log(err)})


}
exports.getById=(req,res,next)=>{
    
    console.log('get');
    Expense.findByPk(req.params.id)
    .then((expense)=>{
        res.json(expense)
    })
    .catch((err)=>{console.log(err)})
    
}


exports.post=(req,res,next)=>{
    
    console.log('post');
    if(req.body.id==''){
    Expense.create({
        amount:req.body.amount,
        type:req.body.type,
        description:req.body.description})
        .then((result)=>{
            console.log(result)
            res.json(result)
        })}else{

            Expense.findByPk(req.body.id)
    .then((expense)=>{
        expense.amount=req.body.amount;
        expense.type=req.body.type
        expense.description=req.body.description
        return expense.save();
    }).then(result=> {console.log('hii')
    console.log(result)
    return res.end()
    })

  .catch(err=>{console.log(err)})

    .catch((err)=>{console.log(err)})

        }
    
}

exports.delete_prod=(req,res,next)=>{
console.log('delete')
const id=Number(req.params.id);
    Expense.findByPk(id)
    .then((expense)=>{
        
        return expense.destroy()
    }).then((response)=>{
        
        return res.end();
      })
 
    .catch((err)=>{console.log(err)})
    
    
    }