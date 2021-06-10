const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "heroku_6c6ab6091e8c633",
    "b7423e856ee2eb",
    "d85eb008",
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,
    {
      host: 'us-cdbr-east-04.cleardb.com',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
