// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:1234@localhost:5433/alouettes'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};