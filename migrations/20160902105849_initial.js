
exports.up = function(knex, Promise) {
  return knex.schema.createTable('taco_toppings', function (table){
    table.increments();
    table.integer('price_in_cents');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('taco_toppings', function (table){
    table.dropColumn('price_in_cents')
  })
};
