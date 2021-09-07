
exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
    table.increments()
    // primary key id 
    table.text('name', 128).unique().notNullable()
    //sqlite will not force
    table.decimal('avgWeightOz').notNullable()
    table.boolean('delicious')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
};
