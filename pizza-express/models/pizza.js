// Write your model in this file!

const pg = require('pg-promise')({/* OPTIONAL Initialization Options */});

const config = {
  host:     'localhost',
  port:     3000,
  database: 'pizza_dev',
};

const db = require('../config/connection.js'); // connection to database, const

function getAllPizzas() {
  const queryPromise = db.manyOrNone(`
    SELECT *
    FROM pizza
    `);

  return queryPromise;
}

function createOnePizza(pizza) {
  const queryPromise = db.one(`
    INSERT INTO pizza (flavor, description, location)
    VALUES ($/flavor/, $/description/, $/location/)
    RETURNING *
    `, pizza);

  return queryPromise;
}

function getOnePizza() {
  const queryPromise = db.one(`
    SELECT *
    FROM pizza
    WHERE id = $1
    `, id);

  return queryPromise;
}

function updateOnePizza(id) {
  const queryPromise = db.one(`
    UPDATE pizza SET
      flavor = $/flavor/,
      description = $/description/,
      location = $/location/
    WHERE id = $/id/
    RETURNING *
    `, id);
}

function burnNoPizza(id) {
  const queryPromise = db.none(`
    DELETE FROM pizza
    WHERE id = $1
      `, id)
}

module.exports = {
  getAllPizzas: getAllPizzas,
  createOnePizza: createOnePizza,
  getOnePizza: getOnePizza,
  updateOnePizza: updateOnePizza,
  burnNoPizza: burnNoPizza
};




  // id,
  // flavor,
  // description,
  // location,


// module.exports = {
//   findAll() {
//     // to do join pizza table
//     return db.many(`
//       SELECT *
//       FROM pizza
//       `);
//   }, // method shorthand without keyword function
//   findOne(id) {
//     // find ONE pizza with THIS id
//     return db.one(`
//       SELECT *
//       FROM pizza
//       WHERE id = $1
//       `, id)
//   },
//   makeOne(pizzaData) {
//     // insert 7 values into pizza
//     return db.one(`
//       INSERT INTO pizza (
//         id,
//         flavor,
//         description,
//         location,
//       ) VALUES (
//         id = $/pizza.id/,
//         flavor = $/pizza.flavor/,
//         description = $/pizza.description/,
//         location = $/pizza.location/,
//       )
//       RETURNING id
//       `, pizzaData);
//   },
//   save(id, pizzaData) {
//     // insert 7 values into pizza
//     db.one(`
//       UPDATE pizza SET
//         id = $/pizza.id/,
//         flavor = $/pizza.flavor/,
//         description = $/pizza.description/,
//         location = $/pizza.location/,
//       WHERE id = $1
//       RETURNING *
//       `, {id:id, pizza:pizzaData});
//   },
//   destroy(id) {
//     return db.none(`
//       DELETE FROM pizza
//       WHERE pizza_id = $1
//       `, id)
//   },
// };
