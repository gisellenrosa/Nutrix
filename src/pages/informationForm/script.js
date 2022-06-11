var peso = document.querySelector("#peso")
var idade = document.querySelector("#idade")
var altura = document.querySelector("#altura")
var genero = document.querySelector("#genero")
var objetivo = document.querySelector("#objetivo")
var frequencia = document.querySelector("#frequencia")

function frequenciaExercicio() {
    if (frequencia.value === "sedentario") {
        return 1.2
    } else if (frequencia.value === "exercicioLeve") {
        return 1.375
    } else {
        return 1.55
    }
}

function ingestCal(calc) {
    if (objetivo.value === "perdaDePeso") {
        return (calc - 500).toFixed(2)
    } else if (objetivo.value === "ganhoDePeso") {
        return (calc + 500).toFixed(2)
    } else {
        return calc.toFixed(2)
    }
}

function calculadoraMacroProteina(calc) {
    return calc * 0.3
}

function calculadoraMacro(calc) {
    return calc * 0.35
}

function calculadora() {
    var alturaMetro = altura.value / 10
    var calculoImc = peso.value / (alturaMetro * alturaMetro)
    var imcPorcento = (calculoImc * 100)
    var imc = imcPorcento.toFixed(2)
    localStorage.setItem("imc", imc)

    const calculo = (10 * peso.value) + (6.25 * altura.value) - (5 * idade.value)

    if (genero.value === "fem") {
        var gastoFem = (calculo - 161) * frequenciaExercicio()
        var ingestaoDeCal = ingestCal(gastoFem)
        var macroProteina = calculadoraMacroProteina(gastoMasc)
        localStorage.setItem("gastoFem", gastoFem)
        localStorage.setItem("ingestCal", ingestaoDeCal)
        localStorage.setItem("macroProteina", macroProteina)
        location.href = "../../nutritionalResults"

    } else {
        var gastoMasc = (calculo + 5) * frequenciaExercicio()
        var ingestaoDeCal = ingestCal(gastoMasc)
        var macroProteina = calculadoraMacroProteina(gastoMasc)
        localStorage.setItem("gastoMasc", gastoMasc)
        localStorage.setItem("ingestCal", ingestaoDeCal)
        localStorage.setItem("macroProteina", macroProteina)
        location.href = "../../pages/nutritionalResults"
    }

}