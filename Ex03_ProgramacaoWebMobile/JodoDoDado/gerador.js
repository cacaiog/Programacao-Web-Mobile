// Definindo NUMERO_DO_DADO como variável global
const NUMERO_DO_DADO = 2;

function criarDados(number) {
    const posicaoDoPonto = {
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80]
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]
    };

    const dado = document.createElement("div");

    dado.classList.add("dado");

    for (const posicaoPonto of posicaoDoPonto[number]) {
        const dot = document.createElement("div");

        dot.classList.add("pontos-dado");
        dot.style.setProperty("--top", posicaoPonto[0] + "%");
        dot.style.setProperty("--left", posicaoPonto[1] + "%");
        dado.appendChild(dot);
    }

    return dado;
}

function sorteioDosDados(localDosDados, numeroDoDado) {
    localDosDados.innerHTML = "";

    let somaDados = 0; // Variável para armazenar a soma dos dados

    for (let i = 0; i < numeroDoDado; i++) {
        const random = Math.floor((Math.random() * 6) + 1);
        const dado = criarDados(random);

        localDosDados.appendChild(dado);

        // Adicione o valor do dado à soma
        somaDados += random;
    }

    return somaDados; // Retornar a soma dos dados
}

function mostrarAlerta(mensagem) {
    alert(mensagem);
}

function jogarCraps(localDosDados) {
    const somaDados = sorteioDosDados(localDosDados, NUMERO_DO_DADO);

    console.log(`Você lançou: ${somaDados}`);

    // Adicione um atraso de 500 milissegundos (0,5 segundos) antes de exibir o alerta
    setTimeout(() => {
        if (somaDados === 7 || somaDados === 11) {
            mostrarAlerta("Você ganhou! 🎉");
        } else if (somaDados === 2 || somaDados === 3 || somaDados === 12) {
            mostrarAlerta("Você perdeu. 😞");
        } else {
            console.log("Você continua jogando...");
            // Adicione mais regras do Craps, se desejar.
        }
    }, 500);
}

const btnSorteoDado = document.querySelector(".btn-sortear-dados");
const localDosDados = document.querySelector(".local-dados");

btnSorteoDado.addEventListener("click", () => {
    const interval = setInterval(() => {
        sorteioDosDados(localDosDados, NUMERO_DO_DADO);
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
        jogarCraps(localDosDados);
    }, 1000);
});

// Executa o sorteio inicial quando a página carrega
sorteioDosDados(localDosDados, NUMERO_DO_DADO);
