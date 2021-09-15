const routes = require("express").Router();
const FilmController = require("../controllers/FilmsController");

routes.get("/films", FilmController.getAll);