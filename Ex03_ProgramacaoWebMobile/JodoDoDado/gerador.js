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

	for (let i = 0; i < numeroDoDado; i++) {
		const random = Math.floor((Math.random() * 6) + 1);
		const dado = criarDados(random);

		localDosDados.appendChild(dado);
	}
}

const NUMERO_DO_DADO = 2;
const localDosDados = document.querySelector(".local-dados");
const btnSorteoDado = document.querySelector(".btn-sortear-dados");

sorteioDosDados(localDosDados, NUMERO_DO_DADO);

btnSorteoDado.addEventListener("click", () => {
	const interval = setInterval(() => {
		sorteioDosDados(localDosDados, NUMERO_DO_DADO);
	}, 50);

	setTimeout(() => clearInterval(interval), 1000);
});