


function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}


function gerarNumerosDeDados() {
    const dado1 = gerarNumeroAleatorio();
    const dado2 = gerarNumeroAleatorio();
    return `Dado 1: ${dado1}, Dado 2: ${dado2}`;
}


function mostrarResultados() {
    const resultado = gerarNumerosDeDados();
    document.getElementById("resultado").textContent = resultado;
}
