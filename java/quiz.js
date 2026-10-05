console.log("quiz.js carregou");
const perguntas = [
    {
        pergunta: "Quando você precisa estudar por muito tempo, o que mais te ajuda?",
        alternativas: [
            {
                texto: "Estudar por períodos curtos, fazendo pequenas pausas.",
                metodo: "pomodoro"
            },
            {
                texto: "Organizar tudo em uma estrutura dividida por partes.",
                metodo: "cornell"
            },
            {
                texto: "Visualizar as informações de forma organizada e conectada.",
                metodo: "mapas"
            },
            {
                texto: "Revisar o conteúdo várias vezes com perguntas e respostas.",
                metodo: "flashcards"
            },
            {
                texto: "Ler o conteúdo seguindo uma ordem e fazendo perguntas sobre ele.",
                metodo: "sq3r"
            },
            {
                texto: "Tentar explicar o conteúdo com palavras simples.",
                metodo: "feynman"
            }
        ]
    },

    {
        pergunta: "Como você prefere organizar suas anotações?",
        alternativas: [
            {
                texto: "Anoto apenas o essencial para revisar depois.",
                metodo: "pomodoro"
            },
            {
                texto: "Gosto de dividir a página em partes para organizar as informações.",
                metodo: "cornell"
            },
            {
                texto: "Prefiro desenhos, palavras-chave, setas e conexões.",
                metodo: "mapas"
            },
            {
                texto: "Gosto de transformar o conteúdo em perguntas e respostas.",
                metodo: "flashcards"
            },
            {
                texto: "Faço anotações enquanto leio e depois reviso o que escrevi.",
                metodo: "sq3r"
            },
            {
                texto: "Escrevo o conteúdo como se estivesse ensinando outra pessoa.",
                metodo: "feynman"
            }
        ]
    },

    {
        pergunta: "Quando você não entende um conteúdo, o que costuma fazer?",
        alternativas: [
            {
                texto: "Estudo novamente em uma sessão curta e depois faço uma pausa.",
                metodo: "pomodoro"
            },
            {
                texto: "Reorganizo minhas anotações para tentar entender melhor.",
                metodo: "cornell"
            },
            {
                texto: "Faço um esquema para visualizar como as ideias se relacionam.",
                metodo: "mapas"
            },
            {
                texto: "Crio perguntas sobre aquilo que não entendi.",
                metodo: "flashcards"
            },
            {
                texto: "Volto ao texto, faço perguntas e procuro as respostas.",
                metodo: "sq3r"
            },
            {
                texto: "Tento explicar o assunto de maneira simples, como se ensinasse alguém.",
                metodo: "feynman"
            }
        ]
    },

    {
        pergunta: "Qual dessas atividades parece mais interessante para você?",
        alternativas: [
            {
                texto: "Estudar durante 25 minutos e descansar por 5.",
                metodo: "pomodoro"
            },
            {
                texto: "Organizar minhas anotações de maneira estruturada.",
                metodo: "cornell"
            },
            {
                texto: "Criar um mapa cheio de conexões entre as ideias.",
                metodo: "mapas"
            },
            {
                texto: "Responder perguntas rápidas sobre o conteúdo.",
                metodo: "flashcards"
            },
            {
                texto: "Ler um texto seguindo etapas de leitura e revisão.",
                metodo: "sq3r"
            },
            {
                texto: "Explicar o assunto para alguém usando palavras simples.",
                metodo: "feynman"
            }
        ]
    },

    {
        pergunta: "Como você prefere revisar antes de uma prova?",
        alternativas: [
            {
                texto: "Dividindo o tempo de revisão em sessões curtas.",
                metodo: "pomodoro"
            },
            {
                texto: "Revisando minhas anotações organizadas.",
                metodo: "cornell"
            },
            {
                texto: "Olhando mapas mentais com palavras-chave.",
                metodo: "mapas"
            },
            {
                texto: "Respondendo vários flashcards.",
                metodo: "flashcards"
            },
            {
                texto: "Relendo o conteúdo e fazendo perguntas sobre ele.",
                metodo: "sq3r"
            },
            {
                texto: "Tentando explicar o conteúdo sem olhar o material.",
                metodo: "feynman"
            }
        ]
    },

    {
        pergunta: "O que mais atrapalha você durante os estudos?",
        alternativas: [
            {
                texto: "Ficar muito tempo estudando sem descansar.",
                metodo: "pomodoro"
            },
            {
                texto: "Ter muitas informações desorganizadas.",
                metodo: "cornell"
            },
            {
                texto: "Não conseguir visualizar como as informações se relacionam.",
                metodo: "mapas"
            },
            {
                texto: "Esquecer o que estudei depois de algum tempo.",
                metodo: "flashcards"
            },
            {
                texto: "Ler o conteúdo sem realmente entender o que estou lendo.",
                metodo: "sq3r"
            },
            {
                texto: "Entender quando leio, mas não conseguir explicar depois.",
                metodo: "feynman"
            }
        ]
    },

    {
        pergunta: "Se você tivesse que estudar um capítulo grande, como começaria?",
        alternativas: [
            {
                texto: "Dividiria o estudo em vários períodos menores.",
                metodo: "pomodoro"
            },
            {
                texto: "Prepararia uma página para organizar as informações.",
                metodo: "cornell"
            },
            {
                texto: "Tentaria descobrir primeiro as principais ideias e suas conexões.",
                metodo: "mapas"
            },
            {
                texto: "Transformaria as informações principais em perguntas.",
                metodo: "flashcards"
            },
            {
                texto: "Primeiro observaria o capítulo, depois faria perguntas e começaria a ler.",
                metodo: "sq3r"
            },
            {
                texto: "Leria e depois tentaria explicar o que entendi.",
                metodo: "feynman"
            }
        ]
    },

    {
        pergunta: "Qual dessas frases combina mais com você?",
        alternativas: [
            {
                texto: "Eu funciono melhor quando tenho tempo e pausas bem definidos.",
                metodo: "pomodoro"
            },
            {
                texto: "Eu gosto de organização.",
                metodo: "cornell"
            },
            {
                texto: "Eu penso melhor quando consigo visualizar as coisas.",
                metodo: "mapas"
            },
            {
                texto: "Eu gosto de testar o que lembro.",
                metodo: "flashcards"
            },
            {
                texto: "Eu gosto de entender um assunto por completo.",
                metodo: "sq3r"
            },
            {
                texto: "Eu aprendo melhor quando ensino.",
                metodo: "feynman"
            }
        ]
    },

    {
        pergunta: "Como você percebe que realmente aprendeu alguma coisa?",
        alternativas: [
            {
                texto: "Consigo manter minha concentração durante uma sessão de estudos.",
                metodo: "pomodoro"
            },
            {
                texto: "Consigo encontrar facilmente minhas informações e anotações.",
                metodo: "cornell"
            },
            {
                texto: "Consigo visualizar as ideias e como elas se conectam.",
                metodo: "mapas"
            },
            {
                texto: "Consigo responder perguntas sem olhar a resposta.",
                metodo: "flashcards"
            },
            {
                texto: "Consigo entender e lembrar o que li.",
                metodo: "sq3r"
            },
            {
                texto: "Consigo explicar o assunto para outra pessoa.",
                metodo: "feynman"
            }
        ]
    },

    {
        pergunta: "Qual seria seu estudo ideal?",
        alternativas: [
            {
                texto: "Sessões de estudo focadas com pausas entre elas.",
                metodo: "pomodoro"
            },
            {
                texto: "Anotações organizadas e fáceis de consultar.",
                metodo: "cornell"
            },
            {
                texto: "Esquemas, desenhos e conexões visuais.",
                metodo: "mapas"
            },
            {
                texto: "Perguntas e respostas para testar minha memória.",
                metodo: "flashcards"
            },
            {
                texto: "Uma leitura organizada, com perguntas, revisão e compreensão.",
                metodo: "sq3r"
            },
            {
                texto: "Aprender explicando o conteúdo com minhas próprias palavras.",
                metodo: "feynman"
            }
        ]
    }
];


let perguntaAtual = 0;

let pontuacao = {
    pomodoro: 0,
    cornell: 0,
    mapas: 0,
    flashcards: 0,
    sq3r: 0,
    feynman: 0
};


let metodoEscolhido = "";


const perguntaElemento = document.getElementById("pergunta");
const alternativasElemento = document.getElementById("alternativas");
const botaoProximo = document.getElementById("botao-proximo");

const numeroPergunta = document.getElementById("numero-pergunta");
const barraProgresso = document.getElementById("barra-progresso");

const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const metodoResultado = document.getElementById("metodo-resultado");
const descricaoResultado = document.getElementById("descricao-resultado");


function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;

    numeroPergunta.textContent =
        "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;

    barraProgresso.style.width =
        ((perguntaAtual + 1) / perguntas.length) * 100 + "%";


    alternativasElemento.innerHTML = "";

    metodoEscolhido = "";

    botaoProximo.disabled = true;


    pergunta.alternativas.forEach(function(alternativa) {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.classList.add("alternativa");

        botao.addEventListener("click", function() {

            const botoes =
                document.querySelectorAll(".alternativa");

            botoes.forEach(function(botao) {
                botao.classList.remove("selecionada");
            });


            botao.classList.add("selecionada");

            metodoEscolhido = alternativa.metodo;

            botaoProximo.disabled = false;

        });


        alternativasElemento.appendChild(botao);

    });

}


function proximaPergunta() {

    if (metodoEscolhido === "") {
        return;
    }


    pontuacao[metodoEscolhido]++;


    perguntaAtual++;


    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

}


function mostrarResultado() {

    let maiorPontuacao = 0;
    let metodoVencedor = "";


    for (let metodo in pontuacao) {

        if (pontuacao[metodo] > maiorPontuacao) {

            maiorPontuacao = pontuacao[metodo];

            metodoVencedor = metodo;

        }

    }


    const nomes = {

        pomodoro: "Pomodoro",

        cornell: "Método Cornell",

        mapas: "Mapas Mentais",

        flashcards: "Flashcards",

        sq3r: "SQ3R",

        feynman: "Técnica Feynman"

    };


    const descricoes = {

        pomodoro:
            "Você parece se concentrar melhor quando o estudo é dividido em períodos de foco e pequenas pausas. O Pomodoro pode ajudar você a manter a concentração sem deixar o estudo cansativo.",

        cornell:
            "Você gosta de organização e de ter suas informações bem estruturadas. O Método Cornell pode ajudar você a organizar anotações e revisar o conteúdo com mais facilidade.",

        mapas:
            "Você parece aprender bem quando consegue visualizar as informações e perceber as conexões entre elas. Os Mapas Mentais podem deixar o conteúdo mais fácil de visualizar e lembrar.",

        flashcards:
            "Você parece aprender bem testando sua própria memória. Os Flashcards são ótimos para revisar conceitos, definições, fórmulas e informações importantes.",

        sq3r:
            "Você parece gostar de compreender o conteúdo de maneira completa e organizada. O SQ3R ajuda a transformar a leitura em um processo mais ativo.",

        feynman:
            "Você parece aprender melhor quando precisa explicar o conteúdo com suas próprias palavras. A Técnica Feynman ajuda a identificar o que você realmente entendeu e o que ainda precisa estudar."

    };


    metodoResultado.textContent = nomes[metodoVencedor];

    descricaoResultado.textContent = descricoes[metodoVencedor];


    quiz.style.display = "none";

    resultado.style.display = "block";

}


function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = {

        pomodoro: 0,
        cornell: 0,
        mapas: 0,
        flashcards: 0,
        sq3r: 0,
        feynman: 0

    };


    resultado.style.display = "none";

    quiz.style.display = "block";


    mostrarPergunta();

}


botaoProximo.addEventListener("click", proximaPergunta);


mostrarPergunta();
