// Bots inventory \/
let Bot_img_Sword = document.getElementById("BotSword");
let Bot_img_Shield = document.getElementById("BotShield");
let Bot_img_Bow = document.getElementById("BotBow");
// Bots inventory /\

// Your inventory \/
let img_Sword = document.getElementById("Sword");
let img_Shield = document.getElementById("Shield");
let img_Bow = document.getElementById("Bow");
// Your inventory /\

// health of players in js \/
let botHealth = document.getElementById("botHealth");
// botHealth.value -= 10; // damage dealt
let health = document.getElementById("health");
// health.value -= 10; // damage taken
// health of players in js /\

// Results \/
let SwordW = document.getElementById("SwordWin");
let ShieldW = document.getElementById("ShieldWin");
let BowW = document.getElementById("BowWin");
let SwordL = document.getElementById("SwordLoss");
let ShieldL = document.getElementById("ShieldLoss");
let BowL = document.getElementById("BowLoss");
let SwordT = document.getElementById("SwordTie");
let ShieldT = document.getElementById("ShieldTie");
let BowT = document.getElementById("BowTie");

let W = document.getElementById("Win");
let L = document.getElementById("Loss");
let T = document.getElementById("Tie");
// let result = document.getElementById("result");
// Results /\

// Hiddes results until necessary \/
SwordW.style.display = "none";
ShieldW.style.display = "none";
BowW.style.display = "none";
SwordL.style.display = "none";
ShieldL.style.display = "none";
BowL.style.display = "none";
SwordT.style.display = "none";
ShieldT.style.display = "none";
BowT.style.display = "none";

W.style.display = "none";
L.style.display = "none";
T.style.display = "none";
// result.style.display = "none";
// Hiddes results until necessary /\

// Lager mer plass imens den ikke er i brukk \/
document.getElementById("BotChoise").style.display = "none";
document.getElementById("YourChoise").style.display = "none";
// Lager mer plass imens den ikke er i brukk /\

// definer pick### som false \/
let pickSwordChosen = false;
let pickShieldChosen = false;
let pickBowChosen = false;
// definer pick### som false /\

// actions after clicking sword \/
img_Sword.addEventListener("click", pickSword);
function pickSword() {
    pickSwordChosen = true;
    console.log("You chose Sword!");
    document.getElementById("YourChoise").style.display = "block";
    document.getElementById("YourChoise").innerText = "You sliced!";

    img_Shield.style.display = "none"; // alternativ = 
    img_Bow.style.display = "none"; // hide the others
    // img_Shield.style.visibility = "hidden"; // alternativ = visible
    // img_Bow.style.visibility = "hidden"; // hide the others

    BotAfterMe();
    // matchResults();
    img_Sword.removeEventListener("click", pickSword);
};
// actions after clicking sword /\

// actions after clicking shield \/
img_Shield.addEventListener("click", pickShield);
function pickShield() {
    pickShieldChosen = true;
    console.log("You chose Shield!");
    document.getElementById("YourChoise").style.display = "block";
    document.getElementById("YourChoise").innerText = "You blocked!";

    img_Sword.style.display = "none" // alternativ = 
    img_Bow.style.display = "none" // hide the others
    // img_Sword.style.visibility = "hidden"; // alternativ = visible
    // img_Bow.style.visibility = "hidden"; // hide the others

    BotAfterMe();
    // matchResults();
    img_Shield.removeEventListener("click", pickShield);
};
// actions after clicking shield /\


// actions after clicking bow \/
img_Bow.addEventListener("click", pickBow);
function pickBow() {
    pickBowChosen = true;
    console.log("You chose to Shoot!");
    document.getElementById("YourChoise").style.display = "block";
    document.getElementById("YourChoise").innerText = "You shot an arrow!";

    img_Shield.style.display = "none" // alternativ = 
    img_Sword.style.display = "none" // hide the others
    // img_Shield.style.visibility = "hidden"; // alternativ = visible
    // img_Sword.style.visibility = "hidden"; // hide the others

    BotAfterMe();
    // matchResults();
    img_Bow.removeEventListener("click", pickBow);
};
// actions after clicking bow /\

// randomize bots choise \/
function BotAfterMe() {
    let randomize = Math.floor( ( Math.random() * 3 ) + 1 );
    console.log(randomize);
    
    if (randomize == 1) {
        
        Bot_img_Shield.style.display = "none"; // alternativ =
        Bot_img_Bow.style.display = "none"; // hide the others
        
        console.log("Bot chose Sword");
        document.getElementById("BotChoise").style.display = "block";
        document.getElementById("BotChoise").innerText = "Bot sliced";
    
    } else if (randomize == 2) {
    
        Bot_img_Sword.style.display = "none"; // alternativ = 
        Bot_img_Bow.style.display = "none"; // ahide the others
        
        console.log("Bot chose Shield");
        document.getElementById("BotChoise").style.display = "block";
        document.getElementById("BotChoise").innerText = "Bot blocked";
    
    } else {
    
        Bot_img_Shield.style.display = "none"; // alternativ = 
        Bot_img_Sword.style.display = "none"; // hide the others
    
        console.log("Bot chose Bow");
        document.getElementById("BotChoise").style.display = "block";
        document.getElementById("BotChoise").innerText = "Bot shot an arrow";
    }

    matchResults(randomize);
}
// randomize bots choice /\

// Restart match \/
let Restart = document.getElementById("Restart");
Restart.style.visibility = "hidden";
Restart.addEventListener("click", RestartStart);
function RestartStart() {

    pickSwordChosen = false;
    pickShieldChosen = false;
    pickBowChosen = false;

    img_Sword.style.display = "block";
    img_Shield.style.display = "block";
    img_Bow.style.display = "block";

    Bot_img_Sword.style.display = "block";
    Bot_img_Shield.style.display = "block";
    Bot_img_Bow.style.display = "block";

    SwordW.style.display = "none";
    ShieldW.style.display = "none";
    BowW.style.display = "none";
    SwordL.style.display = "none";
    ShieldL.style.display = "none";
    BowL.style.display = "none";
    SwordT.style.display = "none";
    ShieldT.style.display = "none";
    BowT.style.display = "none";
    
    img_Sword.addEventListener("click", pickSword);
    img_Shield.addEventListener("click", pickShield);
    img_Bow.addEventListener("click", pickBow);

    document.getElementById("YourChoise").innerText = ""
    document.getElementById("BotChoise").innerText = ""

    Restart.style.visibility = "hidden";

    document.getElementById("BotChoise").style.display = "none";
    document.getElementById("YourChoise").style.display = "none";

}
// Restart match /\

// Shows result of match \/
function matchResults(randomize) {
    console.log("randomize er " + parseInt(randomize));
    console.log("pickSwordChosen " + pickSwordChosen);
    console.log("pickShieldChosen " + pickShieldChosen);
    console.log("pickBowChosen " + pickBowChosen);

    if (pickSwordChosen == true && randomize == 2) {

        SwordW.style.display = "block";
        botHealth.value -= 20;
        health.value -= 0;

    } else if (pickShieldChosen == true && randomize == 3) {

        ShieldW.style.display = "block";
        botHealth.value -= 20;
        health.value -= 0;

    } else if (pickBowChosen == true && randomize == 1) {

        BowW.style.display = "block";
        botHealth.value -= 20;
        health.value -= 0;

    } else if (pickSwordChosen == true && randomize == 3) {

        SwordL.style.display = "block";
        botHealth.value -= 0;
        health.value -= 20;

    } else if (pickShieldChosen == true && randomize == 1) {

        ShieldL.style.display = "block";
        botHealth.value -= 0;
        health.value -= 20;

    } else if (pickBowChosen == true && randomize == 2) {

        BowL.style.display = "block";
        botHealth.value -= 0;
        health.value -= 20;

    } else if (pickSwordChosen == true && randomize == 1) {

        SwordT.style.display = "block";
        botHealth.value -= 5;
        health.value -= 5;

    } else if (pickShieldChosen == true && randomize == 2) {

        ShieldT.style.display = "block";
        botHealth.value -= 0;
        health.value -= 0;

    } else if (pickBowChosen == true && randomize == 3) {

        BowT.style.display = "block";
        botHealth.value -= 20;
        health.value -= 20;
        
    }

    Restart.style.visibility = "visible";
    removeTextAfterClick();
    endGame();
}
// let resultOptions = ["Cut clean through!", "Invisible!", "Headshot!", "Camping...", "Tis' but a scratch!", "Hacker.", "Clash of Swords", "Watcha' Blockin'?", "Double Kill!"];
// for(let OptionNr = 0; OptionNr < resultOptions.length; OptionNr++) {}
// Shows result of match /\

// removes introducing text after starting \/
let introText = document.getElementById("introText");
function removeTextAfterClick() {
    introText.style.display = "none";
}
// removes introducing text after starting /\

// stops game when someone dies \/
function endGame() {
    console.log(botHealth.value, botHealth)
    console.log(health.value, health)
    if (botHealth.value <= 0 && health.value <= 0) {

        console.log("if bot + Health");

        Restart.style.display = "none";

        img_Sword.removeEventListener("click", pickSword);
        img_Shield.removeEventListener("click", pickShield);
        img_Bow.removeEventListener("click", pickBow);

        SwordW.style.display = "none";
        ShieldW.style.display = "none";
        BowW.style.display = "none";
        SwordL.style.display = "none";
        ShieldL.style.display = "none";
        BowL.style.display = "none";
        SwordT.style.display = "none";
        ShieldT.style.display = "none";
        BowT.style.display = "none";
        
        T.style.display = "block";

        Replay.style.display = "block";

    } else if (health.value <= 0) {

        console.log("if Health");

        Restart.style.display= "none";

        img_Sword.removeEventListener("click", pickSword);
        img_Shield.removeEventListener("click", pickShield);
        img_Bow.removeEventListener("click", pickBow);

        SwordW.style.display = "none";
        ShieldW.style.display = "none";
        BowW.style.display = "none";
        SwordL.style.display = "none";
        ShieldL.style.display = "none";
        BowL.style.display = "none";
        SwordT.style.display = "none";
        ShieldT.style.display = "none";
        BowT.style.display = "none";

        L.style.display = "block";

        Replay.style.display = "block";

    } else if (botHealth.value <= 0) {

        console.log("if botHealth");

        Restart.style.display= "none";

        img_Sword.removeEventListener("click", pickSword);
        img_Shield.removeEventListener("click", pickShield);
        img_Bow.removeEventListener("click", pickBow);

        SwordW.style.display = "none";
        ShieldW.style.display = "none";
        BowW.style.display = "none";
        SwordL.style.display = "none";
        ShieldL.style.display = "none";
        BowL.style.display = "none";
        SwordT.style.display = "none";
        ShieldT.style.display = "none";
        BowT.style.display = "none";

        W.style.display = "block";

        Replay.style.display = "block";
    }
}
// stops game when someone dies /\

let Replay = document.getElementById("Replay");
Replay.style.display = "none";
Replay.addEventListener("click", StartReplay);
function StartReplay() {
    location.reload();
}

// 05.12.2024 Har fått runde-resultatet til å fungere; trenger fortsatt mer job
// 06.12.2024 fikset resultatene så de viser rett tekst, fikset på reset knappen så den fungerer anderledes, fårandret på utsene så det er slått og addet ekstra tekst.