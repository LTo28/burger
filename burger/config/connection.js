const { createConnection } = require('mysql2')
require('dotenv').config()

const db = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_database
})

module.exports = db