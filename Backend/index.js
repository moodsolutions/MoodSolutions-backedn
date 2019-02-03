require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

// const PORT = process.env.DEV_PORT || process.env.PORT ;
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));




app.get('/', (req, res) => {

  res.send('Map API!'); // google map API
})


//Controller
const authController = require('./controller/authController');
app.use("/api/", authController);

const providerController = require('./controller/providerController');
app.use('/provider', providerController)

const offerController = require('./controller/offerController');
app.use('/offer', offerController);

// const subscriptionController = require('./controllers/subscriptionController');
// app.use('/subscription', subscriptionController)

const customerController = require('./controller/cutomerController');
 app.use('/customer', customerController)


app.listen(PORT, () => {
  console.log('---------------------------------------');
  console.log('Express is listening on :' + PORT);
  console.log('---------------------------------------');
});