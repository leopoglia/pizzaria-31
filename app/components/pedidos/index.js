
const borda = document.querySelector('body > main > div > div.informacoes-pizza > div > div.fundo-pizza > div');
const queijo = document.querySelector('body > main > div > div.informacoes-pizza > div > div.fundo-pizza > div > div');


function tamanhoPizza(tamanho) {
    queijo.innerText = ""

    if (tamanho == 1 || (localStorage.getItem("tamanho") == "pequena" && tamanho == 0)) {
        borda.style = "width: 150px; height: 150px;"
        queijo.style = "width: 130px; height: 130px;"
        queijo.style.backgroundColor = "rgb(163, 132, 53)"
        borda.style.backgroundColor = "rgb(213, 163, 103)"
        localStorage.setItem("tamanho", "pequena")
        console.log(1)
    } else if (tamanho == 2 || (localStorage.getItem("tamanho") == "media" && tamanho == 0)) {
        borda.style = "width: 200px; height: 200px;"
        queijo.style = "width: 180px; height: 180px;"
        queijo.style.backgroundColor = "rgb(163, 132, 53)"
        borda.style.backgroundColor = "rgb(213, 163, 103)"
        localStorage.setItem("tamanho", "media")
        console.log(2)
    } else if (tamanho == 3 || (localStorage.getItem("tamanho") == "grande" && tamanho == 0)) {
        borda.style = "width: 250px; height: 250px;"
        queijo.style = "width: 225px; height: 225px;"
        queijo.style.backgroundColor = "rgb(163, 132, 53)"
        borda.style.backgroundColor = "rgb(213, 163, 103)"
        localStorage.setItem("tamanho", "grande")
        console.log(3)
    }

}

function sabor(sabor, $event) {
    tamanhoPizza(0);
    if ($event.path[0].checked == true) {
        if (sabor == 1) {
            queijo.style = queijo.style.cssText + "background-image: url('https://png.pngtree.com/thumb_back/fw800/background/20190513/pngtree-cheese-background-image_110810.jpg'); background-size: 100%";
        } else if (sabor == 2) {
            queijo.style = queijo.style.cssText + "background-image: url('https://i.imgur.com/UHEFQf2.png'); background-size: 150%; background-position: -10px";
        }else if(sabor == 3){
            queijo.style = queijo.style.cssText + "background-image: url('https://i.imgur.com/52v62xH.png'); background-size: 100%";
        }
    }

}