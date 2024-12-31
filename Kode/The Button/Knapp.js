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
let T13 = document.getElementById("talk13");
let SE1 = document.getElementById("soundEffect1");
let T14 = document.getElementById("talk14");
let T15 = document.getElementById("talk15");
let T16 = document.getElementById("talk16");
let T17 = document.getElementById("talk17");
let T18 = document.getElementById("talk18");
let T19 = document.getElementById("talk19");
let T20 = document.getElementById("talk20");
let T21 = document.getElementById("talk21");
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
T13.style.display = "none";
SE1.style.display = "none";
T14.style.display = "none";
T15.style.display = "none";
T16.style.display = "none";
T17.style.display = "none";
T18.style.display = "none";
T19.style.display = "none";
T20.style.display = "none";
T21.style.display = "none";
// skuler dialog som ikke er i bruk /\

// får tilgang til fremtidige props fra html \/
let plank = document.getElementById("plank");
let stripOfWood = document.getElementById("stripOfWood");
let board = document.getElementById("board");

let divCrowbar = document.getElementById("divCrowbar");
let mainCrowbar = document.getElementById("mainCrowbar");
let crowbarUse = document.getElementById("crowbarUse");

let metalPlate = document.getElementById("metalPlate");
// får tilgang til fremtidige props fra html \/

// hjemmer props til de trengs \/
plank.style.display = "none";
stripOfWood.style.display = "none";
board.style.display = "none";

divCrowbar.style.display = "none";
mainCrowbar.style.display = "none";
crowbarUse.style.display = "none";

metalPlate.style.display = "none";
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

// if crowbar is on planks, it removes them \/
let crowbarActive = true;
// if crowbar is on planks, it removes them /\

// Get's Position Data From Elements \/
// get's position data from element: plank \/
let plankPosition = plank.getBoundingClientRect();
// get's position data from element: plank /\

// get's position data from element: stripOfWood \/
let stripOfWoodPosition = stripOfWood.getBoundingClientRect();

let stripOfWoodX = stripOfWoodPosition.left + window.scrollX;
let stripOfWoodY = stripOfWoodPosition.top + window.scrollY;

console.log(document.getElementById("stripOfWood"));
console.log(stripOfWoodX, " ", stripOfWoodY);
// get's position data from element: stripOfWood /\

// get's position data from element: board \/
let boardPosition = board.getBoundingClientRect();
// get's position data from element: board /\
// Get's Position Data From Elements /\

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
        T10.style.display = "block";

    } else if (clickCount == 10) {

        T10.style.display = "none";

    } else if (clickCount == 11) {

        board.style.display = "block";

    } else if (clickCount == 13) {

        stripOfWood.style.display = "block";
        console.log(stripOfWoodX, " ", stripOfWoodY);

    } else if (clickCount == 15) {

        T11.style.display = "block";
        plank.style.display = "block";

        setTimeout(waitToTalk1, 3500)
        function waitToTalk1() {

            T11.style.display = "none";
            T12.style.display = "block";

            setTimeout(waitToTalk2, 6250);
            function waitToTalk2() {

                T12.style.display = "none";
                T13.style.display = "block";

                setTimeout(waitToTalk3, 5250);
                function waitToTalk3() {

                    T13.style.display = "none";
                    SE1.style.display = "block";
                    
                    
                    setTimeout(soundEffect1, 450);
                    function soundEffect1() {

                        SE1.style.display = "none";
                        divCrowbar.style.display = "block";
                        mainCrowbar.style.display = "block";

                    }
                }
            }
        }
    } else if (clickCount == 20) {

        T14.style.display = "block";

    } else if (clickCount == 21) {

        T14.style.display = "none";
        T15.style.display = "block";

    } else if (clickCount == 22) {

        T15.style.display = "none";
        T16.style.display = "block";

    } else if (clickCount == 23) {

        T16.style.display = "none";
        T17.style.display = "block";

    } else if (clickCount == 24) {

        T17.style.display = "none";
        T18.style.display = "block";

    } else if (clickCount == 25) {

        T18.style.display = "none";
        T19.style.display = "block";

    } else if (clickCount == 26) {

        T19.style.display = "none";
        T20.style.display = "block";

    } else if (clickCount == 27) {

        T20.style.display = "none";
        T21.style.display = "block";

    } else if (clickCount == 28) {

        T21.style.display = "none";
        // T20.style.display = "block";

    } // ide: flytt mus når for nær
}    // changes events that happen after clicking the button /\

function knappRetur() { // tilbake stiler knappens posisjon etter vis tid (setInterval)
    knappTrykk.style.display = "none";
    knapp.style.display = "block";
}
// Hva som kjer når man klikker knappen /\

// gjøre kubeinet bevegelig med å dra den med musen \/
document.addEventListener("DOMContentLoaded", () => {
    const draggableElement = document.getElementById("divCrowbar");
    const header = document.getElementById("mainCrowbar");

    header.addEventListener("mousedown", dragMouseDown);

    function dragMouseDown(e) {
        e.preventDefault();
        let pos3 = e.clientX;
        let pos4 = e.clientY;

        crowbarActive = false;

        document.addEventListener("mousemove", elementDrag);
        document.addEventListener("mouseup", closeDragElement);

        function elementDrag(e) {
            e.preventDefault();
            const pos1 = pos3 - e.clientX;
            const pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            draggableElement.style.top = (draggableElement.offsetTop - pos2) + "px";
            draggableElement.style.left = (draggableElement.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.removeEventListener("mousemove", elementDrag);
            document.removeEventListener("mouseup", closeDragElement);

            crowbarActive = true;

            // while (crowbarActive = true && ) {
                
            // }
        }
    }
});
// gjøre kubeinet bevegelig med å dra den med musen /\