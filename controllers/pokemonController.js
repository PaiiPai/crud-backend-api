const pokemonGet = (req, res) => {
  res.status(200).json({
    name: "Charmander",
    type: "Fire",
    ability: "Blaze",
  });
};

const pokemonCreateGet = (req, res) => res.render("create");

const pokemonCreatePost = (req, res) => {
  console.log(req.body);
};

module.exports = {
  pokemonGet,
  pokemonCreateGet,
  pokemonCreatePost,
};
