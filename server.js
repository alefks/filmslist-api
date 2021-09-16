require("dotenv").config();
require("express-async-errors");

const express = require("express");
const connectToDb = require("./src/database/database");
const routes = require("./src/routes/routes");
const cors = require("cors");

const app = express();
const port = process.env.DB_PORT || process.env.PORT;

(async () => {
  app.use(express.json());

  // Liberar o CORS em todas as requisições
  app.use(cors());

  // Ativar todos os pre-flights
  app.options("*", cors());

  app.use(routes);

  connectToDb();
  console.info("Succesfully connected to MongoDB Atlas!");

  app.listen(port, () =>
    console.log(`Server running: http://localhost:${port}`)
  );
})();
