## SET UP ENVIRONMENT
[x] yarn init (set up files)
[x] yarn install (node modules)
[x] yarn add express, helmet, morgan 
[x] yarn add nodemon --dev (for deployment)
[x] yarn add dotenv
[x] yarn add knex sqlite3
[x] yarn add bcryptjs
[] add script: 
 "scripts": {
    "server": "nodemon index.js", (auto updates server)
    "start": "node index.js"
  },
[x] install yarn add express-session
[x] yarn add connect-session-knex
[x] yarn add cors (to connect to react app)
[x] yarn add jsonwebtoken
[] npx gitignore node (to create a gitignore file)

## ORGANIZATION
[x] server file 
[x] index file 
[x] routes folder
    [x] routes files
    [x] models
[] migrations
[x] knex file
[] seeds files 
[x] data folder
[] dbConfig file 

##MIGRATIONS (way to recreate your database to particular point in time)

- `npx knex` or  shows command list 
- run `npx  knex init` or ``yarn knex init ` to generate `knexfile.js`
- modify `knexfile.js` to config our db connections
- remove staging and production configs from `knexfile.js`
- run `npx knex migrate:make create_name_of_table` 
- make a migration for each db schema change 
- run `npx knex migrate:latest` to update changes made to table 
- SAVE FILES AND CHECK YOUR SERVER
- need to create a migration for every changes made, i.e. adding email or creating another table, etc
- `npx knex migrate:rollback` deletes last migration added 


##TO SEED

- `npx knex seed:make name of table 
- can add numbers to order seeds
- `npx knex seed: run`
