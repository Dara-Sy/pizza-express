const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const pizzaRoutes = require('./routes/pizza-routes');
app.use('/pizza', pizzaRoutes);

