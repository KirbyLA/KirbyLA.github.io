// Video med forklaring: https://youtu.be/1ZQJZv1zv1Y

const express = require("express");
const session = require('express-session');
const bcrypt = require("bcrypt");
const Database = require("better-sqlite3");
const path = require('path');

const app = express();
const db = new Database("køsystem.db");
const PORT = 3000;

app.use(express.json());

app.use(express.static('public'));

app.use(session({
    secret: 'hemmelignøkkel',
    resave: false,
    saveUninitialized: true,
}));

// Eksempel på rute som hentar brukarar frå databasen (besøk http://localhost:3000/personer)
app.get("/personer", (req, res) => {
    const users = db.prepare("SELECT * FROM person").all();
    res.json(users);
});

app.post("/nyperson", (req, res) => { // sto tidligere async her
    const { navn } = req.body;
    console.log(navn)
    const stmt = db.prepare("INSERT INTO person (navn) VALUES (?)");
    const info = stmt.run(navn);

    res.json({ message: "Du er nå i køen", info });
});

app.post("/slettperson", (req, res) => {
    const { id } = req.body;
    console.log(id)
    const stmt = db.prepare("DELETE FROM person");
    const info = stmt.run(id);

    res.json({ message: "Person slettet fra køen", info });
});

//Sikt KI Jo-bjørnarv2 kode redigert \/
app.post('/login', async (req, res) => {
    const { Brukernavn, Passord } = req.body;

    // hasher passordet
    // const saltRounds = 10;
    // const hashPassord = await bcrypt.hash(Passord, saltRounds);

    // Finn brukeren i databasen
    const bruker = db.prepare('SELECT * FROM adminLogin WHERE Brukernavn = ?').get(Brukernavn);

    // Sjekk om brukeren eksisterer og passordet stemmer
    if (!bruker) {
        return res.status(401).json({ message: "Feil brukernavn eller passord" });
    }
    
    const brukerPass = db.prepare('SELECT * FROM adminLogin WHERE Passord = ?').get(Passord);
    // const gyldigPassord = await bcrypt.compare(Passord, bruker.Passord);
    if (!brukerPass) {
        return res.status(401).json({ message: 'Feil brukernavn eller passord' });
    }

    //lagre brukerdata i session
    req.session.bruker = { id: bruker.Passord, Brukernavn: bruker.Brukernavn};
    res.json({ message: "Innlogging vellykket!" });
});

// Middleware for å beskytte admin-ruten
function kreverInnlogging(req, res, next) {
    if (req.session.bruker) {
        next(); // Brukeren er innlogget, gå videre til neste middleware
    } else {
        res.status(401).send('Du må være innlogget for å få tilgang til dette området.');
    }
}

// Admin-rute som bare er tilgjengelig for innloggede brukere
app.get("/admin", kreverInnlogging, (req, res) => {
    res.sendFile(__dirname + "/admin/admin.html");
});
//Sikt KI Jo-bjørnarv2 kode redigert /\

app.listen(PORT, () => {
    console.log(`Server køyrer: http://localhost:${PORT}`);
});