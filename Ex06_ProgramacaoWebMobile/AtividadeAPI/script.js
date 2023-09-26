document.getElementById('search').addEventListener('click', function () {
    const city = document.getElementById('city').value;

    fetch(`https://wttr.in/${city.replace(/\s/g, '+')}?format=%C+%t+%w+%m`)
        .then(response => response.text())
        .then(data => {
            const resultElement = document.getElementById('result');
            resultElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao buscar dados do tempo:', error);
        });
});
