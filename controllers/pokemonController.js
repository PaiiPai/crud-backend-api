const Pokemon = require("../models/pokemon");

const pokemonGet = (req, res) => {
  res.status(200).json({
    name: "Charmander",
    type: "Fire",
    ability: "Blaze",
  });
};

const pokemonCreateGet = (req, res) => res.render("create");

const pokemonCreatePost = async (req, res) => {
  const { name, type, ability } = req.body;
  try {
    const pokemon = new Pokemon({ name, type, ability });
    const response = await pokemon.save();
    
    res.status(200).json({
      success: true,
    })
  } catch (error) {
    res.status(400).json({
      error: `${error}`
    });
  }
};

module.exports = {
  pokemonGet,
  pokemonCreateGet,
  pokemonCreatePost,
};
