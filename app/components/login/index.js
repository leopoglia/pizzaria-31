

function cadastrarUsuario(){
    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

    let form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault()
        console.log('Deu certo')
    })

    let usuario = {
        nome: nome,
        endereco: endereco,
        email: email,
        telefone: telefone
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.href = "../pedidos/index.html";
}