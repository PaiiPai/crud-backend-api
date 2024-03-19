const express = require("express");
const app = express();
const { pokemonRouter } = require("./routes/pokemonRouter");
const mongoose = require("mongoose");

// connect to MongoDB and listen to port 3000
const port = 3000;
const host = "localhost";
const user = encodeURIComponent("paipai");
const password = encodeURIComponent("Choco95%");
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.cfktonb.mongodb.net/pokemondb`)
.then(res => app.listen(port, host, () => console.log(`Listening on port http://${host}:${port}/`)))
.catch(e => console.log(`Error: database connection failed | ${e}`));

// use ejs
app.set("view engine", "ejs");

// use middleware
app.use(express.json());

// use routes
app.get("/", (req, res) => res.redirect("/pokemon"));
app.use("/pokemon", pokemonRouter);
