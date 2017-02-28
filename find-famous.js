const pg = require("pg");
const settings = require("./settings"); // settings.json
const processData = require("./processData.js");
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port
});

client.connect((err) => {
  const name = process.argv[2];


  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * FROM famous_people WHERE first_name = '${name}' OR last_name = '${name}';`, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    processData(result, name);

    client.end();
  });
});
