const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'labber',
    password : 'labber',
    database : 'vagrant'
  }
});

console.log("initiating knex-ion...");

const first_name = process.argv[2];
const last_name = process.argv[3];
const birthdate = process.argv[4];

knex.insert({
  first_name: first_name,
  last_name: last_name,
  birthdate: birthdate}).into('famous_people')
  .then( (results) => {
    return console.log("insert completed. Results:", results);
  })
  .catch( (err) => {
    return console.error(err);
  });
