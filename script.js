var inputAdultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("criancas");
var inputTempo = document.getElementById("tempo");
var resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let tempo = inputTempo.value;

    let qntTotalCarne = carnePorPessoa(tempo) * adultos + (carnePorPessoa(tempo) / 2 * criancas);
    let qntTotalCervejas = cervejaPorPessoa(tempo) * adultos;
    let qntTotalBebidas = bebidasPorPessoa(tempo) * adultos + (bebidasPorPessoa(tempo) / 2 * criancas);

    resultado.innerHTML = `<h4>Para ${adultos} Adultos/ ${criancas} Crianças/ Duração ${tempo} horas.</4>`
    resultado.innerHTML += ` <p>${qntTotalCarne / 1000} Kg de Carne.</p>`;
    resultado.innerHTML += ` <p>${Math.ceil(qntTotalCervejas / 350)} Latas de Cervejas. </p>`;
    resultado.innerHTML += ` <p>${Math.ceil(qntTotalBebidas / 2000)} Garrafas de Bebidas(Água/Refri). </p>`;

    inputAdultos.value = "";
    inputCriancas.value = "";
    inputTempo.value = "";
}

function carnePorPessoa(tempo){
    if(tempo >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPorPessoa(tempo){
    if(tempo >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPorPessoa(tempo){
    if(tempo >= 6){
        return 1500;
    } else{
        return 1000;
    }
}