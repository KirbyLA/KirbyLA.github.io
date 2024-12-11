// henter dialog elementene fra html \/
let T1 = document.getElementById("talk1");
let T2 = document.getElementById("talk2");
let T3 = document.getElementById("talk3");
let T4 = document.getElementById("talk4");
let T5 = document.getElementById("talk5");
let T6 = document.getElementById("talk6");
let T7 = document.getElementById("talk7");
let T8 = document.getElementById("talk8");
let T9 = document.getElementById("talk9");
let T10 = document.getElementById("talk10");
// henter dialog elementene fra html /\

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

// skuler dialog som ikke er i bruk \/
T2.style.display = "none";
T3.style.display = "none";
T4.style.display = "none";
T5.style.display = "none";
T6.style.display = "none";
T7.style.display = "none";
T8.style.display = "none";
T9.style.display = "none";
T10.style.display = "none";
// skuler dialog som ikke er i bruk /\

// Hva som kjer når man klikker knappen \/
knapp.addEventListener("click", knappKlikket);
function knappKlikket() {
    knappTrykk.style.display = "block";
    knapp.style.display = "none";
    setTimeout(knappRetur, 200);

    clickCount += 1; // adder klikk per klikk
    console.log("Current amount of clicks is " + clickCount + " click(s).");

    // changes events that happen after clicking the button \/
    if (clickCount == 1) {

        T1.style.display = "none";
        T2.style.display = "block";

    } else if (clickCount == 2) {

        T2.style.display = "none";
        T3.style.display = "block";

    } else if (clickCount == 3) {

        T3.style.display = "none";
        T4.style.display = "block";

    } else if (clickCount == 4) {

        T4.style.display = "none";
        T5.style.display = "block";

    } else if (clickCount == 5) {

        T5.style.display = "none";
        T6.style.display = "block";

    } else if (clickCount == 6) {

        T6.style.display = "none";
        T7.style.display = "block";

    } else if (clickCount == 7) {

        T7.style.display = "none";
        T8.style.display = "block";

    } else if (clickCount == 8) {

        T8.style.display = "none";
        T9.style.display = "block";

    } else if (clickCount == 9) {

        T9.style.display = "none";

    } else if (clickCount == 13) {

        T10.style.display = "block";

    }
    // changes events that happen after clicking the button /\
}

function knappRetur() { // tilbake stiler knappens posisjon etter vis tid (setInterval)
    knappTrykk.style.display = "none";
    knapp.style.display = "block";
}
// Hva som kjer når man klikker knappen /\
