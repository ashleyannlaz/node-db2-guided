
exports.up = async function(knex) {
  await knex.schema.table('fruits',table => {
      table.string('color', 120)
  })
};

exports.down = async function(knex) {
  await knex.schema.table('fruits', table => {
      table.dropColumn('color')
  })
};
