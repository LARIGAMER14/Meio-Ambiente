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
                afirmacao: "Pode não ter se sentido diretamente responsável, mas é importante conscientizar sobre a responsabilidade coletiva. "
            },
            {
                texto: "Decido pegar e jogar no lixo mais próximo.",
                afirmacao: "Demonstrou preocupação com o ambiente e agiu para preservá-lo."
            }
        ]
    },
    {
        enunciado: "Logo após, você está comprando mantimentos no supermercado e percebe que as sacolas de plástico estão disponíveis gratuitamente. O que você faz?",
        alternativas: [
            {
                texto: "Opta por levar suas próprias sacolas reutilizáveis",
                afirmacao: "Está contribuindo ativamente para a redução da poluição plásticaEscolhe reduzir o consumo de plástico e contribuir para a preservação ambiental."
            },
            {
                texto: "Pega as sacolas de plástico oferecidas para facilitar o transporte",
                afirmacao: "Pode considerar formas alternativas de transporte dos produtos que não envolvam o uso de plástico descartável."
            }
        ]
    },
    {
        enunciado: "Saindo do mercado, você encontra uma mulher carregando suas compras com sacolas reutilizaveis, vendo isso você repensa sobre os impactos do lixo no meio ambiente, e decide mudar seus hábitos diários. Como você age?",
        alternativas: [
            {
                texto: "Reduzo o consumo de plástico e começo a optar por produtos reutilizáveis.",
                afirmacao: "Está contribuindo ativamente para a redução da poluição plástica."
            },
            {
                texto: "Continuo com meus hábitos normais, pois acredito que pequenas mudanças não fazem diferença.",
                afirmacao: "Pode reconsiderar a importância das pequenas ações individuais na preservação do meio ambiente."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você decide ir dar uma volta a praia para ver o meio ambiente, mas você encontra lixo deixado por outras pessoas. Como você lida com essa situação? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
