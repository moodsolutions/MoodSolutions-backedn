const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const offers= require('../models/offer');

const sendOffers = (req,res,) => res.json(res.locals.offers);
const sendOffer  = (req,res) => res.json(res.locals.offer);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/', offers.getAll, sendOffers);

router.get('/offer/:id', offers.find, sendOffer);// get offer by customer id
// router.get('/offer/:provider_id', offers.findProviderOffer,sendOffer);

router.get('/offer', auth , offers.getProviderOffer, sendOffer);

router.post('/:id', offers.create,sendOffer);

router.post('/provider', auth ,offers.create, sendOffer);
router.put('/:id', offers.update, sendOffers);
router.delete('/:id', offers.delete, sendSuccess);

module.exports = router;

