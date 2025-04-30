async function loggInn(event) {
    event.preventDefault(); // Forhindre at formen sender data på den tradisjonelle måten

    const Brukernavn = document.getElementById('Brukernavn').value;
    const Passord = document.getElementById('Passord').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Brukernavn, Passord }),
        });

        const result = await response.json();

        if (result.success) {
            alert(result.message);
            window.location.href = "/admin"; // Send brukeren til admin-området
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Feil under innlogging:', error);
    }
}