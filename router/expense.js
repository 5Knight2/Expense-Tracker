const express=require('express');
const router=express.Router();
const expense_controller=require('../controller/expense');

router.get('/expense',expense_controller.get);

router.get('/expense/:id',expense_controller.getById);

router.post('/expense',expense_controller.post);

router.get('/delete/:id',expense_controller.delete_prod);

module.exports=router;


