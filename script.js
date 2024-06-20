const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como os pais das meninas faleceram?",
        alternativas: [
            {
                texto: "no navio nafraugado, em meio a tempestade",
                afirmacao: "Os pais da Anna e Elsa morerram no navio nafraugado "
            },
            {
                texto: "Foram sequestrados pelos trols",
                afirmacao: "não foram sequestrado."
            }
        ]
    },
    {
        enunciado: "Qual das irmãs era mais velha?",
        alternativas: [
            {
                texto: "Anna",
                afirmacao: "Anna era mais nova"
            },
            {
                texto: "Elsa",
                afirmacao: "Elsa era mais velha"
            }
        ]
    },
    {
        enunciado: "Qual magia a Elsa tinha?",
        alternativas: [
            {
                texto: "gelo",
                afirmacao: "Sim, ela tinha magia de gelo, por isso usava luvas"
            },
            {
                texto: "fogo",
                afirmacao: "não,ela tinha magia de gela"
            }
        ]
    },
    {
        enunciado: "As irmas brigavam muito?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "quando ficaram adolecentes sim,pois Elsa não tinha muito paciencia"
            },
            {
                texto: "nao",
                afirmacao: "Elas brigavam bastante"
            }
        ]
    },
    {
        enunciado: "qual irmã se casou primeiro?",
        alternativas: [
            {
                texto: "Anna",
                afirmacao: "Sim, foi a Anna"
            },
            {
                texto: "Elsa",
                afirmacao: "Elsa nunca quis saber de namorado. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final de tudo..";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
