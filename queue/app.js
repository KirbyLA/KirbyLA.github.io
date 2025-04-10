// Video med forklaring: https://youtu.be/1ZQJZv1zv1Y

const express = require("express");
const app = express();

const Database = require("better-sqlite3");
const db = new Database("køsystem.db");

const PORT = 3000;

app.use(express.static('public'));

// Eksempel på rute som hentar brukarar frå databasen (besøk http://localhost:3000/personer)
app.get("/personer", (req, res) => {
    const users = db.prepare("SELECT * FROM person").all();
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server køyrer: http://localhost:${PORT}`);
});