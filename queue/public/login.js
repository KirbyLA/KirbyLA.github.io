async function loggInn(event) {
    event.preventDefault();

    const Brukernavn = document.getElementById("Brukernavn").value;
    const Passord = document.getElementById("Passord").value;

    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ Brukernavn, Passord })
    });

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
        // window.location.href = "/beskyttet"; // Tidlegare testkode for å sjekke innlogging
        window.location.href = result.redirect; // Omdiriger til dashboard-sida
    } else {
        alert(result.message);
    }
}
