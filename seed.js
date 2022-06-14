require('dotenv').config();
require('./config/database');

const Setup = require('./models/Setup');

(async function() {

  await Setup.deleteMany({});
  const setups = await Setup.create([
    {name: 'Fluffy', overdrive: 8, delay: 7},
    {name: 'Fun-times', overdrive: 3, delay: 4},
    {name: 'Anchovy', overdrive: 5, delay: 5},
    {name: 'Funkeroo', overdrive: 2, delay: 3},
    {name: 'Totally Pants', overdrive: 10, delay: 10},
    {name: 'More Fluffy', overdrive: 9, delay: 8}
  ]);

  console.log(setups)

  process.exit();

})();