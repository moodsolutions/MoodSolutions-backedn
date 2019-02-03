const express = require('express');
const router = express.Router();

const customer = require('../models/customer');


const showCustomer = (req,res) => res.json(res.locals.customer);
const showCustomers = (req,res) => res.json(res.locals.customers);
const sendSuccess = (req,res)=> res.json({message:'Success'});

router.get('/', customer.getAll,showCustomers);//show all customers
router.get('/:id', customer.find, showCustomer);//show one custoner

router.post('/', customer.create, showCustomer);// new customer
router.put('/:id',customer.update, showCustomer);// update customer
router.delete('/:id',customer.delete,sendSuccess);//delete customer



module.exports = router;