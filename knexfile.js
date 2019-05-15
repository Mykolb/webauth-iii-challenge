// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/auth.db3' //folder created when run migrations// don't forget to add data folfer to this, creates duplicate files & err 1 if you don't!
    },
    useNullAsDefault: true,
  },
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  //add pool for foreign keys constraints though I don't think I need FK today 
  pool: {
    afterCreate: (connection, done) => {
      connection.run('PRAGMA foreign_keys = ON', done);
    }
  }

}
