/* VARIABLES */
let peso;
let largo;
let ancho;
let alto;
/* EVENTOS */


requestCalc.addEventListener('submit',getData);


/* FUNCIONES */

function getData(e){
    e.preventDefault();
    let peso = e.target.peso.value;
    let largo = e.target.largo.value;
    let ancho = e.target.ancho.value;
    let alto = e.target.alto.value;
    calcData(peso,largo,ancho,alto);
}
function calcData(peso,largo,ancho,alto){
    pesoCalculo = parseFloat(((largo * ancho * alto) * peso) / 1000000);
    pesoFinal = pesoCalculo.toFixed(2);
    resultFinal(pesoFinal);
    resultAir(pesoFinal,peso);
    resultSea(pesoFinal,peso);
}
function resultFinal(resultado){
    result = pesoFinal.toString();
    resultChange = document.querySelector('.final-result');
    resultChange.innerText = result + ' libras';
}
function resultAir(resultado, peso){
    calcAir = (pesoFinal * 150) * peso;
    totalAir = calcAir.toString();
    aerialChange = document.querySelector('.aerial-result');
    aerialChange.innerText = "$" + totalAir;
}

function resultSea(resultado, peso){
    calcSea = (pesoFinal * 100) * peso;
    totalSea = calcSea.toString();
    maritimeChange = document.querySelector('.maritime-result');
    maritimeChange.innerText = "$" + totalSea;
}
