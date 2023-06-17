const express=require('express');
const parser=require('body-parser');
const expense=require('./router/expense');
const app=express();
const sequelize=require('./util/database');
var cors=require('cors');

app.use(cors());

app.use(parser.json({extended:false}))

app.use(expense);


sequelize.sync()
.then((res)=>{
    console.log(res)
    app.listen(4000);
})
.catch((err)=>{
    console.log(err)
})

