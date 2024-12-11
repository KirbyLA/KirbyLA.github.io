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
let T11 = document.getElementById("talk11");
let T12 = document.getElementById("talk12");
// henter dialog elementene fra html /\

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
T11.style.display = "none";
T12.style.display = "none";
// skuler dialog som ikke er i bruk /\

// får tilgang til fremtidige props fra html \/
let plank = document.getElementById("plank");
let stripOfWood = document.getElementById("stripOfWood");
let board = document.getElementById("board");
let crowbar = document.getElementById("crowbar");
let crowbarUse = document.getElementById("crowbarUse");
// får tilgang til fremtidige props fra html \/

// hjemmer props til de trengs \/
plank.style.display = "none";
stripOfWood.style.display = "none";
board.style.display = "none";
crowbar.style.display = "none";
crowbarUse.style.display = "none";
// hjemmer props til de trengs /\

// tar tilgang til knappen i html \/
let knapp = document.getElementById("Button");
let knappTrykk = document.getElementById("ButtonPressed");
// tar tilgang til knappen i html /\

// sjuler knappTrykk til nødvendig \/
knappTrykk.style.display = "none";
// sjuler knappTrykk til nødvendig /\

// setter mengde klikk \/
let clickCount = 0;
// setter mengde klikk /\

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

    } else if (clickCount == 11) {

        crowbar.style.display = "block";

    } else if (clickCount == 13) {

        T10.style.display = "block";
        plank.style.display = "block";
        stripOfWood.style.display = "block";
        board.style.display = "block";

        setTimeout(waitToTalk1, 3500)
        function waitToTalk1() {

            T10.style.display = "none";
            T11.style.display = "block";

            setTimeout(waitToTalk2, 7000);
            function waitToTalk2() {

                T11.style.display = "none";
                T12.style.display = "block";

                setTimeout(waitToTalk3, 5500);
                function waitToTalk3() {

                    T12.style.display = "none";
                }
            }
        }
    }
}    // changes events that happen after clicking the button /\

function knappRetur() { // tilbake stiler knappens posisjon etter vis tid (setInterval)
    knappTrykk.style.display = "none";
    knapp.style.display = "block";
}
// Hva som kjer når man klikker knappen /\
