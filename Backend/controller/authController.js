const express = require("express");
const route = express.Router();
const jwt = require("jsonwebtoken");

const provider = require('../models/provider');
// const subscription = require('../models/subscription');

const auth = require("../middleware/auth");

const sendProviders = (req,res,) => res.json(res.locals.provider);


route.get('/', provider.getAll, sendProviders);
route.get('/provider',auth, provider.find, sendProviders);
route.post('/', provider.create, sendProviders);


route.get("/testauth", auth, (req, res) => {
  res.send("authenticated");
});

route.post("/auth", provider.findEmail, provider.login, (req, res) => {
  if (!res.user) {
    res.status(400).send("invalid email or password");
  } else {
    const { email, title, id } = req.user;

    const token = jwt.sign({ email, title, id }, process.env.JWT_KEY);

    res.send({ token });
  }
});

route.post("/provider", provider.findEmail, provider.create,
// subscription.create,
 (req, res) => {
// return user role 
  if (res.user) {
    res.status(400).send("user is already reigister");
  } else {

 const { email, title, id } = req.user;

    const token = jwt.sign({ email, title, id }, process.env.JWT_KEY);

    res.send({ token });
  }
});

module.exports = route;