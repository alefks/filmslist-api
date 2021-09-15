const routes = require("express").Router();
const FilmController = require("../controllers/FilmsController");
const FilmMiddleware = require("../middlewares/FilmMiddlewares");

// GET ALL
routes.get("/films", FilmController.getAll);

// GET BY ID
routes.get(
  "/films/:id",
  FilmMiddleware.verifyID,
  FilmController.getById
);

// CREATE
routes.post("/films/create", FilmController.create);

// UPDATE
routes.put(
  "/films/:id",
  FilmMiddleware.verifyID,
  FilmController.update
);


// DELETE
routes.delete(
  "/films/:id",
  FilmMiddleware.verifyID,
  FilmController.del
);

// FILTERS
routes.get("/filterByName", FilmController.filterByName);
routes.get("/filterAll", FilmController.filterAll);

module.exports = routes;