const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const pizzaRoutes = require('./routes/pizza-routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/pizza', pizzaRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

