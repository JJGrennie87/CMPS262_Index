const express = require("express");
const filmsRoutes = require("./src/films/routes");

const app = express();
const port = 5007;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Api is running");
})

//API Route
//http://localhost:5000/api/v1/films/

app.use("/api/v1/films", filmsRoutes);

app.listen(port, () => console.log('running on ${port}'));