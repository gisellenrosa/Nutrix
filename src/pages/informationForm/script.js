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
        var calculado = (calc - 500.00)
        return calculado.toFixed(2)
    } else if (objetivo.value === "ganhoDePeso") {
        var calculado = (calc + 500.00)
        return Number(calculado).toFixed(2)
    } else {
        return Number(calc).toFixed(2)
    }
}

function calculadoraMacroProteina(calc) {
    return (calc * 0.3).toFixed(2)
}

function calculadoraMacro(calc) {
    return (calc * 0.35).toFixed(2)
}

function imcRanks(imcpercent) {

    if(imcpercent < 18.5) {
        return 'Abaixo do Peso'

    } else if(imcpercent < 24.9) {
        return 'Normal'
    } else if(imcpercent < 29.9) {
        return 'Sobrepeso'
    } else if(imcpercent < 34.9 ) {
        return 'Obesidade I'
    } else if(imcpercent < 39.9) {
        return 'Obesidade II'
    } else {
        return 'Obesidade III'
    }
}

function calculadora() {
    var alturaMetro = altura.value / 10
    var calculoImc = peso.value / (alturaMetro * alturaMetro)
    var imcPorcento = (calculoImc * 100)
    var imc = imcPorcento.toFixed(2)
    localStorage.setItem("imc", imcRanks(imc))

    const calculo = (10 * peso.value) + (6.25 * altura.value) - (5 * idade.value)

    if (genero.value === "fem") {
        var gastocal = (calculo - 161) * frequenciaExercicio()
        var gastocalorico = Number(gastocal).toFixed(2)
        var ingestaoDeCal = ingestCal(gastocalorico)
        var macroProteina = calculadoraMacroProteina(gastocalorico)
        var macroGordura = calculadoraMacro(gastocalorico)
        var macroCarboidrato = calculadoraMacro(gastocalorico)

        localStorage.setItem("gastocalorico", gastocalorico)
        localStorage.setItem("ingestCal", ingestaoDeCal)
        localStorage.setItem("macroProteina", macroProteina)
        localStorage.setItem("macroGordura", macroGordura)
        localStorage.setItem("macroCarboidrato", macroCarboidrato)

        location.href = "../../pages/nutritionalResults"

    } else {
        var gastocal = (calculo + 5) * frequenciaExercicio()
        var gastocalorico =  Number(gastocal).toFixed(2)
        var ingestaoDeCal = ingestCal(gastocalorico)
        var macroProteina = calculadoraMacroProteina(gastocalorico)
        var macroGordura = calculadoraMacro(gastocalorico)
        var macroCarboidrato = calculadoraMacro(gastocalorico)

        localStorage.setItem("gastocalorico", gastocalorico)
        localStorage.setItem("ingestCal", ingestaoDeCal)
        localStorage.setItem("macroProteina", macroProteina)
        localStorage.setItem("macroGordura", macroGordura)
        localStorage.setItem("macroCarboidrato", macroCarboidrato)
        location.href = "../../pages/nutritionalResults"
    }

}