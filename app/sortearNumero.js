const menorValor = 01
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor)
}

console.log(numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')

elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')

elementoMaiorValor.innerHTML = maiorValor