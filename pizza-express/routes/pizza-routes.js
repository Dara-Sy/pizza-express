//Make sure to import your models from Pizza.js

const pg = require('pg-promise')({/* OPTIONAL Initialization Options */});

const pizzaModel = require('../models/pizza')

//import express router here !

const express = require('express');

const pizzaRouter = express.Router();






// Get all

pizzaRouter.get('/', (req, res) => {
  pizzaModel.getAllPizzas()
  .then(pizzas => {
    res.json({pizzas: pizzas})
  }).catch(err => {
    console.log("Error:", err);
    res.status(500).json({err: err});
  });
})


// Get one

pizzaRouter.get('/:id', (req, res) => {
  pizzaModel.getOnePizza(req.params.id)
  .then(pizzas => {
    res.json({pizzas: pizzas})
  }).catch(err => {
    console.log("Error:", err);
    res.status(500).json({err: err});
  });
})


// Create

pizzaRouter.post('/pizza', (req, res) => {
  pizzaModel.createOne(req.body)
  .then(pizzas => {
    res.json({pizza: pizza})
  }).catch(err => {
    console.log("Error:", err);
    res.status(500).json({err: err});
  });
});





// Update

pizzaRouter.put('/', (req, res) => {
  pizzaModel.updateOnePizza(req.body)
  .then(pizzas => {
    res.json({pizzas: pizzas})
  }).catch(err => {
    // console.log("Error:", err);
    res.status(500).json({err: err});
  });
})

// Destroy

pizzaRouter.delete('/', (req, res) => {
  pizzaModel.burnNoPizza(req.body)
  .then(pizza => {
    res.json({pizzas: pizzas})
  }).catch(err => {
    res.status(500).json({err: err});
  });
})






//Don't forget to export your module


module.exports = pizzaRouter;
