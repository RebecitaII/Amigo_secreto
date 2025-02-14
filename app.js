// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se guardarán los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo"); 
    let nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, ingresa un nombre."); 
        return;
    }

    // Convertir a minúsculas para comparación
    const nombreNormalizado = nombre.toLowerCase();
    
    // Verificar si ya existe (insensible a mayúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombreNormalizado)) {
        alert("Ese nombre ya está en la lista."); 
        return;
    }

    amigos.push(nombre); 
    mostrarLista();
    input.value = ""; 
}

// Función para mostrar la lista de nombres en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); 
        item.textContent = amigos[i]; 
        lista.appendChild(item); 
    }
}

// Función para elegir un nombre al azar y reiniciar la lista
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 nombres en la lista para sortear.");
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * amigos.length); 
    let nombreSorteado = amigos[numeroAleatorio]; 

    // Eliminar al amigo sorteado de la lista
    amigos.splice(numeroAleatorio, 1);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    let mensaje = document.createElement("li");
    mensaje.textContent = "¡El amigo secreto es: " + nombreSorteado + "!";
    resultado.appendChild(mensaje); 

    mostrarLista();

    // Limpiar la lista y la pantalla después de 5 segundos
    if (amigos.length === 1) {
        setTimeout(limpiarTodo, 5000);
    }
}

// Función para limpiar la lista y reiniciar el juego
function limpiarTodo() {
    amigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
}
