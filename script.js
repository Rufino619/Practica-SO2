// Lógica para mostrar el mensaje personalizado
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje");
    if (nombre.trim() !== "") {
        mensaje.textContent = ¡Hola, ${nombre}! Gracias por visitar nuestra página.;
    } else {
        mensaje.textContent = "Por favor, escribe tu nombre.";
    }
});

// Lógica para el contador
let contador = 0;
document.getElementById("boton-contar").addEventListener("click", function () {
    contador++;
    document.getElementById("contador").textContent = contador;
});