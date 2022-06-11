let nextButton = document.getElementById('next-button');

nextButton.onclick = function() {
    window.location = '../mealsPerDay';
}

var imc = localStorage.getItem("imc")
var gastocal = localStorage.getItem("gastocalorico");
var ingestCal = localStorage.getItem("ingestCal")
var macroProteina = localStorage.getItem("macroProteina")
var macro = localStorage.getItem("macro")

document.body.querySelector("#gastocalorico").innerHTML = gastocal + " Kcal";
document.body.querySelector("#ingestaocalorica").innerHTML = ingestCal + " Kcal";
document.body.querySelector("#macroproteina").innerHTML = macroProteina + " g";
document.body.querySelector(".macro").innerHTML = macro + " g";
document.body.querySelector(".macro2").innerHTML = macro + " g";
document.body.querySelector("#imc").innerHTML = imc + " %";