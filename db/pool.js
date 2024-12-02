const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    // necessary for render.com
    rejectUnauthorized: false, // For self-signed certificates only
  },
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   database: process.env.DB_NAME,
  //   password: process.env.DB_PASSWORD,
  //   port: process.env.DB_PORT,
});

module.exports = pool;
