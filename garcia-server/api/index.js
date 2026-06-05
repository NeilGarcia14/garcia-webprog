const app = require('../index');
const connectDB = require('../config/db');

let dbConnection;

module.exports = async (req, res) => {
  if (!dbConnection) {
    dbConnection = connectDB();
  }

  await dbConnection;
  return app(req, res);
};
