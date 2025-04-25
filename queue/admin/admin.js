document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Hent brukernavn fra session (hvis tilgjengelig)
        const response = await fetch("/admin");
        if (!response.ok) {
            throw new Error("Kunne ikke hente brukernavn");
        }
        const data = await response.json();
        document.getElementById("Brukernavn").textContent = data.Brukernavn;
    } catch (error) {
        console.error("Feil:", error);
    }

    // Logg ut-knapp
    document.getElementById("logoutButton").addEventListener("click", async () => {
        try {
            const response = await fetch("/logout", { method: "POST" });
            if (response.ok) {
                alert("Du er logget ut.");
                window.location.href = "/login.html";
            } else {
                alert("Kunne ikke logge ut.");
            }
        } catch (error) {
            console.error("Feil under utlogging:", error);
        }
    });
});