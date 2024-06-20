const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da aula de dança você se depara com uma bateria de celular no chão, que foi descartada incorretamente. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Ignoro, o lixo não é meu.",
                afirmacao: "É sempre importante conscientizar sobre a responsabilidade coletiva. "
            },
            {
                texto: "Decido pegar e jogar no lixo mais próximo.",
                afirmacao: "É importante demonstrar preocupação com o ambiente para preservá-lo."
            }
        ]
    },
    {
        enunciado: "Logo após, você está comprando mantimentos no supermercado e percebe que as sacolas de plástico estão disponíveis gratuitamente. O que você faz?",
        alternativas: [
            {
                texto: "Opta por levar suas próprias sacolas reutilizáveis",
                afirmacao: "Você contribui para a preservação ambiental de muitas maneiras eficientes, "
            },
            {
                texto: "Pega as sacolas de plástico oferecidas para facilitar o transporte",
                afirmacao: "Talvez usando menos de plástico descartável, tudo seria melhor."
            }
        ]
    },
    {
        enunciado: "Saindo do mercado, você encontra uma mulher carregando suas compras com sacolas reutilizaveis, vendo isso você repensa sobre os impactos do lixo no meio ambiente, e decide mudar seus hábitos diários. Como você age?",
        alternativas: [
            {
                texto: "Reduzo o consumo de plástico e começo a optar por produtos reutilizáveis.",
                afirmacao: "ajudando na redução da poluição plástica, você inncentiva os outros e faz a diferença."
            },
            {
                texto: "Continuo com meus hábitos normais, pois acredito que pequenas mudanças não fazem diferença.",
                afirmacao: "Sempre reconsidere a importância das pequenas ações individuais na preservação do meio ambiente."
            }
        ]
    },
    {
        enunciado: "Durante uma caminhada para casa, você encontra uma torneira pingando água continuamente. Como você reage?",
        alternativas: [
            {
                texto: "Tenta fechar a torneira ou notifica um funcionário do parque sobre o vazamento.",
                afirmacao: "A sua preocupação com pequenas coisas fez com que várias pessoas façam o uso correto de descarte e conservem os recursos naturais."
            },
            {
                texto: "Ignorar o vazamento, pois não é responsável pela manutenção do parque.",
                afirmacao: "Reconsiderando o impacto ambiental de pequenos gestos e a importância de agir em prol da sustentabilidade."
            }
        ]
    },
    {
        enunciado: "Você decide ir dar uma volta a praia para ver o meio ambiente, mas você encontra lixo deixado por outras pessoas. Como você lida com essa situação? ",
        alternativas: [
            {
                texto: "Recolhe o lixo encontrado para descartá-lo corretamente em um ponto de coleta.",
                afirmacao: "O seu compromisso com a conservação dos ecossistemas por ai, incentivou outras pessoas a fazerem o mesmo, ajudando o meio ambiente. Cada ajuda faz a diferença."
            },
            {
                texto: "Ignora o lixo, pois não foi você quem o deixou lá..",
                afirmacao: "Considerando o impacto ambiental coletivo de deixar o lixo em lugares não apropriados, você deveria refletir mais sobre a responsabilidade compartilhada na preservação ambiental. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
