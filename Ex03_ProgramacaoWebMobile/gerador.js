// funcoes

function criarDados(number){
    const posicaoDosPontosMatrix = {
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

    const dados = document.createElement("div");

    dados.classList.add("dados");

    for (const posicaoDospontos of posicaoDosPontosMatrix[number]) {
        const ponto = document.createElement("div");


        
    }



console.log(criarDados(3));

