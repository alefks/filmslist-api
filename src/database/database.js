const mongoose = require("mongoose");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbChar = process.env.DB_CHAR;

const db_uri = `mongodb+srv://${dbUser}:${dbPassword}@clusterfilmslist.${dbChar}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectToDb = () => {
  mongoose.connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectToDb;
