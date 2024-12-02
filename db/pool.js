const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    // necessary for render.com
    rejectUnauthorized: false, // For self-signed certificates only
  },
});

module.exports = pool;
