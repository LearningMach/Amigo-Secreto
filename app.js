// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

let entrada = document.getElementById("amigo");
let listAmigos = document.getElementById("listaAmigos")


function agregarAmigo() {
    let nombre = entrada.value.trim();

    if(nombre) {
        amigos.push(nombre); 
        entrada.value = "";
        actualizarLista();   
    } else {
        alert("Introduce un nombre")
    }
}

function actualizarLista(){
    listAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Lista vacia");
        return;
    }
    let sorteoAmigo = Math.floor(Math.random()*amigos.length);
    let ganador = amigos[sorteoAmigo];
    
    alert(`El amigo sorteado es: ${ganador}`);
}
