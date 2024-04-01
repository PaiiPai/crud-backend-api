const pokemonRouter = require("express").Router();

const {
  pokemonGet,
  pokemonCreateGet,
  pokemonCreatePost,
  pokemonEditGet,
  pokemonEditPost
} = require("../controllers/pokemonController");

pokemonRouter.get("", pokemonGet);
pokemonRouter.get("/create", pokemonCreateGet);
pokemonRouter.post("/create", pokemonCreatePost);
pokemonRouter.get("/edit/:id", pokemonEditGet);
pokemonRouter.post("/edit/:id", pokemonEditPost);

module.exports = {
  pokemonRouter,
};
