function changeImage(event) {
    var image = document.getElementById('mapa');
    if (event.type === 'mouseover') {
        if (image.src.match("gipuzkoa")) {
            image.src = "../../../imagenes/imagenes ejercicios/EjercicioConCSS3/peine.jpg";
        } else {
            image.src = "../../../imagenes/imagenes ejercicios/EjercicioConCSS3/gipuzkoa.jpg";
        }
    } else if (event.type === 'mouseout') {
        if (image.src.match("peine")) {
            image.src = "../../../imagenes/imagenes ejercicios/EjercicioConCSS3/gipuzkoa.jpg";
        } else {
            image.src = "../../../imagenes/imagenes ejercicios/EjercicioConCSS3/peine.jpg";
        }
    }
}

document.getElementById('mapa').addEventListener('mouseover', changeImage);
document.getElementById('mapa').addEventListener('mouseout', changeImage);