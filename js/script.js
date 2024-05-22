document.getElementById('sanmames').addEventListener('mouseover', function() {
    cambiarImagen('imagenes/sanmamesfuera.jpg');
});

document.getElementById('sanmames').addEventListener('mouseout', function() {
    cambiarImagen('imagenes/sanmames.jpg');
});

function cambiarImagen(nuevaImagen) {
    document.getElementById('sanmames').src = nuevaImagen;
}