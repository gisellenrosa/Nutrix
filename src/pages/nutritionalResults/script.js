let nextButton = document.getElementById('next-button');

nextButton.onclick = function() {
    window.location = '../mealsperDay';
}

var imc = localStorage.getItem("imc")
var gastocal = localStorage.getItem("gastocalorico");
var ingestCal = localStorage.getItem("ingestCal")
var macroProteina = localStorage.getItem("macroProteina")
var macroGordura = localStorage.getItem("macroGordura")
var macroCarboidrato = localStorage.getItem("macroCarboidrato")


document.body.querySelector("#gastocalorico").innerHTML = gastocal + " Kcal";
document.body.querySelector("#ingestaocalorica").innerHTML = ingestCal + " Kcal";
document.body.querySelector("#macroproteina").innerHTML = Number(macroProteina / 4).toFixed() + " g";
document.body.querySelector(".macro").innerHTML = Number(macroGordura / 9).toFixed() + " g";
document.body.querySelector(".macro2").innerHTML = Number(macroCarboidrato / 4).toFixed() + " g";
document.body.querySelector("#imc").innerHTML = imc;