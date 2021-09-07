
exports.seed =  async function(knex) {
  await knex('fruits').truncate()
  await knex('fruits').insert([
      // Inserts seed entries
        { name: 'Orange', avgWeightOz: 30, delicious: 0, color: 'orange'},
        { name: 'Pear', avgWeightOz: 23, color: 'green'},
        { name: 'Apple', avgWeightOz: 14, delicious: 1}
      ]);
};
