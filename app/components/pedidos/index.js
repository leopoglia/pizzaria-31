
function tamanhoPizza(tamanho) {

    let borda = document.querySelector('body > main > div > div.informacoes-pizza > div > div.fundo-pizza > div');
    let queijo = document.querySelector('body > main > div > div.informacoes-pizza > div > div.fundo-pizza > div > div');



    if (tamanho == 1) {
        borda.style = "width: 150px; height: 150px;"
        queijo.style = "width: 130px; height: 130px;"
    } else if (tamanho == 2) {
        borda.style = "width: 200px; height: 200px;"
        queijo.style = "width: 180px; height: 180px;"
    } else if (tamanho == 3) {
        borda.style = "width: 250px; height: 250px;"
        queijo.style = "width: 225px; height: 225px;"
    }
}