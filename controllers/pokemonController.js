const Pokemon = require("../models/pokemon");

const pokemonGet = async (req, res) => {
  try {
    const pokemons = await Pokemon.find().sort({ id: "asc" });
    console.log(pokemons);
    res.status(200).json({
      success: true,
      pokemons,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: `Bad request: ${error}`,
    });
  }
};

const pokemonCreateGet = (req, res) => res.render("create");

const pokemonCreatePost = async (req, res) => {
  const { name, type, ability } = req.body;
  try {
    const pokemon = new Pokemon({ name, type, ability });
    const response = await pokemon.save();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: `${error}`,
    });
  }
};

const pokemonEditGet = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Pokemon.findById(id);
    res.status(200).render("edit", {
      name: data.name,
      type: data.type,
      ability: data.ability,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
}

const pokemonEditPost = (req, res) => {

}

module.exports = {
  pokemonGet,
  pokemonCreateGet,
  pokemonCreatePost,
  pokemonEditGet,
  pokemonEditPost,
};
