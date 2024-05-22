document.addEventListener("DOMContentLoaded", function() {
    var imagenes = document.querySelectorAll("#tabla img");

    imagenes.forEach(function(imagen) {
        imagen.addEventListener("click", function() {
            var imagenCentro = document.getElementById("florCentro");

            imagenCentro.src = imagen.src;
            imagenCentro.alt = imagen.alt;
        });
    });
});
