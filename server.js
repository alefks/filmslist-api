require("dotenv").config();

const express = require("express");
const connectToDb = require("./src/database/database");
const routes = require("./src/routes/routes");


const app = express();
const port = process.env.DB_PORT;

connectToDb();
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));