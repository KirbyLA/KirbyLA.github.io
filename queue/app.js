// Video med forklaring: https://youtu.be/1ZQJZv1zv1Y

const express = require("express");
const app = express();

const session = require('express-session');
const path = require('path');

const Database = require("better-sqlite3");
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

    res.json({ message: "Ny person lagt til", info });
});

//Sikt KI Jo-bjørnarv2 kode \/
app.post('/login', (req, res) => {
    const { Brukernavn, Passord } = req.body;

    // Finn brukeren i databasen
    const user = db.prepare('SELECT * FROM adminLogin WHERE Brukernavn = ?').get(Brukernavn);

    // Sjekk om brukeren eksisterer og passordet stemmer
    if (user && user.password === Passord) {
        // Lagre brukeren i sesjonen
        req.session.user = user;
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Feil brukernavn eller passord' });
    }
});

// Middleware for å beskytte admin-ruten
function authMiddleware(req, res, next) {
    if (req.session.user) {
        next(); // Brukeren er innlogget, gå videre til neste middleware
    } else {
        res.status(401).send('Du må være innlogget for å få tilgang til dette området.');
    }
}

// Admin-rute som bare er tilgjengelig for innloggede brukere
app.get('/admin', authMiddleware, (req, res) => {
    res.send('Velkommen til admin-området');
});
//Sikt KI Jo-bjørnarv2 kode /\

app.listen(PORT, () => {
    console.log(`Server køyrer: http://localhost:${PORT}`);
});