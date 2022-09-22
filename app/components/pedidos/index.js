
function tamanhoPizza(tamanho) {

    let borda = document.querySelector('body > main > div > div.informacoes-pizza > div > div.fundo-pizza > div');
    let queijo = document.querySelector('body > main > div > div.informacoes-pizza > div > div.fundo-pizza > div > div');

    queijo.innerText = ""

    if (tamanho == 1) {
        borda.style = "width: 150px; height: 150px;"
        queijo.style = "width: 130px; height: 130px;"
        queijo.style.backgroundColor = "rgb(163, 132, 53)"
        borda.style.backgroundColor = "rgb(213, 163, 103)"
    } else if (tamanho == 2) {
        borda.style = "width: 200px; height: 200px;"
        queijo.style = "width: 180px; height: 180px;"
        queijo.style.backgroundColor = "rgb(163, 132, 53)"
        borda.style.backgroundColor = "rgb(213, 163, 103)"
    } else if (tamanho == 3) {
        borda.style = "width: 250px; height: 250px;"
        queijo.style = "width: 225px; height: 225px;"
        queijo.style.backgroundColor = "rgb(163, 132, 53)"
        borda.style.backgroundColor = "rgb(213, 163, 103)"
    }
}