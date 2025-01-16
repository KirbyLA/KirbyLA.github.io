// dialogue options now in an array \/
const dialogue = [
    "Oh, hi. Whatever you do, do NOT, click that button!", //1
    "What did you not understand about NOT, clicking it?",//2
    "I said don't click it!",//3
    "Don't, click it.",//4
    "Stop it!!!",//5
    "Please?",//6
    "*large sigh*",//7
    "I see, you're a difficult one aren't you?",//8
    "You're sOoOOOoOooO funny, huh?",//9
    "Well, two can play that game!",//10
    "HA! Can't press the button NOW.",//11
    "Now if you'll excuuuUUUUUse me, princess. I'll quickly go and do something. Don't do anything dumb while I'm gone.",//
    "Hmm? What am I going to do you ask? Well, none of your bUsinEss.",//12
    "*SLAM*",//13
    "I'm ba...",//14
    "What did you?...",//15
    "How did you?!...",//16
    "Uuuurgh",//17
    "Why are you so determined to press it?!",//18
    "Fine!",//19
    "Try this!",//20
    "Better not try something this time..."//21
];
// dialogue options now in an array /\

// empty dialogue option \/
let dialoguePause = "";
// empty dialogue option /\

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

//
setTimeout(startTalking, 1500)
function startTalking() {
    talk.innerText = dialogue[0];
}
//

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

        talk.innerText = dialogue[3];

    } else if (clickCount == 4) {

        talk.innerText = dialogue[4];

    } else if (clickCount == 5) {

        talk.innerText = dialogue[5];

    } else if (clickCount == 6) {

        talk.innerText = dialogue[6];

    } else if (clickCount == 7) {

        talk.innerText = dialogue[7];

    } else if (clickCount == 8) {

        talk.innerText = dialogue[8];

    } else if (clickCount == 9) {

        talk.innerText = dialogue[9];

    } else if (clickCount == 10) {

        talk.innerText = dialoguePause;

    } else if (clickCount == 11) {

        board.style.display = "block";

    } else if (clickCount == 13) {

        stripOfWood.style.display = "block";
        console.log(stripOfWoodX, " ", stripOfWoodY);

    } else if (clickCount == 15) {

        talk.innerText = dialogue[10];
        plank.style.display = "block";

        setTimeout(waitToTalk1, 3500)
        function waitToTalk1() {

            talk.innerText = dialogue[11];

            setTimeout(waitToTalk2, 6250);
            function waitToTalk2() {

                talk.innerText = dialogue[12];

                setTimeout(waitToTalk3, 5250);
                function waitToTalk3() {

                    talk.innerText = dialogue[13];
                    playDoorSlam()
                    
                    setTimeout(soundEffect1, 450);
                    function soundEffect1() {

                        talk.innerText = dialoguePause;
                        divCrowbar.style.display = "block";
                        mainCrowbar.style.display = "block";

                    }
                }
            }
        }
    } else if (clickCount == 20) {

        talk.innerText = dialogue[14];

    } else if (clickCount == 21) {

        talk.innerText = dialogue[15];

    } else if (clickCount == 22) {

        talk.innerText = dialogue[16];

    } else if (clickCount == 23) {

        talk.innerText = dialogue[17];

    } else if (clickCount == 24) {

        talk.innerText = dialogue[18];

    } else if (clickCount == 25) {

        talk.innerText = dialogue[19];

    } else if (clickCount == 26) {

        talk.innerText = dialogue[20];
        metalPlate.style.display = "block";

        setTimeout(waitToTalk4, 900)
        function waitToTalk4() {

            talk.innerText = dialogue[21];

            setTimeout(waitToTalk5, 1750)
            function waitToTalk5() {

                talk.innerText = dialoguePause;

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