module.exports = function processData(result, name) {
  
  console.log("Searching ...");
  let data = result.rows;
  console.log(`Found ${result.rows.length} person(s) by the name '${name}':`);
  data.forEach((p) => {
  console.log(`-${p.id}: ${p.first_name} ${p.last_name} born, '${String(p.birthdate).slice(0, 10)}'`)
  });
};
