const img = document.querySelector("img");
const quote = document.getElementById("quote");
const auteur = document.getElementById("auteur");
const run = document.getElementById("run");

function randomQuote() {
    fetch("https://thatsthespir.it/api")
        .then(res => res.json())
        .then((data) => {
            printnote(data)
        })
}
function printnote(data) {
    img.src = data.photo;
    quote.innerHTML = data.quote;
    auteur.innerHTML = data.author;
}

randomQuote();
run.addEventListener("click", randomQuote);