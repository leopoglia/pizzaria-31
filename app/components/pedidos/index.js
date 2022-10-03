
const borda = document.querySelector('body > main > div > div.informacoes-pizza > div > div.fundo-pizza > div');
const queijo = document.querySelector('body > main > div > div.informacoes-pizza > div > div.fundo-pizza > div > div');
let sabores = 0;

function tamanhoPizza(tamanho) {
    queijo.innerText = ""

    console.log(document.querySelectorAll("input"))



    if (tamanho == 1 || (localStorage.getItem("tamanho") == "pequena" && tamanho == 0)) {
        borda.style = "width: 150px; height: 150px;"
        queijo.style = "width: 130px; height: 130px;"
        queijo.style.backgroundColor = "rgb(163, 132, 53)"
        borda.style.backgroundColor = "rgb(213, 163, 103)"
        localStorage.setItem("tamanho", "pequena")
        document.getElementById("total").innerText = 30;



    } else if (tamanho == 2 || (localStorage.getItem("tamanho") == "media" && tamanho == 0)) {
        borda.style = "width: 200px; height: 200px;"
        queijo.style = "width: 180px; height: 180px;"
        queijo.style.backgroundColor = "rgb(163, 132, 53)"
        borda.style.backgroundColor = "rgb(213, 163, 103)"
        localStorage.setItem("tamanho", "media")
        document.getElementById("total").innerText = 50;
    } else if (tamanho == 3 || (localStorage.getItem("tamanho") == "grande" && tamanho == 0)) {
        borda.style = "width: 250px; height: 250px;"
        queijo.style = "width: 225px; height: 225px;"
        queijo.style.backgroundColor = "rgb(163, 132, 53)"
        borda.style.backgroundColor = "rgb(213, 163, 103)"
        localStorage.setItem("tamanho", "grande")
        document.getElementById("total").innerText = 70;
    }
}

function sabor(sabor, $event) {
    tamanhoPizza(0);

    if ($event.path[0].checked == true) {
        sabores = sabores + 1;
    } else {
        sabores = sabores - 1;
    }

    if (localStorage.getItem("tamanho") == "pequena") {
        if (sabores > 2) {
            alert("Você não pode selecionar mais de 2 sabores")
            $event.path[0].checked = false;
            sabores = sabores - 1;
        }
    } else if (localStorage.getItem("tamanho") == "media") {
        if (sabores > 3) {
            alert("Você não pode selecionar mais de 3 sabores")
            $event.path[0].checked = false;
            sabores = sabores - 1;
        }
    } else if (localStorage.getItem("tamanho") == "grande") {
        if (sabores > 4) {
            alert("Você não pode selecionar mais de 4 sabores")
            $event.path[0].checked = false;
            sabores = sabores - 1;
        }
    }


    if ($event.path[0].checked == true) {
        if (sabor == 1) {
            queijo.style = queijo.style.cssText + "background-image: url('https://i.imgur.com/QPJlTqD.png'); background-size: 110%";
        } else if (sabor == 2) {
            queijo.style = queijo.style.cssText + "background-image: url('https://i.imgur.com/97VRI0f.png'); background-size: 110%";
        } else if (sabor == 3) {
            queijo.style = queijo.style.cssText + "background-image: url('https://i.imgur.com/52v62xH.png'); background-size: 110%";
        } else if (sabor == 4) {
            queijo.style = queijo.style.cssText + "background-image: url('https://i.imgur.com/7yzPKqu.png'); background-size: 115%";
        } else if (sabor == 5) {
            queijo.style = queijo.style.cssText + "background-image: url('https://i.imgur.com/jb9ywEH.png'); background-size: 115%";
        }
    }
}

function bebida(bebida, $event) {


    if (bebida == 1) {
        let bebida = document.querySelector("body > main > div > div.informacoes-pizza > div.fundo-bebidas > img.coca-cola-lata");
        bebida.classList.toggle("display-block")
        console.log(document.getElementById("total").innerText)

        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 5;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 5;
        }
    } else if (bebida == 2) {
        let bebida = document.querySelector("body > main > div > div.informacoes-pizza > div.fundo-bebidas > img.coca-cola");
        bebida.classList.toggle("display-block")

        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 10;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 10;
        }
    } else if (bebida == 3) {
        let bebida = document.querySelector("body > main > div > div.informacoes-pizza > div.fundo-bebidas > img.cerveja");
        bebida.classList.toggle("display-block")

        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 14;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 14;
        }
    } else if (bebida == 4) {
        let bebida = document.querySelector("body > main > div > div.informacoes-pizza > div.fundo-bebidas > img.abacaxi");
        bebida.classList.toggle("display-block")
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 12;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 12;
        }
    } else if (bebida == 5) {
        let bebida = document.querySelector("body > main > div > div.informacoes-pizza > div.fundo-bebidas > img.morango");
        bebida.classList.toggle("display-block")
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 12;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 12;
        }
    } else if (bebida == 6) {
        let bebida = document.querySelector("body > main > div > div.informacoes-pizza > div.fundo-bebidas > img.caipirinha");
        bebida.classList.toggle("display-block")
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 25;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 25;
        }
    }
}


function adicionais(adicionais, $event) {
    if (adicionais == 1) {
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 5;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 5;
        }
    } else if (adicionais == 2) {
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 6;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 6;
        }
    } else if (adicionais == 3) {
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 8;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 8;
        }
    } else if (adicionais == 4) {
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 10;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 10;
        }
    } else if (adicionais == 5) {
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 20;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 20;
        }
    } else if (adicionais == 6) {
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 5;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 5;
        }
    } else if (adicionais == 7) {
        if ($event.path[0].checked == true) {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - 5;
        } else {
            document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + 5;
        }


    }
}


function comprar() {
    let preco = document.getElementById("total").innerText;
    localStorage.setItem("preco", preco);
    document.querySelector("html").style.overflow = "hidden"

    document.querySelector("body > div").style.display = "flex";

    setTimeout(() => {
        document.querySelector("body > div > span:nth-child(1)").style.display = "none";
        document.querySelector("body > div > span:nth-child(2)").style.display = "none";
        document.querySelector("body > div > span:nth-child(3)").style.display = "none";

        document.getElementById("confirmacao").style.display = "block !important";

    }, "3000")




}