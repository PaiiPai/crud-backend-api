const { Router } = require("express");
pokemonRouter = Router();
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
