// tar tilgang til knappen i html \/
let knapp = document.getElementById("Button");
let knappTrykk = document.getElementById("ButtonPressed");
// tar tilgang til knappen i html /\

// setter mengde klikk \/
let clickCount = 0;
// setter mengde klikk /\

// sjuler knappTrykk til nødvendig \/
knappTrykk.style.display = "none";
// sjuler knappTrykk til nødvendig /\

// Hva som kjer når man klikker knappen \/
knapp.addEventListener("click", knappKlikket);
function knappKlikket() {
    knappTrykk.style.display = "block";
    knapp.style.display = "none";
    setInterval(knappRetur, 100);
    clickCount += 1; // adder klikk per klikk
    console.log("Current amount of clicks is " + clickCount + " click(s).");
}

function knappRetur() { // tilbake stiler knappens posisjon etter vis tid (setInterval)
    knappTrykk.style.display = "none";
    knapp.style.display = "block";
}
// Hva som kjer når man klikker knappen /\
