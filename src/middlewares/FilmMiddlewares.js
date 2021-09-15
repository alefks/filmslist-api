const mongoose = require("mongoose");
const Film = require("../models/Film");

const verifyID = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Invalid ID." });
    return;
  }

  try {
    const film = await Film.findById(id);
    if(!film){
        return res.status(404).send({MiddlewareError: "Film not found."})
    }
    res.film = film
  } catch (err) {
    return res.status(500).send({error: err})
  }

  next();
};

module.exports = { verifyID };