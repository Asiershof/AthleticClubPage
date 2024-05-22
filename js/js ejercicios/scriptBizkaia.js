function changeImage(event) {
    var image = document.getElementById('mapa');
    if (event.type === 'mouseover') {
        if (image.src.match("bizkaia")) {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/puentecolgante.jpg";
        } else {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/bizkaia.jpg";
        }
    } else if (event.type === 'mouseout') {
        if (image.src.match("puentecolgante")) {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/bizkaia.jpg";
        } else {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/puentecolgante.jpg";
        }
    }
}

document.getElementById('mapa').addEventListener('mouseover', changeImage);
document.getElementById('mapa').addEventListener('mouseout', changeImage);