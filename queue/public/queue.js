
async function hentPerson() {
    const res = await fetch('/personer');
    const data = await res.json();
    
    // For testing
    console.log(data[0].navn);
    // console.log(data[1]);

    for (let person of data) {
        console.log(person.navn);
        let listeElement = document.createElement("li");
        listeElement.innerText = person.navn;
        document.querySelector("#person").appendChild(listeElement);
    }

    // Alternativ for-løkke
    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i].registreringsnummer);
    //     let listeElement = document.createElement("li");
    //     listeElement.innerText = data[i].registreringsnummer + ": " + data[i].merke + ", " + data[i].modell;
    // }
}

hentPerson(); 