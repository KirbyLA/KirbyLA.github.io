// Video med forklaring: https://youtu.be/Qbqd2jFspVI
/*
    I denne videoen utvider vi litt konseptet fra tidligere, med en litt mer 
    logisk måte å bruke tjenesten på. Vi lagar en form for dashboard, der 
    brukeren, etter innlogging, får se valg som er relevante (vis mine biler, 
    legg til bil og logg ut). 
*/

const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const Database = require("better-sqlite3");

const app = express();
const db = new Database("Pålogging.db");
const PORT = 3000;

// Middleware for å servere statiske filer fra public-mappen
app.use(express.static("public"));

// Middleware for å parse JSON-data
app.use(express.json());

// Middleware for sessions
app.use(
    session({
        secret: "hemmeligNøkkel", // Bytt til en sikker nøkkel i produksjon
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false } // Sett til true hvis du bruker HTTPS
    })
);

// Middleware for å beskytte sider bak innloggings-mur
function kreverInnlogging(req, res, next) {
    if (!req.session.bruker) {
        return res.redirect("/login.html");
    }
    next();
}

// Rute for innlogging
app.post("/login", async (req, res) => {
    const { Brukernavn, Passord } = req.body;

    const bruker = db.prepare("SELECT * FROM Bruker WHERE Brukernavn = ?").get(Brukernavn);
    if (!bruker) {
        return res.status(401).json({ message: "Feil brukernavn eller passord" });
    }

    const passordErGyldig = await bcrypt.compare(Passord, bruker.Passord);
    if (!passordErGyldig) {
        return res.status(401).json({ message: "Feil Brukernavn eller passord" });
    }

    // Lagre brukerdata i session
    req.session.bruker = { id: bruker.BrukerID, Brukernavn: bruker.Brukernavn };
    res.json({ message: "Innlogging vellykket", redirect: "/dashboard" });
});

// Rute for å logge ut
app.post("/logout", (req, res) => {
    req.session.destroy();
    res.json({ message: "Du er logget ut" });
});

// Eksempel på en beskyttet rute
app.get("/beskyttet", kreverInnlogging, (req, res) => {
    res.json({ Brukernavn: req.session.bruker.Brukernavn });
});

app.post("/leggtilperson", async (req, res) => {
    const { BrukerID, Brukernavn, Passord, Epost, Telefonnummer } = req.body;

    // Hash passordet med bcrypt
    const saltRounds = 10; // Antall runder med hashing
    const hashPassord = await bcrypt.hash(Passord, saltRounds);

    const stmt = db.prepare("INSERT INTO Bruker (BrukerID, Brukernavn, Passord, Epost, Telefonnummer) VALUES (?, ?, ?, ?, ?)");
    const info = stmt.run(BrukerID, Brukernavn, hashPassord, Epost, Telefonnummer);

    res.json({ message: "Ny person lagt til", info });
});

// Rute for å vise dashboard.html (kun for innlogga brukarar)
app.get("/dashboard", kreverInnlogging, (req, res) => {
    res.sendFile(__dirname + "/beskytta/dashboard.html");
});""

// Start serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});