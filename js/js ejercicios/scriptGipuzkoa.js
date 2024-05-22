function changeImage(event) {
    var image = document.getElementById('mapa');
    if (event.type === 'mouseover') {
        if (image.src.match("gipuzkoa")) {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/peine.jpg";
        } else {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/gipuzkoa.jpg";
        }
    } else if (event.type === 'mouseout') {
        if (image.src.match("peine")) {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/gipuzkoa.jpg";
        } else {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/peine.jpg";
        }
    }
}

document.getElementById('mapa').addEventListener('mouseover', changeImage);
document.getElementById('mapa').addEventListener('mouseout', changeImage);