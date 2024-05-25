document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    mostrarMensaje();
});

function mostrarMensaje() {
    var mensaje = document.getElementById("mensajeExito");
    mensaje.classList.add("show");
    setTimeout(function() {
        mensaje.classList.remove("show");
    }, 3000);
}