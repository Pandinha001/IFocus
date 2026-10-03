const dataAtual = new Date();
const diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth();
let anoAtual = dataAtual.getFullYear();
const diaSemanaAtual = dataAtual.getDay();

const nomeMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function desenharCalendario() {
    const celulas = document.querySelectorAll("td.coluna-calendario");
    for (let i = 0; i < celulas.length; i++) {
        celulas[i].textContent = "";
    }

    const tituloCalendario = document.getElementById("titulo-calendario");
    const nomeMes = nomeMeses[mesAtual];
    const mesAno = nomeMes + "-" + anoAtual;
    tituloCalendario.textContent = mesAno;

    const diasNoMes = new Date(anoAtual, mesAtual + 1 , 0);
    const ultimoDiaDoMes = diasNoMes.getDate();
    const primeiroDiaMes = new Date(anoAtual, mesAtual, 1);
    const diaSemanaPrim_DiaMes = primeiroDiaMes.getDay();

   
    let posicao = diaSemanaPrim_DiaMes;
    for (let dia = 1; dia <= ultimoDiaDoMes; dia++) {
        celulas[posicao].textContent = dia;
        posicao += 1;

    }

    
}

desenharCalendario();

document.getElementById("proximo").addEventListener("click", proximoMes);

function proximoMes() {

    mesAtual++;
    if (mesAtual > 11) {
        mesAtual = 0;
        anoAtual++;
    }
   
    desenharCalendario();
}

document.getElementById("anterior"). addEventListener("click", mesAnterior);

function mesAnterior() {
    mesAtual--;
    if (mesAtual < 0) {
        mesAtual = 11;
        anoAtual--;
    }

    desenharCalendario();
}




