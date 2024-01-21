function clickimagen() {
    var imagen = document.getElementById("imagen");
    imagen.classList.toggle("borde-rojo");
}

document.getElementById("imagen").addEventListener("click", clickimagen);
