document.addEventListener('DOMContentLoaded', function() {
    const imagenSanMames = document.getElementById('sanmames');
    const imagenOriginal = 'imagenes/sanmames.jpg';
    const imagenAlternativa = 'imagenes/sanmamesfuera.jpg';
    let mostrandoAlternativa = false;

    function cambiarImagen(nuevaImagen) {
        imagenSanMames.src = nuevaImagen;
    }

    function configurarEventos() {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            imagenSanMames.removeEventListener('mouseover', onMouseOver);
            imagenSanMames.removeEventListener('mouseout', onMouseOut);
            imagenSanMames.addEventListener('click', onClick);
        } else {
            imagenSanMames.removeEventListener('click', onClick);
            imagenSanMames.addEventListener('mouseover', onMouseOver);
            imagenSanMames.addEventListener('mouseout', onMouseOut);
        }
    }

    function onMouseOver() {
        cambiarImagen(imagenAlternativa);
    }

    function onMouseOut() {
        cambiarImagen(imagenOriginal);
    }

    function onClick() {
        if (mostrandoAlternativa) {
            cambiarImagen(imagenOriginal);
        } else {
            cambiarImagen(imagenAlternativa);
        }
        mostrandoAlternativa = !mostrandoAlternativa;
    }

    configurarEventos();

    window.addEventListener('resize', configurarEventos);
});
