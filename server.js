const express = require("express");
const connectToDb = require("./src/database/database");
require("dotenv").config();

const app = express();
const port = process.env.DB_PORT;

app.use(express.json());

connectToDb();

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));