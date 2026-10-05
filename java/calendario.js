const dataAtual = new Date();
const diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth();
let anoAtual = dataAtual.getFullYear();
const diaSemanaAtual = dataAtual.getDay();

let dataSelecionada = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate());

const nomeMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function formatarDataChave(dateObj) {
    const ano = dateObj.getFullYear();
    const mes = String(dateObj.getMonth() + 1).padStart(2, '0');
    const dia = String(dateObj.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

function obterDomingo(data) {
    // Cria uma cópia limpa da data recebida
    const d = new Date(data.getFullYear(), data.getMonth(), data.getDate());
    const diaDaSemana = d.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

    // Subtrai os dias decorridos desde o Domingo
    d.setDate(d.getDate() - diaDaSemana);
    
    return d;
}

function desenharCalendario() {
    const celulas = document.querySelectorAll("td.coluna-calendario");
    for (let i = 0; i < celulas.length; i++) {
        celulas[i].textContent = "";
        celulas[i].classList.remove("dia-ativo");
    }

    const tituloCalendario = document.getElementById("titulo-calendario");
    const nomeMes = nomeMeses[mesAtual];
    const mesAno = nomeMes + "-" + anoAtual;
    tituloCalendario.textContent = mesAno;

    const diasNoMes = new Date(anoAtual, mesAtual + 1 , 0);
    const ultimoDiaDoMes = diasNoMes.getDate();
    const primeiroDiaMes = new Date(anoAtual, mesAtual, 1);
    const diaSemanaPrim_DiaMes = primeiroDiaMes.getDay();

    const chaveDataSelecionada = formatarDataChave(dataSelecionada);
   
    let posicao = diaSemanaPrim_DiaMes;
    for (let dia = 1; dia <= ultimoDiaDoMes; dia++) {
        celulas[posicao].textContent = dia < 10 ? "0" +  dia : dia ;

        const dataComparacao = new Date(anoAtual, mesAtual, dia);
        if (formatarDataChave(dataComparacao) === chaveDataSelecionada) {
            celulas[posicao].classList.add("dia-ativo");
        }

        posicao += 1;



    }

    
}



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

function carregarDadosDaSemana() {
    const domingo = obterDomingo(dataSelecionada); // Mudou aqui

    const blocosDias = document.querySelectorAll('[data-dia-offset]');
    
    blocosDias.forEach(bloco => {
        const offset = parseInt(bloco.getAttribute('data-dia-offset'), 10);
        
        // Calcula a data a partir do Domingo
        const dataDoDia = new Date(domingo);
        dataDoDia.setDate(domingo.getDate() + offset);
        const chaveData = formatarDataChave(dataDoDia);

        const celulasEditaveis = bloco.querySelectorAll('[contenteditable="true"]');
        
        celulasEditaveis.forEach((celula, index) => {
            const customIndex = celula.getAttribute('data-index') || index;
            const chaveStorage = `agenda_${chaveData}_${customIndex}`;
            const conteudoSalvo = localStorage.getItem(chaveStorage);

            celula.innerText = conteudoSalvo ? conteudoSalvo : '';
        });
    });

    // Bloco de Observações da Semana (usando a data do Domingo como chave da semana)
    const blocoObs = document.querySelector('.bloco-observacoes');
    if (blocoObs) {
        const chaveSemana = `obs_semana_${formatarDataChave(domingo)}`;
        const celulasObs = blocoObs.querySelectorAll('[contenteditable="true"]');
        celulasObs.forEach((celula, index) => {
            const customIndex = celula.getAttribute('data-index') || index;
            const chaveStorage = `${chaveSemana}_${customIndex}`;
            const conteudoSalvo = localStorage.getItem(chaveStorage);

            celula.innerText = conteudoSalvo ? conteudoSalvo : '';
        });
    }
}

// Salva o texto automaticamente no localStorage ao digitar
function configurarSalvamentoAutomatico() {
    const celulasEditaveis = document.querySelectorAll('[contenteditable="true"]');
    
    celulasEditaveis.forEach((celula, index) => {
        celula.addEventListener('input', () => {
            const domingo = obterDomingo(dataSelecionada); // Mudou aqui
            const blocoPai = celula.closest('[data-dia-offset]');
            
            let chaveStorage = '';

            if (blocoPai) {
                const offset = parseInt(blocoPai.getAttribute('data-dia-offset'), 10);
                const dataDoDia = new Date(domingo);
                dataDoDia.setDate(domingo.getDate() + offset);
                
                const chaveData = formatarDataChave(dataDoDia);
                const customIndex = celula.getAttribute('data-index') || index;
                chaveStorage = `agenda_${chaveData}_${customIndex}`;
            } else if (celula.closest('.bloco-observacoes')) {
                const chaveSemana = `obs_semana_${formatarDataChave(domingo)}`;
                const customIndex = celula.getAttribute('data-index') || index;
                chaveStorage = `${chaveSemana}_${customIndex}`;
            }

            if (chaveStorage) {
                localStorage.setItem(chaveStorage, celula.innerText);
            }
        });
    });
}

// ==========================================
// 5. EVENTO DE CLIQUE NO CALENDÁRIO
// ==========================================
function configurarCliqueCalendario() {
    const tabelaCalendario = document.querySelector(".tabela-calendario");
    
    tabelaCalendario.addEventListener("click", (e) => {
        const td = e.target.closest("td.coluna-calendario");
        if (!td || !td.textContent.trim()) return;

        const diaClicado = parseInt(td.textContent.trim(), 10);
        
        // Atualiza a data selecionada com o dia clicado
        dataSelecionada = new Date(anoAtual, mesAtual, diaClicado);
        
        // Redesenha o calendário para atualizar o círculo do dia-ativo
        desenharCalendario();

        // Recarrega as tabelas para exibir os dados da semana do dia clicado
        carregarDadosDaSemana();
    });
}

// ==========================================
// 6. INICIALIZAÇÃO DA PÁGINA
// ==========================================
desenharCalendario();
configurarSalvamentoAutomatico();
configurarCliqueCalendario();
carregarDadosDaSemana();



