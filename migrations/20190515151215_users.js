
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
      //create auto id pk
      tbl.increments();

      //fields
      //username 
      tbl
      .string('username', 128)
      .notNullable()// input required
      .unique(); //name can't be repeated
      //password 
      tbl
      .string('password', 128)
      .notNullable()// input required 
      //department
      tbl 
      .string('department', 255)
      .notNullable() //input required 
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
