const Film = require("../models/Film");


const getAll = async (req, res) => {
    try {
      const films = await Film.find(); // Promisse
      if (films.length === 0)
        return res
          .status(404)
          .send({ message: "There's no films added here." });
      return res.send({ films });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  ////////////////////////////////////////////////
  
  const getById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const film = await Film.findById(id);
      if (!film) {
        res.status(404).json({ message: "Film not found." });
        return;
      }
      return res.send({ film });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  //////////////////////////////////////////////////
  
  const create = async (req, res) => {
    const { name, running_time, genre, director, synopsis } = req.body;
  
    if (!name || !running_time || !genre || !director || !synopsis) {
      res.status(400).send({
        message: "Please, verify every thing you entered.",
      });
      return;
    }
  
    const newFilm = await new Film({
      name,
      running_time,
      genre,
      director,
      synopsis
    });
  
    try {
      await newFilm.save();
      return res
        .status(201)
        .send({ message: "Successfully added new film!", newFilm });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  ////////////////////////////////////////////////
  
  const update = async (req, res) => {
    const { name, running_time, genre, director, synopsis } = req.body;
  
    if (!name || !running_time || !genre || !director || synopsis) {
      res.status(400).send({
        message: "Something went wrong while trying to update existed film. Please, verify every thing you entered.",
      });
      return;
    }
  
    res.film.name = name;
    res.film.running_time = running_time;
    res.film.genre = genre;
    res.film.director = director;
    res.film.synopsis = synopsis;
  
    try {
      await res.film.save();
      res.send({ message: "Succesfully updated the film!" });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  ////////////////////////////////////////////////////////////
  
  const del = async (req, res) => {
    try {
      await res.film.remove();
      return res.send({ message: "Succesfully deleted the film!" });
    } catch (err) {
      return res.status(500).send({ erro: err.message });
    }
  };

  //////////////////////////////////////////////////////////
  
  const filterByName = async (req, res) => {
    const name = req.query.name;
    if (!name) {
      res.status(400).send({ erro: "Parameter not received." });
      return;
    }
    try {
      const films = await Film.find({ name: { $regex: `${name}` } });
      return res.send({ films });
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };

  //////////////////////////////////////////////////
  
  const filterAll = async (req, res) => {
    let { name, running_time, genre, director, synopsis } = req.query;
  
    !name ? (name = "") : (name = name);
    !running_time ? (running_time = "") : (running_time = running_time);
    !genre ? (genre = "") : (genre = genre);
    !director ? (director = "") : (director = director);
    !synopsis ? (synopsis = "") : (synopsis = synopsis);
  
    try {
      const films = await Film.find({
        name: { $regex: `${name}`, $options: 'i' },
        running_time: { $regex: `${running_time}`, $options: 'i'},
        genre: { $regex: `${genre}`, $options: 'i'},
        director: { $regex: `${director}`, $options: 'i'},
        synopsis: { $regex: `${synopsis}`, $options: 'i'},
      });
  
      if (films.length === 0)
        return res.status(404).send({ erro: "Film not found." });
  
      return res.send({ films });
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };

  /////////////////////////////////////////////////////
  
  module.exports = {
    getAll,
    getById,
    create,
    update,
    del,
    filterByName,
    filterAll,
  };