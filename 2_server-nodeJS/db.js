const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool({
    user: 'postgres',
    password: process.env.PASS,
    host: 'localhost',
    port: 5432,
    database: 'node_postgres'
});

module.exports = pool;