const mongoose = require("mongoose");
const axios = require("axios");
const { Schema } = mongoose;

typeValidator = async (v) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/ability?limit=5000`);
    const abilities = [];

    for (ability of response.data.results) {
      abilities.push(ability.name);
    }
    return abilities.includes(v);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
  }
};

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "normal",
      "fighting",
      "flying",
      "poison",
      "ground",
      "rock",
      "bug",
      "ghost",
      "steel",
      "fire",
      "water",
      "grass",
      "electric",
      "psychic",
      "ice",
      "dragon",
      "dark",
      "fairy",
    ],
  },
  ability: {
    type: String,
    required: true,
    validate: {
        validator: typeValidator,
    }
  },
});

pokemonSchema.pre("save", typeValidator);

const Pokemon = mongoose.model("pokemon", pokemonSchema);
module.exports = Pokemon;
