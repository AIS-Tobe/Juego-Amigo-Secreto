// Juego del amigo secreto. ALURA LATAM
let amigos = [];//
//Creando la funcion para añadir a un amigo
function agregarAmigo() {
    const amigo = document.getElementById("amigo").value
    //Condicion para no dejar un vacio 
    if(amigo === "") {
        alert("Por favor ingrese un nombre.");
        return;
    }
    //Añadiendo el nombre a la lista amigos[]
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    actualizarListaAmigos();
}
//Creando la funcion para actualizar la lista
function actualizarListaAmigos() {
    const mostrarAmigo = document.getElementById("listaAmigos");
    mostrarAmigo.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        mostrarAmigo.appendChild(li);
        console.log(amigos.length);
    });
}
//Creando la funcion para sortear los nombres de los amigos 
function sortearAmigo() {
    //Condicion de minimo 2 nombres
    if(amigos.length < 2) {
        alert("Por favor, ingrese al menos dos nombres para iniciar el sorteo.")
        return;
    }
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    let mostrarAmigo = document.getElementById("resultado");
    mostrarAmigo.textContent = "El amigo secreto es:" +amigoSecreto;
        document.getElementById("nuevoSorteo").removeAttribute("disabled");
    
}
//Creando funcion de nuevo sorteo
function nuevoSorteo() {
    amigos = [];
    document.getElementById("nuevoSorteo").setAttribute("disabled", "true");
    document.getElementById("amigo").value = "";
    document.getElementById("resultado").textContent = "";
    actualizarListaAmigos();
}