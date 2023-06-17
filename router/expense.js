const express=require('express');
const router=express.Router();
const expense_controller=require('../controller/expense');

router.get('/expense',expense_controller.get);

router.post('/expense',expense_controller.post);

router.get('/expense/:id',expense_controller.get);

module.exports=router;


