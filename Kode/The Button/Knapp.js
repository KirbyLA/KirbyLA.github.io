// dialogue options now in an array \/
const dialogue = [
    "Oh, hi. Whatever you do, do NOT, click that button!",
    "What did you not understand about NOT, clicking it?",
    "I said don't click it!",
    "Don't, click it.",
    "Stop it!!!",
    "Please?",
    "*large sigh*",
    "I see, you're a difficult one aren't you?",
    "You're sOoOOOoOooO funny, huh?",
    "Well, two can play that game!",
    "HA! Can't press the button NOW.",
    "Now if you'll excuuuUUUUUse me, princess. I'll quickly go and do something. Don't do anything dumb while I'm gone.",
    "Hmm? What am I going to do you ask? Well, none of your bUsinEss.",
    "*SLAM*",
    "I'm ba...",
    "What did you?...",
    "How did you?!...",
    "Uuuurgh",
    "Why are you so determined to press it?!",
    "Fine!",
    "Try this!",
    "Better not try this time..."
];
// dialogue options now in an array /\

// makes html element available for array \/
let talk = document.getElementById("talk");
// makes html element available for array /\

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

// gets sound from html \/
var doorSlam = document.getElementById("doorSlam");
// gets sound from html /\

// prepares sound for use \/
function playDoorSlam() {
    doorSlam.play();
}
// prepares sound for use /\

// Hva som kjer når man klikker knappen \/
knapp.addEventListener("click", knappKlikket);
function knappKlikket() {
    knappTrykk.style.display = "block";
    knapp.style.display = "none";
    setTimeout(knappRetur, 200);

    clickCount += 1; // adder klikk per klikk
    console.log("Current amount of clicks is " + clickCount + " click(s).");
    document.getElementById("clickCountDisplay").innerText = "Clicks: " + clickCount;

    // changes events that happen after clicking the button \/
    if (clickCount == 1) {

        // talk.innerText = dialogue[0]
        talk.innerText = dialogue[1];

    } else if (clickCount == 2) {

        talk.innerText = dialogue[2];

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
                    playDoorSlam()
                    
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
        metalPlate.style.display = "block";

        setTimeout(waitToTalk4, 900)
        function waitToTalk4() {

            T20.style.display = "none";
            T21.style.display = "block";

            setTimeout(waitToTalk5, 1500)
            function waitToTalk5() {

                T21.style.display = "none";

            }
        }
    }  // ide: flytt mus når for nær
}    // changes events that happen after clicking the button /\

function knappRetur() { // tilbake stiler knappens posisjon etter vis tid (setInterval)
    knappTrykk.style.display = "none";
    knapp.style.display = "block";
}
// Hva som kjer når man klikker knappen /\

// Get's Position Data From Elements \/
// get's position data from element: plank \/
let plankPosition = plank.getBoundingClientRect();

let plankX = plankPosition.left + window.scrollX;
let plankY = plankPosition.top + window.scrollY;

console.log(plank.getBoundingClientRect())
console.log(document.getElementById("plank"));
console.log(plankX, " ", plankY);
// get's position data from element: plank /\

// get's position data from element: stripOfWood \/
let stripOfWoodPosition = stripOfWood.getBoundingClientRect();

let stripOfWoodX = stripOfWoodPosition.left + window.scrollX;
let stripOfWoodY = stripOfWoodPosition.top + window.scrollY;

console.log(stripOfWood.getBoundingClientRect())
console.log(document.getElementById("stripOfWood"));
console.log(stripOfWoodX, " ", stripOfWoodY);
// get's position data from element: stripOfWood /\

// get's position data from element: board \/
let boardPosition = board.getBoundingClientRect();

let boardX = boardPosition.left + window.scrollX;
let boardY = boardPosition.top + window.scrollY;

console.log(board.getBoundingClientRect())
console.log(document.getElementById("board"));
console.log(boardX, " ", boardY);
// get's position data from element: board /\

// get's position data from element: divCrowbar \/
let divCrowbarPosition = divCrowbar.getBoundingClientRect();

let divCrowbarX = divCrowbarPosition.left + window.scrollX;
let divCrowbarY = divCrowbarPosition.top + window.scrollY;

console.log(divCrowbar.getBoundingClientRect())
console.log(document.getElementById("divCrowbar"));
console.log(divCrowbarX, " ", divCrowbarY);
// get's position data from element: divCrowbar /\

// get's position data from element: mainCrowbar \/
let mainCrowbarPosition = mainCrowbar.getBoundingClientRect();

let mainCrowbarX = mainCrowbarPosition.left + window.scrollX;
let mainCrowbarY = mainCrowbarPosition.top + window.scrollY;

console.log(mainCrowbar.getBoundingClientRect())
console.log(document.getElementById("mainCrowbar"));
console.log(mainCrowbarX, " ", mainCrowbarY);
// get's position data from element: mainCrowbar /\
// Get's Position Data From Elements /\

// gjøre kubeinet bevegelig med å dra den med musen \/
document.addEventListener("DOMContentLoaded", () => {
    const draggableElement = document.getElementById("divCrowbar");
    const header = document.getElementById("mainCrowbar");

    header.addEventListener("mousedown", dragMouseDown);

    function dragMouseDown(e) {
        e.preventDefault();
        let pos3 = e.clientX;
        let pos4 = e.clientY;

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

            if (mainCrowbarX == plankX && mainCrowbarY == plankY) {

                plank.style.display = "none";
                
            }
            
            if (mainCrowbarX == stripOfWoodX && mainCrowbarY == stripOfWoodY) {
                
                stripOfWood.style.display = "none";

            }
            
            if (mainCrowbarX == boardX && mainCrowbarY == boardY) {

                board.style.display = "none";

            }
        }
    }
});
// gjøre kubeinet bevegelig med å dra den med musen /\