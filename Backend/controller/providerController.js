const express = require('express');
const router = express.Router();

const provider= require('../models/provider');

const sendProvider=(req,res)=>res.json(res.locals.provider);
const sendProviders=(req,res)=>res.json(res.locals.providers);
const sendSuccess=(req,res)=>res.json({message:"Success"});

router.get('/', provider.getAll,sendProviders);
router.get('/:id', provider.find, sendProvider);

router.post('/', provider.create, sendProvider);
router.put('/:id',provider.update, sendProvider);
router.delete('/:id',provider.delete,sendSuccess);


module.exports = router;