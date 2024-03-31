const pokemonRouter = require("express").Router();

const {
  pokemonGet,
  pokemonCreateGet,
  pokemonCreatePost,
} = require("../controllers/pokemonController");

pokemonRouter.get("", pokemonGet);
pokemonRouter.get("/create", pokemonCreateGet);
pokemonRouter.post("/create", pokemonCreatePost);

module.exports = {
  pokemonRouter,
};
